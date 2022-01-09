import React, { Component } from "react";
import axios from "axios";
import { Cookies } from "react-cookie";

export default class Rezervasyon extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mail: "",
            password: ""
        }
    }

    mailchanger = (e) => {
        this.setState({ mail: e.target.value });
    }
    passwordchanger = (e) => {
        this.setState({ password: e.target.value });
    }

    login() {
        const body = {
            mail: this.state.mail,
            password: this.state.password,
        };

        axios.post('http://localhost:8080/api/customer/login/', body)
            .then(response => {
                if (response.data.id > 0) {
                    alert("GİRİŞ BAŞARILI..")
                    sessionStorage.setItem("IsLoggedIn", "true")
                    sessionStorage.setItem("musteriId", response.data.id);
                    sessionStorage.setItem("isim", response.data.ad);
                    sessionStorage.setItem("type", "user")
                    this.props.history.push("/room")
                    window.location.reload()
                } else {
                    alert("yanlış giriş")
                }

            })

    }

    render() {
        const {
            mail,
            password
        } = this.state;

        return (

            <div className="auth-inner">

                <h3>Rezervasyon GİRİŞ</h3>

                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" className="form-control" onChange={this.mailchanger} value={mail} placeholder="*******@gmail.com" />
                </div>

                <div className="form-group">
                    <label>Şifre:</label>
                    <input type="password" className="form-control" onChange={this.passwordchanger} value={password} placeholder="*********" />
                </div>

                <button type="submit" className="buttons" onClick={() => this.login()}>Giriş</button>

            </div>
        );
    }
}