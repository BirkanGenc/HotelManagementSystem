import React, { Component } from "react";
import axios from "axios";
import { Cookies } from "react-cookie";

export default class OtelOdasiDuzenle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isim: sessionStorage.getItem("isim"),
            odaAdi: new Cookies().get("OdaAdi"),
            gun: 0,
            odenecekTutar:"",
            fiyat:""
        }

    }
    componentDidMount() {
        axios.get('http://localhost:8080/api/room/' + new Cookies().get("roomIdForEdit"))
            .then(response => {
                this.setState({gun:response.data.gun})
                this.setState({odenecekTutar:response.data.odenecekTutar})
                this.setState({fiyat:response.data.fiyat})
            })
    }

    Kesinlestir() {
        axios.put('http://localhost:8080/api/room/duzenle/' + new Cookies().get("roomIdForEdit") + "/" + this.state.gun)
            .then(response => {
                this.props.history.push("otelOdalarıYonetim")
            })
    }

    changeGun = (e) => {
        this.setState({ gun: e.target.value })
        this.setState({odenecekTutar:Math.floor(e.target.value) * Math.floor(this.state.fiyat)})
    }

    render() {

        const {
            isim,
            gun,
            odaAdi,
            odenecekTutar
        } = this.state;


        return (
            <div className="auth-inner">
                <div className="form-group">
                    <label>Hoşgeldiniz -  {isim}</label>
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

                <div className="form-group">
                    <label>odenecekTutar: {odenecekTutar}</label>
                </div>

                <button type="submit" className="buttons" onClick={() => this.Kesinlestir()}>Onayla</button>
            </div>
        );
    }
}