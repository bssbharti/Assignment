import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './Routes';
import {Provider} from 'react-redux';
import ReduxToastr from 'react-redux-toastr';
import store from './store';
import registerServiceWorker from './registerServiceWorker';
import './css/index.css';

ReactDOM.render(
      <Provider store={store}>
           <div>
          <Routes />
               <ReduxToastr
                timeOut={3000}
                newestOnTop={false}
                preventDuplicates
                position="top-right"
                transitionIn="fadeIn"
                transitionOut="fadeOut"
                progressBar/>
          </div>
     </Provider>,
document.getElementById('root'));
registerServiceWorker();
