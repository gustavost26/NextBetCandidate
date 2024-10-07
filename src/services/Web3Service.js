import Web3 from "web3";
import ABI from "./ABI.json";

const CONTRACT_ADDRESS = "0xa6044f7d6f002d115d40407367059b06a3fcbadd";

export async function doLogin() {

  if (!window.ethereum) throw new Error(`MetaMask não esta instalada!`);

  const web = new Web3(window.ethereum);
  const accounts = await web.eth.requestAccounts();

  if (!accounts || !accounts.length) throw new Error(`MetaMask não foi autorizada!`);

  // Verifica se a rede está correta e tenta mudar se necessário
  await checkNetwork();

  localStorage.setItem("wallet", accounts[0]);
  return accounts[0];
}

const AMOY_NETWORK_ID = 80002;

export async function checkNetwork() {
  const web3 = new Web3(window.ethereum);
  const networkId = await web3.eth.getChainId();
  if (networkId !== AMOY_NETWORK_ID) {
    try {
      // Solicita a mudança para a rede Amoy
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x13882' }], // Hexadecimal de 80002
      });
    } catch (error) {
      // Se a rede Amoy não estiver adicionada no MetaMask
      if (error.code === 4902) {
        try {
          await window.ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
              chainId: '0x13882',
              chainName: 'Polygon Amoy Testnet',
              nativeCurrency: {
                name: 'Amoy',
                symbol: 'MATIC',
                decimals: 18,
              },
              rpcUrls: ['https://rpc-amoy.polygon.technology/'], // Adicione um RPC válido aqui
              blockExplorerUrls: ['https://amoy.polygonscan.com'],
            }],
          });
        } catch (addError) {
          throw new Error('Não foi possível adicionar a rede Amoy ao MetaMask.');
        }
      } else {
        throw new Error('Por favor, mude para a rede Amoy no MetaMask.');
      }
    }
  }
}

function getContract() {
  //Verificando se a MetaMask esta instalada
  if (!window.ethereum) throw new Error(`MetaMask não esta instalada!`);
  //Pegando a endereço da carteira no localstorage
  const from = localStorage.getItem("wallet");
  //Apontamento para a carteira do browser.
  const web3 = new Web3(window.ethereum);
  //Inicialização do objeto de contrato
  //ABI: especificação do contrato
  //CONTRACT_ADDRESS: Endereço do contrato na blockchain
  //From: Pessoa autenticada para interagir com o contrato
  return new web3.eth.Contract(ABI, CONTRACT_ADDRESS, { from });
}

export async function getDispute() {
  const contract = getContract();
  //Faz a chamada do metodo dispute do contrato na blockchain
  return contract.methods.dispute().call();
}

export async function placeBet(candidate, amountInEth) {
  const contract = getContract();
  return contract.methods.bet(candidate).send({
    value: Web3.utils.toWei(amountInEth, "ether"),
    //O valor de gas esta na informação da transação no https://amoy.polygonscan.com/
    gas: 115690,
    gasPrice: "29100000015"
  });
}

//Criar uma painel administrativo para o dono da conta acessar e finalizar a disputa
//Metodo para finalizar a disputa
export async function finishDispute(winner) {
  const contract = getContract();
  return contract.methods.bet(winner).send({
    //O valor de gas esta na informação da transação no https://amoy.polygonscan.com/
    //gas: 115690,
    gasPrice: "29100000015"
  });
}

export async function claimPrize() {
  const contract = getContract();
  return contract.methods.claim().send();
}