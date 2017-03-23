import React from 'react';
import { Link, IndexLink } from 'react-router';
import Logo from '../svg/logo.svg';



export default class extends React.Component {

    constructor(){
        super();
        this.state = { name: '', password: '' };
    }

    login(){
        console.log(this.state);
    }

    render() {
        return (
            <section className="hero is-dark">
                <nav className="nav has-shadow">
                    <img src={Logo} className="App-logo" alt="logo" />
                    <div className="container">
                        <div className="nav-left">
                            <IndexLink to="/" className="nav-item is-tab" activeClassName="is-active">Home</IndexLink>
                            <Link to="/technical" className="nav-item is-tab" activeClassName="is-active">Técnicos</Link>
                            <Link to="/client" className="nav-item is-tab" activeClassName="is-active">Clientes</Link>
                        </div>
                        <div className="box">
                            <input placeholder="nome" value={this.state.name} />
                            <input type="password" placeholder="senha"/>
                            <button type="button" onClick={this.login.bind(this)}>Entrar</button>
                        </div>
                    </div>
                </nav>
            </section>
        );
    }
}