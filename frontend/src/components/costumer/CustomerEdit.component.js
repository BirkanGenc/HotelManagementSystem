import React, { Component } from "react";
import axios from "axios";
import { Cookies } from "react-cookie";

export default class CustomerEdit extends Component {
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

    componentDidMount() {
        axios.get('http://localhost:8080/api/customer/' + new Cookies().get("CustomerIdForEdit"))
        .then(response => {
            this.setState( {ad:response.data.ad})
            this.setState( {tckn:response.data.tckn})
            this.setState( {tel:response.data.tel})
            this.setState( {mail:response.data.mail})
            this.setState( {password:response.data.password})
        })
    }

    signUpRequest() {
      const body = {
            tel: this.state.tel,
            tckn: this.state.tckn,
            ad: this.state.ad,
            mail: this.state.mail,
            password: this.state.password
        };

        axios.put('http://localhost:8080/api/customer/' + new Cookies().get("CustomerIdForEdit"), body)
            .then(response => {
                if(response.data.id > 0) {
                    alert("GÜNCELLENDİ")
                    this.props.history.push("/customerlist")
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
            tckn,
            password,
            mail,
            ad
        } = this.state;


        return (

        <div className="auth-inner kayit">

                <h3>Müşteri Bilgi Güncelle</h3>

                <div className="form-group">
                    <label>Ad ve Soyadınız</label>
                    <input type="text" className="form-control" placeholder="Adınız ve Soyadınız" onChange={this.changeAd} value={ad} />
                </div>

                <div className="form-group">
                    <label>tckn</label>
                    <input type="text" className="form-control" placeholder="TCKN Griniz" onChange={this.changetckn} value={tckn} />
                </div>

                <div className="form-group">
                    <label>tel</label>
                    <input type="text" className="form-control" placeholder="Telefon Giriniz" onChange={this.changetel} value={tel} />
                </div>

                <div className="form-group">
                    <label>mail</label>
                    <input type="text" className="form-control" placeholder="Lütfen şifre giriniz" onChange={this.changeMail} value={mail} />
                </div>

                <div className="form-group">
                    <label>password</label>
                    <input type="text" className="form-control" placeholder="şifre giriniz" onChange={this.changePassword} value={password} />
                </div>

                <button type="submit" className="buttons" onClick={() => this.signUpRequest()}>Güncelle</button>
            </div>
        );
    }
}