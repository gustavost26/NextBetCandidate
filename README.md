# **NextBetCandidate**

**NextBetCandidate** é uma plataforma de apostas on-chain que permite aos usuários apostarem em quem será o próximo presidente dos Estados Unidos. O aplicativo é construído com Next.js e React, utilizando contratos inteligentes na rede Polygon (Amoy Testnet) para garantir transparência e segurança em todas as transações.

# **Site Online Pelo Vercel**
- **Visite nosso site**: [NextBetCandidate](https://nextbetcandidate.vercel.app/)
- **Veja o contrato no Polygonscan**: [Contrato NextBetCandidate](https://amoy.polygonscan.com/address/0xa6044f7d6f002d115d40407367059b06a3fcbadd)

[![betcandidate_home.png](https://i.postimg.cc/bYHD5cXM/betcandidate-home.png)](https://postimg.cc/rzswdHwC)

[![betcandidate_bet.png](https://i.postimg.cc/m2LzfXBr/betcandidate-bet.png)](https://postimg.cc/PN7r1MLG)

[![amoy-polygonscan-contractaddress.png](https://i.postimg.cc/7b8jH6m0/amoy-polygonscan-contractaddress.png)](https://postimg.cc/jncMvsVS)


[![metamask_connection.png](https://i.postimg.cc/MZjtfGQB/metamask-connection.png)](https://postimg.cc/XX49T4xN) [![metamask_permission.png](https://i.postimg.cc/WbL8GPGH/metamask-permission.png)](https://postimg.cc/XXL9WmDf)


---


# Índice

- [Visão Geral](#visão-geral)
- [Funcionalidades](#funcionalidades)
- [Tecnologias Utilizadas](#tecnologias-utilizadas)
- [Pré-requisitos](#pré-requisitos)
- [Instalação](#instalação)
- [Uso](#uso)
- [Contrato Inteligente](#contrato-inteligente)
- [Contribuição](#contribuição)
- [Licença](#licença)
- [Contato](#contato)


---


# Visão Geral

O **NextBetCandidate** permite que os usuários participem de apostas descentralizadas sobre o resultado das eleições presidenciais americanas. Utilizando a carteira MetaMask, os usuários podem conectar-se à plataforma, escolher seu candidato preferido e apostar uma quantidade desejada de POL(MATIC). Após o encerramento das eleições e divulgação do resultado oficial, os vencedores podem reivindicar seus prêmios diretamente na plataforma.


---


# Funcionalidades

- **Conexão com MetaMask**: Os usuários podem conectar suas carteiras MetaMask para interagir com a plataforma.

- **Verificação de Rede**: O aplicativo verifica se o usuário está conectado à rede Amoy e solicita a mudança de rede, se necessário.

- **Apostar em Candidatos**: Os usuários podem apostar em um dos candidatos disponíveis até a data limite de apostas.

- **Reivindicar Prêmios**: Após o resultado oficial, os vencedores podem reivindicar seus prêmios.

- **Interface Intuitiva**: Utiliza Bootstrap para uma interface amigável e responsiva.

- **Transparência On-Chain**: Todas as transações são realizadas através de contratos inteligentes na rede Polygon (Amoy Testnet).


---


# Tecnologias Utilizadas

- **Remix**: Ferramenta para desenvolvimento e deploy de contratos inteligentes na blockchain da Ethereum.
- **Next.js 14.2.14**: Framework React para desenvolvimento web.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Web3.js**: Biblioteca para interagir com o Ethereum blockchain.
- **MetaMask**: Extensão de navegador para interação com a blockchain Ethereum.
- **Solidity**: Linguagem de programação para contratos inteligentes na Ethereum.
- **Bootstrap 5**: Framework CSS para estilização e responsividade.
- **React Context API**: Gerenciamento de estado global para autenticação.


---


# Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- **Node.js** (versão 14 ou superior)
- **NPM** (gerenciador de pacotes do Node.js)
- **MetaMask** (extensão instalada em seu navegador)
- **Conta na rede Amoy Testnet** com POL(MATIC) de teste (pode ser obtido em faucets)
- **Faucets recomendados**: [Chainlink Faucets](https://faucets.chain.link/) [Polygon Faucets](https://faucet.polygon.technology/)


---


# Instalação
1. Clone o repositório:

```bash
git clone https://github.com/gustavost26/NextBetCandidate.git
```

2. Navegue até o diretório do projeto:

```bash
cd NextBetCandidate
```
3. Instale as dependências:

```bash
npm install
```


---


# Uso

## Executando o Projeto Localmente

1. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```
2. Acesse o aplicativo no navegador:

Abra `http://localhost:3000` para ver o aplicativo.

## Interagindo com a Plataforma

### 1. Conecte-se com a MetaMask:

- Certifique-se de que sua MetaMask está conectada à rede Amoy Testnet.
- Clique em **`Conectar MetaMask`** na página inicial.

### 2. Aposte em um Candidato:

- Após conectar-se, você será redirecionado para a página de apostas.
- Escolha um dos candidatos disponíveis e clique em **`Apostar neste candidato`**.
- Insira o valor em POL(MATIC) que deseja apostar.

### 3. Reivindique seu Prêmio:

- Após o resultado oficial das eleições, acesse a plataforma.
- Se o candidato em quem você apostou venceu, clique em "Pegar meu prêmio" para receber seus ganhos.


---


## Observações
- **Taxa de Comissão**: Uma taxa de 10% é deduzida do montante total das apostas como comissão para manutenção da plataforma.
- **Transparência**: O código do contrato inteligente é público e pode ser verificado no Polygonscan.


---


# Contrato Inteligente
O contrato inteligente está implantado na rede Amoy Testnet.

- **Endereço do Contrato**: `0xa6044f7d6f002d115d40407367059b06a3fcbadd`
- **Polygonscan**: [Ver Contrato no Polygonscan](https://amoy.polygonscan.com/address/0xa6044f7d6f002d115d40407367059b06a3fcbadd)


---


# Contribuição
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue ou enviar um pull request.

Passos para contribuir:

1. **Faça um fork do projeto**.

No GitHub, clique em "Fork" no canto superior direito da página do repositório.

2. **Clone o repositório forkado**:

```bash   
git clone https://github.com/seu-usuario/NextBetCandidate.git
```
3. **Crie uma nova branch**:

```bash
Copiar código
git checkout -b feature/nova-funcionalidade
```

4. **Commit suas mudanças**:

```bash
git commit -m 'Adiciona nova funcionalidade'
```

5. **Envie para o seu fork no GitHub**:

```bash
git push origin feature/nova-funcionalidade
```

6. **Abra um pull request**:
- No GitHub, vá até o seu fork e clique em "Compare & Pull Request".


---


# Licença
Este projeto está licenciado sob a Licença MIT - veja o arquivo LICENSE para detalhes.


---


# Contato
- **Nome**: Gustavo Silva Teles
- **Email**: gustavost26@gmail.com
- **GitHub**: gustavost26


---


# Agradecimentos
Agradeço ao professor Luiz, que me inspirou a desenvolver esse projeto.

---


# Notas Adicionais
- **Segurança**: Certifique-se de nunca compartilhar suas chaves privadas. O NextBetCandidate não solicita nem armazena informações privadas dos usuários.
- **Testnet**: Este aplicativo utiliza a Amoy Testnet. Os POL(MATIC) utilizados são de teste e não possuem valor real.
- **Responsabilidade**: Este projeto é para fins educacionais e de demonstração. Não nos responsabilizamos por quaisquer perdas ou danos decorrentes do uso deste aplicativo.


---


# Troubleshooting

Se você encontrar problemas ao executar o aplicativo, tente as seguintes etapas:

- **Verifique a Conexão com a Rede Amoy**:
   - Certifique-se de que sua MetaMask está conectada à rede Amoy.
   - Se necessário, adicione a rede Amoy manualmente na MetaMask.

- **Erros ao Instalar Dependências**:
   - Certifique-se de que está utilizando a versão correta do Node.js e NPM.
   - Exclua a pasta node_modules e o arquivo package-lock.json, e execute npm install novamente.

- **Problemas com a MetaMask**:
   - Atualize a extensão MetaMask para a versão mais recente.
   - Limpe o cache do navegador ou tente em um navegador diferente.


---


# Desenvolvimento Futuro

- **Melhorias na Interface**:
   - Implementar animações e transições suaves.
   - Melhorar a responsividade em dispositivos móveis.
- **Funcionalidades Avançadas**:
   - Implementar um sistema de apostas múltiplas.
   - Adicionar suporte a outras criptomoedas.

---

Esperamos que você aproveite o NextBetCandidate! Se tiver alguma dúvida ou sugestão, não hesite em entrar em contato.