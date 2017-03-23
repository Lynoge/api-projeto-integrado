import React from 'react';
import Header from './Header';
import Footer from './Footer';

export default class extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <div>{this.props.children}</div>
                </div>
                <Footer />
            </div>
        );
    }
}