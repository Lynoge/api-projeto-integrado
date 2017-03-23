import React from 'react';
import Image from '../svg/tech.svg';
import Axios from 'axios';
export default class extends React.Component {

    constructor() {
        super();
        this.state = { contador: 0 };
    }

    buscarDados() {
        Axios.get('/professionals')
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    render() {
        return (
            <div className="box" style={{ maxWidth: '600px' }}>
                <article className="media">
                    <div className="media-left">
                        <figure className="image is-64x64">
                            <img src={Image} alt="logo" />
                        </figure>
                    </div>
                    <div className="media-content">
                        <div className="content">
                            <strong>{this.props.technical.name}</strong>
                            <div className="media">
                                <div className="media-content">
                                    <p className="subtitle is-6">{this.props.technical.email}</p>
                                </div>
                                <div className="media-right">
                                    <nav className="level">
                                        <div className="level-item has-text-centered">
                                            <div>
                                                <p className="title">{this.props.technical.available}</p>
                                            </div>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <nav className="level is-mobile">
                            <div className="level-left">
                                <a className="button is-info">Edit</a>
                                <a className="button is-danger">Remove</a>
                                <a className="button is-danger" onClick={this.buscarDados.bind(this)}>Buscar Dados</a>
                            </div>
                        </nav>
                    </div>
                </article>
            </div>
        )
    }
}