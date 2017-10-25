import React,{Component} from "react";
import { Router, Route, browserHistory  } from 'react-router';

import App from './App';

class Routes extends Component {
     render(){
          return(
               <Router history={browserHistory}>
                    <Route path="/" component={App} />
               </Router>
          )
     }
}
export default Routes;
