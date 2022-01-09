import React, { Component } from "react";
import axios from "axios";
import { Cookies } from "react-cookie";

export default class OtelOdalari extends Component {
    constructor(props) {
        super(props);

        this.state = {
            room: [],
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/room/')
            .then(response => {
                this.setState({ room: response.data })
            })
    }

    
    chooseBolge(e) {
        let cookie = new Cookies();
        cookie.set("OdaAdi", e.odaAdi)
        cookie.set("OdaId", e.id)
        if (sessionStorage.getItem("type") === "user") {
            this.props.history.push("kesinlestir")
        }
        else {
            this.props.history.push("yetkiliKesinlestir")
        }
    }

    render() {

        const {
            room
        } = this.state;

        return (
            <div className="roomAuth">
                {room.map(e =>
                    <label style={{width:180,marginTop:40,marginRight:40,borderStyle:"solid",borderRadius:10}} >

                        <div style={{marginBottom:10,paddingLeft:10}}>odaAdi:{e.odaAdi}</div>

                        <div style={{marginBottom:10,paddingLeft:10}}>description:{e.description}</div>

                        <div style={{marginBottom:10,paddingLeft:10}}>odaTuru:{e.odaTuru}</div>
                        
                        <div style={{marginBottom:10,paddingLeft:10}}>Kisi:{e.kisi}</div>

                        <div style={{marginBottom:10,paddingLeft:10}}>Fiyat:{e.fiyat}</div>

                        <div>
                            <button type="submit" className="buttons2" style={e.doluBos == 0 ? ({ backgroundColor: "green",marginLeft:10,marginBottom:10 }) : ({ backgroundColor: "red",marginLeft:10,marginBottom:10 })}
                                onClick={e.doluBos == 0 ? (() => this.chooseBolge(e)) : (() => alert("Seçilemez"))}>Oda seç</button>
                        </div>
                    </label>

                )}
            </div>

        );
    }
}