import React, { Component } from "react";
import axios from "axios";
import { Cookies } from "react-cookie";

export default class PersonalDuzenle extends Component {
    constructor(props) {
        super(props);


        this.state = {
            adSoyad: "",
            tckn: "",
            email: "",
            maas:"",
            rol:""
        }
    }

    addRequest() {
        let cookie = new Cookies();

        const body = {
            tckn: this.state.tckn,
            adSoyad: this.state.adSoyad,
            email: this.state.email,
            maas: this.state.maas,
            rol: this.state.rol
        };  
        axios.put('http://localhost:8080/api/personal/' + cookie.get("personalIdForEdit"), body)
            .then(response => {
                    alert("Güncelleme Başarılı")
                    this.props.history.push("/personal");
            })

    }

    refreshList() {
        let cookie = new Cookies();
        axios.get('http://localhost:8080/api/personal/' + cookie.get("personalIdForEdit"))
            .then(response => {
                this.setState({ tckn: response.data.tckn });
                this.setState({ adSoyad: response.data.adSoyad });
                this.setState({ email: response.data.email });
                this.setState({ rol: response.data.rol });
                this.setState({ maas: response.data.maas });
            })
    }

    componentDidMount() {
        this.refreshList();
    }

    changerol = (e) => {
        this.setState({ rol: e.target.value });
    }


    changemaas = (e) => {
        this.setState({ maas: e.target.value });
    }
    
    changetckn = (e) => {
        this.setState({ tckn: e.target.value });
    }
    changeadSoyad = (e) => {
        this.setState({ adSoyad: e.target.value });
    }

    changeemail = (e) => {
        this.setState({ email: e.target.value });
    }

    render() {
        const {
            adSoyad,
            tckn,
            email,
            rol,
            maas
        } = this.state;
        return (
            <div className="auth-inner">
                <div className="form-group">
                    <label>Ad - Soyad</label>
                    <input type="text" className="form-control" placeholder="Ad - Soyad giriniz" onChange={this.changeadSoyad} value={adSoyad} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control" placeholder="*****@gmail.com" onChange={this.changeemail} value={email} />
                </div>
                <div className="form-group">
                    <label>rol</label>
                    <input type="text" className="form-control" placeholder="Rol Giriniz" onChange={this.changerol} value={rol} />
                </div>
                
                <div className="form-group">
                    <label>maas</label>
                    <input type="text" className="form-control" placeholder="Maaş Giriniz" onChange={this.changemaas} value={maas} />
                </div>
                <div className="form-group">
                    <label>TC numarası</label>
                    <input type="text" className="form-control" placeholder="TC no giriniz" onChange={this.changetckn} value={tckn} />
                </div>
                <button type="submit" className="buttons" onClick={() => this.addRequest()}>Güncelle</button>
            </div>
        )

    }
}
