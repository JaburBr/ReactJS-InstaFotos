import React, { Component } from 'react';


class FotoHeader extends Component {

    render() {
        return (
            <header className="foto-header">
                <figure className="foto-usuario">
                    <img src="https://avatars2.githubusercontent.com/u/19942158?s=40&v=4" alt="foto do usuario" />
                    <figcaption className="foto-usuario">
                        <a href="#">
                            {this.props.foto.loginUsuario}
                        </a>
                    </figcaption>
                </figure>
                <time className="foto-data">{this.props.foto.horario}</time>
            </header>
        );
    }

}

class FotoInfo extends Component {

    render() {
        return (
            <div className="foto-info">
                <div className="foto-info-likes">

                    {this.props.foto.likers.map(liker => {
                        return (
                            <a href="#"> {liker.login}, </a>
                        )
                    })}

                    curtiram

                </div>

                <p className="foto-info-legenda">
                    <a className="foto-info-autor">autor </a>
                    {this.props.foto.comentario}
                </p>

                <ul className="foto-info-comentarios">

                    {this.props.foto.comentarios.map(item => {
                        return (

                            <li className="comentario">
                                <a className="foto-info-autor">{item.login}</a>
                                {item.texto}
                            </li>

                        )
                    })}

                </ul>
            </div>
        );
    }

}

class FotoAtualizacoes extends Component {

    render() {
        return (
            <section className="fotoAtualizacoes">
                <a href="#" className="fotoAtualizacoes-like">Likar</a>
                <form className="fotoAtualizacoes-form">
                    <input type="text" placeholder="Adicione um comentário..." className="fotoAtualizacoes-form-campo" />
                    <input type="submit" value="Comentar!" className="fotoAtualizacoes-form-submit" />
                </form>
            </section>
        );
    }

}

export default class Foto extends Component {

    render() {
        return (
            <div className="foto">

                <FotoHeader foto={this.props.foto} />

                <img alt="foto" className="foto-src" src={this.props.foto.urlFoto} />

                {/* 
                <img alt="foto" className="foto-src" src="https://instagram.fcgh10-1.fna.fbcdn.net/t51.2885-15/e35/14482111_1635089460122802_8984023070045896704_n.jpg?ig_cache_key=MTM1MzEzNjM4NzAxMjIwODUyMw%3D%3D.2" />
                */}

                <FotoInfo foto={this.props.foto} />
                <FotoAtualizacoes />

            </div>
        );
    }

}