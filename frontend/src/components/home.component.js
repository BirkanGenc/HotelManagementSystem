import React, { Component } from "react";
import axios from "axios";
import { Cookies } from "react-cookie";

export default class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
        }
    }

    RezervasyonaYonlendir() {
        this.props.history.push("Rezervasyon")
    }

    GorevliYonlendir() {
        this.props.history.push("gorevliGiris")
    }


    render() {

        const {

        } = this.state;


        return (

            <div className="auth-inner" style={{marginTop:300}}>
                <button type="submit" className="buttons-home" onClick={() => this.RezervasyonaYonlendir()}>Rezervasyon Girişi</button>
                <button type="submit" className="buttons-home" onClick={() => this.GorevliYonlendir()}>Görevli Giriş</button>
            </div>
        );
    }
}