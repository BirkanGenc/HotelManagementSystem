import React, { Component } from "react";
import axios from "axios";
import { Cookies } from "react-cookie";

export default class Customer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tel: "",
            tckn: "",
            ad: "",
            mail: "",
            password: ""
        }
    }

    signUpRequest() {
        const body = {
            tel: this.state.tel,
            tckn: this.state.tckn,
            ad: this.state.ad,
            mail: this.state.mail,
            password: this.state.password
        };

        axios.post('http://localhost:8080/api/customer/', body)
            .then(response => {
                if(response.data.id > 0) {
                    alert("KAYIT BAŞARILI")
                    this.props.history.push("/CustomerList")
                }
            })

    }

    changeAd = (e) => {
        this.setState({ ad: e.target.value });
    }

    changeMail = (e) => {
        this.setState({ mail: e.target.value });
    }

    changePassword = (e) => {
        this.setState({ password: e.target.value });
    }

    changetckn = (e) => {
        this.setState({ tckn: e.target.value });
    }

    changetel = (e) => {
        this.setState({ tel: e.target.value });
    }

    render() {

        const {
            tel,
            password,
            mail,
            tckn,
            ad
        } = this.state;


        return (

        <div className="auth-inner kayit">

                <h3>Müşteri Kayıt</h3>

                <div className="form-group">
                    <label>Ad ve Soyadınız</label>
                    <input type="text" className="form-control" placeholder="Adınız ve Soyadınız" onChange={this.changeAd} value={ad} />
                </div>

                <div className="form-group">
                    <label>telefon</label>
                    <input type="text" className="form-control" placeholder="TELEFON GİRİNİZ" onChange={this.changetel} value={tel} />
                </div>

                 <div className="form-group">
                    <label>tckn</label>
                    <input type="text" className="form-control" placeholder="TC GİRİNİZ" onChange={this.changetckn} value={tckn} />
                </div>


                <div className="form-group">
                    <label>mail</label>
                    <input type="text" className="form-control" placeholder="*******@gmail.com" onChange={this.changeMail} value={mail} />
                </div>

                <div className="form-group">
                    <label>şifre</label>
                    <input type="password" className="form-control" placeholder="Şifreniz" onChange={this.changePassword} value={password} />
                </div>
                <button type="submit" className="buttons" onClick={() => this.signUpRequest()}>Kayıt Et</button>
            </div>
        );
    }
}