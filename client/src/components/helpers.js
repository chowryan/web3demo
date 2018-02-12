import Web3 from 'web3'

const LOCAL_PROVIDER = 'http://localhost:8545'

const resolveWeb3 = (resolve) => {
  if (typeof window.web3 !== 'undefined') {
    console.log('Web3 has been injected by the browser (Mist/MetaMask).')
    resolve(new Web3(window.web3.currentProvider))
  } else {
    console.log(`Web3 not found, using ${LOCAL_PROVIDER} as provider.`)
    resolve(new Web3(new Web3.providers.HttpProvider(LOCAL_PROVIDER)))
  }
}

export default () =>
  new Promise((resolve) => {
    // wait for loading event to avoid race conditions with web3 injection timing
    window.addEventListener('load', () => resolveWeb3(resolve))
    // if document already loaded, get Web3 immediately
    if (document.readyState === 'complete') resolveWeb3(resolve)
  })

