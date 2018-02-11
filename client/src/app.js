import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

import initStore from './redux/store';
import App from './components/App';
import { defaultMainState } from './redux/main/reducer';

const store = initStore(defaultMainState);

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Provider store={store}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('app'),
  );
};

render(App);

// if (module.hot) {
//   module.hot.accept('./components/App', () => {
//     render(App);
//   });
// }
