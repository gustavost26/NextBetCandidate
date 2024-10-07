"use client"

import Head from "next/head";
import Web3 from "web3";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { useState, useEffect, useContext } from "react";
import { useRouter } from "next/navigation";
import { checkNetwork, claimPrize, getDispute, placeBet } from "@/services/Web3Service";
import { AuthContext } from "@/contexts/AuthContext";

export default function Home() {

  const { push } = useRouter();
  const { walletAddress, logout, isAuthLoading } = useContext(AuthContext);
  const [showModal, setShowModal] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [message, setMessage] = useState();
  const [amount, setAmount] = useState('');
  const [dispute, setDispute] = useState({
    candidate1: "Loading...",
    candidate2: "Loading...",
    image1: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHWFM1IG7wiMV5ef2xI-Yyxq2KCeWsjovfn5G42EwcKG15qAKzkCA2GH_V8xI3MrM0ADI&usqp=CAU",
    image2: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHWFM1IG7wiMV5ef2xI-Yyxq2KCeWsjovfn5G42EwcKG15qAKzkCA2GH_V8xI3MrM0ADI&usqp=CAU",
    total1: 0,
    total2: 0,
    winner: 0
  });

  /*useEffect(() => {

    import('bootstrap/dist/js/bootstrap.bundle.min.js');

    if (!localStorage.getItem("wallet")) return push("/");

    setMessage("Obtendo dados da disputa... Aguarde...");
      getDispute()
        .then(dispute => {
          setDispute(dispute);
          setMessage("");
        })
        .catch(err => {
          console.error(err);
          setMessage(err.message);
        })
  }, [walletAddress]);*/

  /*function processBet(candidate) {
    setMessage("Conectando na carteira... Aguarde...");
    const amount = prompt("Quantia em POL para apostar: ", "1");
    placeBet(candidate, amount)
      .then(() => {
        alert("Aposta recebida com sucesso. Pode demorar 1 minuto para que apareça no sistema.");
        setMessage("");
      })
      .catch(err => {
        console.error(err.data ? err.data : err);
        setMessage(err.data ? err.data.message : err.message);
      })
  }*/

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');

    if (isAuthLoading) {
      return;
    }

    if (!walletAddress) {
      push("/");
    } else {
      setMessage("Verificando a rede, aguarde...");
      checkNetwork()
        .then(() => {
          setMessage("Obtendo dados da disputa, aguarde...");
          return getDispute();
        })
        .then(dispute => {
          setDispute(dispute);
          setMessage("");
        })
        .catch(err => {
          console.error(err);
          setMessage(err.message);
        });
    }
  }, [walletAddress, isAuthLoading]);

  function processBet(candidate) {
    setSelectedCandidate(candidate);
    setAmount('0.01'); // Valor padrão
    setShowModal(true);
  }

  function confirmBet() {
    if (amount !== null && amount !== "") {
      setShowModal(false);
      setMessage("Processando a aposta, aguarde...");
      placeBet(selectedCandidate, amount)
        .then(() => {
          alert("Aposta recebida com sucesso! As informações podem demorar alguns segundos para serem atualizadas.");
          setMessage("");
          return getDispute();
        })
        .then(dispute => {
          setDispute(dispute);
        })
        .catch(err => {
          console.error(err);
          setMessage(err.message);
        });
    } else {
      alert("Por favor, insira um valor válido.");
    }
  }

  function btnLoginClick() {
    push("/");
  }

  function btnClaimClick() {
    setMessage("Conectando na carteira... Aguarde...");
    claimPrize()
      .then(() => {
        alert("Prêmio coletado com sucesso. Pode demorar 1 minuto para que apareça na sua carteira.");
        setMessage("");
      })
      .catch(err => {
        console.error(err.data ? err.data : err);
        setMessage(err.data ? err.data.message : err.message);
      })
  }

  // Calcular total de apostadores
  const totalBettors = parseInt(dispute.total1) + parseInt(dispute.total2);

  let percentage1 = 50;
  let percentage2 = 50;

  if (totalBettors > 0) {
    percentage1 = (parseInt(dispute.total1) / totalBettors) * 100;
    percentage2 = (parseInt(dispute.total2) / totalBettors) * 100;
  }

  return (
    <>
      <Head>
        <title>BetCandidate | Apostar</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      {/* Navbar Menu   */}

      <Menu walletAddress={walletAddress} btnLoginClick={btnLoginClick} logout={logout}/>

      <div className="container py-5">
        <header className="text-center mb-5">
          <h1 className="display-4 fw-bold">BetCandidate</h1>
          <p className="lead mb-0">Apostas on-chain nas eleições americanas.</p>
          {dispute.winner == 0
            ? <p className="lead">Você tem até o dia da eleição para deixar sua aposta em um dos candidatos.</p>
            : <p className="lead">Eleições encerradas! Veja o vencedor(a) abaixo e solicite seu prêmio.</p>
          }
        </header>
        {/* Envolver a barra de progresso em uma row e col */}
        <div className="row justify-content-center">
          <div className="col-md-10 mb-2 text-center">
            <h5>Distribuição de Apostadores</h5>
          </div>
          <div className="col-md-10 mb-4">
            <div className="progress mb-2">
              <div
                className="progress-bar bg-danger"
                role="progressbar"
                style={{ width: `${percentage1}%` }}
                aria-valuenow={percentage1}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {dispute.candidate1}: {percentage1.toFixed(2)}%
              </div>
              <div
                className="progress-bar bg-primary"
                role="progressbar"
                style={{ width: `${percentage2}%` }}
                aria-valuenow={percentage2}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {dispute.candidate2}: {percentage2.toFixed(2)}%
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {(dispute.winner == 0 || dispute.winner == 1) && (
            <div className="col-md-5 mb-4">
              <div className="card text-center h-100 shadow">
                <img
                  src={dispute.image1}
                  className="card-img-top"
                  alt={dispute.candidate1}
                />
                <div className="card-body">
                  <h5 className="card-title">{dispute.candidate1}</h5>
                  <p className="card-text">{Web3.utils.fromWei(dispute.total1, "ether")} POL apostados</p>
                  {dispute.winner == 1
                    ? <button className="btn btn-primary" onClick={btnClaimClick}>Pegar meu prêmio</button>
                    : <button className="btn btn-primary" onClick={() => processBet(1)}>Apostar neste candidato</button>
                  }
                </div>
              </div>
            </div>
          )}
          {(dispute.winner == 0 || dispute.winner == 2) && (
            <div className="col-md-5 mb-4">
              <div className="card text-center h-100 shadow">
                <img
                  src={dispute.image2}
                  className="card-img-top"
                  alt={dispute.candidate2}
                />
                <div className="card-body">
                  <h5 className="card-title">{dispute.candidate2}</h5>
                  <p className="card-text">{Web3.utils.fromWei(dispute.total2, "ether")} POL apostados</p>
                  {dispute.winner == 2
                    ? <button className="btn btn-primary" onClick={btnClaimClick}>Pegar meu prêmio</button>
                    : <button className="btn btn-primary" onClick={() => processBet(2)}>Apostar neste candidato</button>
                  }
                </div>
              </div>
            </div>
          )}
        </div>
        {message && (
          <div className="alert alert-info mt-3 text-center" role="alert">
            {message}
          </div>
        )}
        {/* Modal para Inserir Quantia de Aposta */}
        <div className={`modal fade ${showModal ? 'show d-block' : ''}`} tabIndex="-1" role="dialog">
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Apostar no Candidato</h5>
                <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
              </div>
              <div className="modal-body">
                <p>Digite a quantidade em POL que deseja apostar:</p>
                <input
                  type="number"
                  className="form-control"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  min="0"
                  step="0.001"
                  placeholder="0.01"
                />
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Cancelar</button>
                <button type="button" className="btn btn-primary" onClick={confirmBet}>Confirmar Aposta</button>
              </div>
            </div>
          </div>
        </div>
        {showModal && <div className="modal-backdrop fade show"></div>}
      </div>
      <Footer />
    </>
  );
}