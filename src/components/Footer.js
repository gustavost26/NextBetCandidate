// src/components/Footer.js

import React from 'react';

export default function Footer() {
	const contractAddress = "0x5a505653ADF877DB231F80164C1eFA804B38eb43";
	const polygonScanContractAddress = `https://amoy.polygonscan.com/address/${contractAddress}`;

	return (
		<footer className="bg-light text-muted py-4">
			<div className="container text-center">
				<p className="text-muted my-3">
					Endereço do Smart Contract: <strong>{contractAddress}</strong>
				</p>
				<p className="text-muted mb-5">
					<a
						href={polygonScanContractAddress}
						target="_blank"
						rel="noopener noreferrer"
						className="btn btn-outline-dark"
						style={{ textDecoration: "none", display: "inline-flex", alignItems: "center" }}
					>
						<img
							src="https://amoy.polygonscan.com/assets/generic/html/favicon-light.ico"
							alt="PolygonScan"
							width="20"
							className="me-2"
						/>
						Ver no PolygonScan
					</a>
				</p>
				<p className="mb-1">&copy; 2024 BetCandidate, Inc. Todos os direitos reservados.</p>
				<ul className="list-inline">
					<li className="list-inline-item">
						<a href="/" className="text-muted">Início</a>
					</li>
					<li className="list-inline-item">
						<a href="/bet" className="text-muted">Apostar</a>
					</li>
					<li className="list-inline-item">
						<a href="/rules" className="text-muted">Regras</a>
					</li>
				</ul>
			</div>
		</footer>
	);
}
