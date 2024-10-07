"use client"

import Head from "next/head";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { useRouter } from "next/navigation";
import { useState, useContext, useEffect } from "react";
import { doLogin } from "@/services/Web3Service";
import { AuthContext } from "@/contexts/AuthContext";


export default function Home() {

  const { push } = useRouter();
  const { walletAddress, setWalletAddress, logout } = useContext(AuthContext);
  const [message, setMessage] = useState();

  /*function btnLoginClick() {
    setMessage("Conectando na carteira... Aguarde...");
    doLogin()
      .then(account => push("/bet"))
      .catch(err => {
        console.log(err);
        setMessage(err.message);
      });
  }*/

  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  async function btnLoginClick() {
    if (walletAddress) {
      push("/bet"); // Se já estiver conectado, redireciona para a página de apostas
    } else {
      setMessage("Conectando à sua carteira, aguarde...");
      try {
        const account = await doLogin();
        setWalletAddress(account);
        setMessage("");
        push("/bet");
      } catch (err) {
        console.error(err);
        setMessage(err.message);
      }
    }
  }

  return (
    <>
      <Head>
        <title>BetCandidate AAA | Login</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navbar Menu   */}
      <Menu walletAddress={walletAddress} btnLoginClick={btnLoginClick} logout={logout}/>

      <div className="container px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-6">
            <img src="https://ehstigertimes.com/wp-content/uploads/2024/09/skynews-2024-us-election-teaser_6671376.png" className="d-block mx-lg-auto img-fluid rounded shadow" alt="Eleições Americanas" width="700" height="500" />
          </div>
          <div className="col-6">
            <h1 className="display-5 fw-bold text-body-emphasis lh-1 mb-3">BetCandidate</h1>
            <p className="lead">Apostas on-chain nas eleições americanas.</p>
            <p className="lead">Autentique-se com sua carteira e deixe a sua aposta para a próxima disputa.</p>
            <div className="d-flex justify-content-start">
              <button type="button" className="btn btn-primary btn-lg px-4" onClick={btnLoginClick}>
                <img src="/metamask.svg" width={64} className="me-3" />
                Conectar MetaMask
              </button>
            </div>
            <p className="message">{message}</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}