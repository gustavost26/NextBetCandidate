// src/components/Menu.js

import { usePathname } from 'next/navigation'
import React from 'react';

export default function Menu({walletAddress, btnLoginClick, logout}) {

  const pathname = usePathname();

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand fw-bold" href="/">BetCandidate</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Alternar navegação">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav align-items-center">
              {/* Exemplo de diferentes formas de utilização do condicional dentro do className */}
              <li className="nav-item">
                <a className={(pathname == "/" ? "nav-link active" : "nav-link")} href="/">Início</a>
              </li>
              <li className="nav-item">
                <a className={"nav-link " + (pathname == "/bet" ? " active" : "")} aria-current="page" href="/bet">Apostar</a>
              </li>
              <li className="nav-item">
                <a className={`nav-link ${pathname == "/rules" ? " active" : ""}`} href="/rules">Regras</a>
              </li>
              <li className="nav-item">
                {walletAddress ? (
                  <>
                    <span className="navbar-text ms-3 text-light">
                      {walletAddress.substring(0, 6)}...{walletAddress.slice(-4)}
                    </span>
                    <button className="btn btn-outline-light ms-3" onClick={logout}>
                      Logout
                    </button>
                  </>
                ) : (
                  <button className="btn btn-outline-light ms-3" onClick={btnLoginClick}>
                    <img src="/metamask.svg" width={24} className="me-2" alt="MetaMask" />
                    Conectar MetaMask
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}