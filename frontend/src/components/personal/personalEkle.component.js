import React, { Component } from "react";
import axios from "axios";

export default class PersonalEkle extends Component {
    constructor(props) {
        super(props);


        this.state = {
            adSoyad: "",
            email: "",
            tckn: "",
            maas: "",
            rol:""
        }
    }

    addRequest() {
        const body = {
            adSoyad: this.state.adSoyad,
            email: this.state.email,
            tckn: this.state.tckn,
            maas: this.state.maas,
            rol: this.state.rol
        };

        axios.post('http://localhost:8080/api/personal/', body)
            .then(response => {
                if (response.data.adSoyad == -1) {
                    alert("This student number is already regirtered")
                } else {
                    alert("perrsonal EKLEME BAŞARILI")
                    this.props.history.push("/personal");
                }
            })
    }

    changeemail = (e) => {
        this.setState({ email: e.target.value });
    }

    changeadSoyad = (e) => {
        this.setState({ adSoyad: e.target.value });
    }

    changeMaas = (e) => {
        this.setState({ maas: e.target.value });
    }

    changetckn = (e) => {
        this.setState({ tckn: e.target.value });
    }

      changerol = (e) => {
        this.setState({ rol: e.target.value });
    }


    render() {

        const {
            email,
            adSoyad,
            tckn,
            rol,
            maas
        } = this.state;
        return (
            <div className="auth-inner">
                <div className="form-group">
                    <label>Ad - Soyad</label>
                    <input type="text" className="form-control" placeholder="Ad - soyad giriniz" onChange={this.changeadSoyad} value={adSoyad} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" placeholder="*******@gmail.com" onChange={this.changeemail} value={email} />
                </div>
                <div className="form-group">
                    <label>TC numarası</label>
                    <input type="text" className="form-control" placeholder="TC no Giriniz" onChange={this.changetckn} value={tckn} />
                </div>
                <div className="form-group">
                    <label>rol</label>
                    <input type="text" className="form-control" placeholder="Rol giriniz" onChange={this.changerol} value={rol} />
                </div>
                
                <div className="form-group">
                    <label>maas</label>
                    <input type="text" className="form-control" placeholder="Maaş  Giriniz" onChange={this.changeMaas} value={maas} />
                </div>
                <button type="submit" className="buttons" onClick={() => this.addRequest()}>Kayıt et</button>
            </div>
        )

    }
}
