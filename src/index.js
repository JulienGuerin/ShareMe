import React from 'react';
import { createRoot } from 'react-dom/client';
// import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';
import App from './App';

// old writting mode
// ReactDOM.render(
//     <Router>
//         <App />
//     </Router> ,
//     document.getElementById('root'));


const container = document.getElementById('root');
const root = createRoot(container); 
root.render(
<Router>
    <App />
</Router>);
