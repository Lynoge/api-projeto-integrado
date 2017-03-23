import React from 'react';

export default class extends React.Component {
    render() {
        return (
            <div>
                <footer className="footer">
                    <div className="container">
                        <div className="content has-text-centered">
                            <p>
                                <strong>Rent Service</strong> by <a href="#">Rodrigo</a>,
                                <a href="#"> Gabriel </a> e <a href="#">Mateus </a> 
                                Web Application developed using <a href="https://facebook.github.io/react/">React JS</a>
      </p>
                            <p>
                                <a className="icon" href="https://github.com/jgthms/bulma">
                                    <i className="fa fa-github"></i>
                                </a>
                            </p>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}