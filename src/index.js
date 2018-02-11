import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route } from "react-router-dom"
import registerServiceWorker from './registerServiceWorker';
import GetUserList from './GetUserList';
import CreateUser from './CreateUser'

ReactDOM.render(<BrowserRouter>
    <div>
        <Route exact path="/" component={App} />
        <Route exact path="/getuserlist" component={GetUserList} />
        <Route exact path="/createuser" component={CreateUser} />
    </div>
</BrowserRouter>, document.getElementById('root'));
registerServiceWorker();
