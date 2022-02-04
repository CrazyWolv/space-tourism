import React from 'react';
import { render } from 'react-dom';
import { HashRouter } from 'react-router-dom';
// import { createBrowserHistory } from "history";
import './styles/index.scss';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

// const history = createBrowserHistory(); 

// Render
const rootReactElement = (
  <HashRouter>
    <App />
  </HashRouter>
  );
const target = document.getElementById('root');
render(rootReactElement, target);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
