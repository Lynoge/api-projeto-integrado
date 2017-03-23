import React, { Component } from 'react';
import Technical from '../components/Technical';

export default class extends Component {
    render() {

        var techs = [
            { name: 'fulano', available: 3.4, email: 'fulano@mail.com' },
            { name: 'ciclano', available: 2.5, email: 'ciclano@mail.com' },
            { name: 'maria', available: 5.0, email: 'maria@mail.com' }
        ];

        return (
            <div>
                <Technical technical={techs[0]}/>
                <Technical technical={techs[1]}/>
                <Technical technical={techs[2]}/>
            </div>
        );
    }
}