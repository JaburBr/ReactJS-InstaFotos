import React, { Component } from 'react';
import Foto from './Foto';

export default class Timeline extends Component {

    url = 'http://localhost:8080/api/public/fotos/alots';

    constructor() {
        super();
        this.state = { fotos: [] }
    }

    componentDidMount() {

        fetch(this.url)
            .then(response => response.json())
            .then(fotos => {
                console.log(fotos);
                this.setState({ fotos: fotos });
            })
            .catch(err => console.log(err));

    }

    render() {
        return (
            <div className="fotos container">
                {this.state.fotos.map(item => <Foto key={item.id} foto={item} />)}
            </div>
        );
    }

}