import React, { Component } from "react";
import axios from "axios";
import { Cookies } from "react-cookie";

export default class Kesinlestir extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isim: sessionStorage.getItem("isim"),
            odaAdi: new Cookies().get("OdaAdi"),
            gun:1
        }

    }

    Kesinlestir() {
        let cookie = new Cookies();
        axios.put('http://localhost:8080/api/room/' + cookie.get("OdaId") + "/" + this.state.gun)
            .then(response => {
                alert(response.data.odenecekTutar +  "TL ÖDEME ÜCRETİ - iyi günler..")
                this.props.history.push("room")
            })
    }

    changeGun = (e) => {
        this.setState({gun: e.target.value})
    }

    render() {

        const {
            isim,
            odaAdi,
            gun
        } = this.state;


        return (
            <div className="auth-inner">
                <div className="form-group">
                    <label>Hoşgeldiniz Sayın -  {isim}</label>
                </div>
                <div className="form-group">
                    <label>Seçilen oda :  {odaAdi}</label>
                </div>
                <div className="form-group">
                    <label>Gün seçiniz</label>
                    <select className="gun" onChange={this.changeGun} value={gun} style={{ marginLeft: 10 }}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                    </select>
                </div>
                <button type="submit" className="buttons" onClick={() => this.Kesinlestir()}>KESİNLEŞTİR</button>
            </div>
        );
    }
}