import Web3 from 'web3'

const GETH_PORT = 8545
const LOCAL_PROVIDER = `http://localhost:${GETH_PORT}`

export const getWeb3Provider = provider => new Web3(new Web3.providers.HttpProvider(provider))

export const getInjectedWeb3Provider = () => new Web3(window.injectedWeb3.currentProvider)

const resolveWeb3 = (resolve) => {
  if (typeof window.web3 !== 'undefined') {
    console.log('Web3 has been injected by the browser (Mist/MetaMask).')
    // save injected web3 to window
    window.injectedWeb3 = window.web3
    resolve(getInjectedWeb3Provider())
  } else {
    console.log(`Web3 not found, using ${LOCAL_PROVIDER} as provider.`)
    resolve(getWeb3Provider(LOCAL_PROVIDER))
  }
}

export const web3Promise = () =>
  new Promise((resolve) => {
    // wait for loading event to avoid race conditions with web3 injection timing
    window.addEventListener('load', () => resolveWeb3(resolve))
    // if document already loaded, get Web3 immediately
    if (document.readyState === 'complete') resolveWeb3(resolve)
  })
