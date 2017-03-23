import React from 'react';
import { Route, Router, hashHistory, IndexRoute } from 'react-router';
import Error404 from '../pages/Error404';
import Master from '../layout/Master';
import HomePage from '../pages/Home';
import ClientPage from '../pages/Client';
import TechnicalPage from '../pages/Technical';
import Technical from '../components/Technical';
import '../App.css';

export default class extends React.Component {
    render() {
        return (
            <Router history={hashHistory}>
                <Route path="/" component={Master}>
                    <IndexRoute component={HomePage} />
                    <Route path="/technical" component={TechnicalPage}>
                    <Route path=":id" component={Technical}/>
                    </Route>
                    <Route path="/client" component={ClientPage} />
                    <Route path="*" component={Error404} />
                </Route>
            </Router>
        );
    }
}