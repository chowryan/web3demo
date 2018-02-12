import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import initStore from './redux/store'
import { defaultMainState } from './redux/main/reducer'

import App from './components/App'

const store = initStore(defaultMainState)

const render = (Component) => {
  ReactDOM.render(
    <Provider store={store}>
      <Component />
    </Provider>,
    document.getElementById('app'),
  )
}

render(App)

// if (module.hot) {
//   module.hot.accept('./components/App', () => {
//     render(App)
//   })
// }
