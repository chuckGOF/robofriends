import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import CardList from './CardList'
import App from './containers/App'
// import { robots } from './robots';
import 'tachyons';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
   <React.StrictMode>
      
      <div>
         <App />
         {/* <CardList robots={robots} /> */}
         {/* <Card id={robots[0].id} name={robots[0].name} email={robots[0].email} /> */}
      </div>
   
   </React.StrictMode>,
   document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
