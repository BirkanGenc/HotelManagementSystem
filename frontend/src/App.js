import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import GorevliGiris from "./components/girisler/GorevliGiris.component";
import Customer from "./components/costumer/customer.component";
import Home from './components/home.component';
import CustomerList from './components/costumer/CustomerList.component';
import CustomerEdit from './components/costumer/CustomerEdit.component';
import Kesinlestir from './components/otel/kesinlestir.component';
import Personal from './components/personal/personal.component';
import PersonalEkle from './components/personal/personalEkle.component';
import PersonalDuzenle from './components/personal/personalDuzenle.component';
import Gorevli from './components/gorevli/gorevli.component';
import gorevliEkle from './components/gorevli/gorevliEkle.component';
import gorevliDuzenle from './components/gorevli/gorevliDuzenle.component';
import Cikis from './components/girisler/cikis.component';
import Rezervasyon from './components/girisler/rezervasyonGiris.component';
import OtelOdalari from './components/otel/OtelOdalari.component';
import YetkiliKesinlestir from './components/otel/kesinlestirGorevli.component';
import OtelOdasiYonetim from './components/otel/OtelOdasiYonetim.component';
import OtelOdasiDuzenle from './components/otel/OtelOdasiDuzenle.component';


function App() {
  return (<Router>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          {
            sessionStorage.getItem("IsLoggedIn") != "true" ? (
              <Link className="navbar-brand" style={{color:"white"}} to={"/"}> Otel Yonetim Sistemi</Link>
            ) : (

                sessionStorage.getItem("type") == "gorevli" ? (
                  <div>
                    <Link className="navbar-brand" style={{color:"white"}} to={"/CustomerList"}>CUSTOMER</Link>
                    <Link className="navbar-brand" style={{color:"white"}} to={"/otelOdalarıYonetim"}>ODALAR</Link>
                    <Link className="navbar-brand" style={{color:"white"}} to={"/personal"}>PERSONEL</Link>
                    <Link className="navbar-brand" style={{color:"white"}} to={"/gorevli"}>GÖREVLİ</Link>
                  </div>

                ) : (
                  <Link className="navbar-brand" style={{color:"white"}} to={"/room"}>ODA</Link>

                )
              )
          }
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            {
              sessionStorage.getItem("IsLoggedIn") != "true" ? (
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" style={{color:"white"}} to={"/"}> HOME</Link>
                  </li>
                </ul>
              ) : (
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link className="nav-link" style={{color:"white"}} to={"/cikis"}>ÇIKIŞ YAP</Link>

                  </li>
                </ul>
              )
            }
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path="/gorevliGiris" component={GorevliGiris} />
          <Route path="/customer" component={Customer} />
          <Route path="/Rezervasyon" component={Rezervasyon} />
          <Route path="/CustomerList" component={CustomerList} />
          <Route path="/CustomerEdit" component={CustomerEdit} />
          <Route path="/room" component={OtelOdalari} />
          <Route path="/kesinlestir" component={Kesinlestir} />
          <Route path="/yetkiliKesinlestir" component={YetkiliKesinlestir} />
          <Route path="/personal" component={Personal} />
          <Route path="/personalEkle" component={PersonalEkle} />
          <Route path="/personalDuzenle" component={PersonalDuzenle} />
          <Route path="/gorevli" component={Gorevli} />
          <Route path="/gorevliEkle" component={gorevliEkle} />
          <Route path="/gorevliDuzenle" component={gorevliDuzenle} />
          <Route path="/otelOdalarıYonetim" component={OtelOdasiYonetim} />
          <Route path="/roomDuzenle" component={OtelOdasiDuzenle} />
          <Route path="/cikis" component={Cikis} />
        </Switch>
      </div>
    </div></Router>
  );
}

export default App;
