// src/app/about/page.js
'use client';

import Head from "next/head";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import { useEffect, useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { AuthContext } from "@/contexts/AuthContext";
import { doLogin } from "@/services/Web3Service";

export default function Rules() {
  const { push } = useRouter();
  const { walletAddress, setWalletAddress, logout } = useContext(AuthContext);
  const [message, setMessage] = useState("");

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
        <title>BetCandidate | Regras da Aposta</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      {/* Navbar Menu   */}
      <Menu walletAddress={walletAddress} btnLoginClick={btnLoginClick} logout={logout}/>

      <div className="container py-5">
        <header className="text-center mb-5">
          <h1 className="display-4 fw-bold">Regras da Aposta</h1>
          <p className="lead">Bem-vindo ao BetCandidate! Aqui você pode apostar em quem será o próximo presidente dos Estados Unidos.</p>
          <p className="lead">Por favor, leia atentamente as regras abaixo antes de participar:</p>
        </header>
        <div className="row justify-content-center">
          <div className="col-md-10">
            <div className="accordion" id="rulesAccordion">
              {/* Regra 1 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    1. Como Funciona
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#rulesAccordion">
                  <div className="accordion-body">
                    Você pode apostar em um dos dois candidatos disponíveis até a data limite de apostas. Após o encerramento das eleições e divulgação do resultado oficial, o contrato será finalizado e os vencedores poderão reivindicar seus prêmios.
                  </div>
                </div>
              </div>
              {/* Regra 2 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    2. Data Limite de Apostas
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#rulesAccordion">
                  <div className="accordion-body">
                    As apostas podem ser feitas até a data específica definida no contrato inteligente. Após essa data, novas apostas não serão mais aceitas.
                  </div>
                </div>
              </div>
              {/* Regra 3 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    3. Como Apostar
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#rulesAccordion">
                  <div className="accordion-body">
                    Para apostar, você deve conectar sua carteira MetaMask e escolher o candidato em quem deseja apostar. Você só pode fazer uma aposta, portanto, escolha com cuidado.
                  </div>
                </div>
              </div>
              {/* Regra 4 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    4. Valor da Aposta
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#rulesAccordion">
                  <div className="accordion-body">
                    Não há um valor mínimo ou máximo para a aposta. O valor que você apostar influenciará diretamente no seu potencial prêmio.
                  </div>
                </div>
              </div>
              {/* Regra 5 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    5. Taxa de Comissão
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#rulesAccordion">
                  <div className="accordion-body">
                    Uma taxa de 10% será deduzida do montante total das apostas como comissão para manutenção da plataforma.
                  </div>
                </div>
              </div>
              {/* Regra 6 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSix">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                    6. Distribuição dos Prêmios
                  </button>
                </h2>
                <div id="collapseSix" className="accordion-collapse collapse" aria-labelledby="headingSix" data-bs-parent="#rulesAccordion">
                  <div className="accordion-body">
                    O montante líquido, após a dedução da comissão, será distribuído proporcionalmente entre os apostadores que escolheram o candidato vencedor.
                  </div>
                </div>
              </div>
              {/* Regra 7 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingSeven">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                    7. Reivindicando o Prêmio
                  </button>
                </h2>
                <div id="collapseSeven" className="accordion-collapse collapse" aria-labelledby="headingSeven" data-bs-parent="#rulesAccordion">
                  <div className="accordion-body">
                    Após o resultado ser confirmado e o contrato finalizado, você poderá reivindicar seu prêmio acessando a plataforma e clicando em "Reivindicar Prêmio". Certifique-se de fazer isso com a mesma carteira que usou para apostar.
                  </div>
                </div>
              </div>
              {/* Regra 8 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingEight">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseEight" aria-expanded="false" aria-controls="collapseEight">
                    8. Transparência e Segurança
                  </button>
                </h2>
                <div id="collapseEight" className="accordion-collapse collapse" aria-labelledby="headingEight" data-bs-parent="#rulesAccordion">
                  <div className="accordion-body">
                    Todas as transações são realizadas on-chain através de contratos inteligentes na rede Ethereum (Sepolia). O código do contrato é público e pode ser verificado no <a href="https://sepolia.etherscan.io/address/0xf769620cB16Dde326539B403A89c4E6e46A99a27">Etherscan</a>.
                  </div>
                </div>
              </div>
              {/* Regra 9 */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingNine">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseNine" aria-expanded="false" aria-controls="collapseNine">
                    9. Importante
                  </button>
                </h2>
                <div id="collapseNine" className="accordion-collapse collapse" aria-labelledby="headingNine" data-bs-parent="#rulesAccordion">
                  <div className="accordion-body">
                    Certifique-se de que entende todos os termos antes de participar. Ao fazer uma aposta, você concorda com todas as regras estabelecidas.
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-4">
              <p className="lead">Boa sorte e que vença o melhor candidato!</p>
            </div>
          </div>
        </div>
        {message && (
          <div className="alert alert-info mt-3 text-center" role="alert">
            {message}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}