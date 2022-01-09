import React, { Component } from "react";
import axios from "axios";
import { Cookies } from "react-cookie";

export default class CustomerList extends Component {
    constructor(props) {
        super(props);

        this.state = {
            customerList: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/api/customer/')
            .then(response => {
                this.setState({ customerList: response.data });
            })
    }

    deleteClick(e) {
        axios.delete('http://localhost:8080/api/customer/' + e.id)
            .then(response => {
                this.componentDidMount()
            })
    }

    editClick(e) {
        new Cookies().set("CustomerIdForEdit", e.id)
        this.props.history.push("/customeredit");
    }

    render() {

        const {
            customerList
        } = this.state;


        return (

            <div className="musteri-auth">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>
                                ad
                            </th>
                            <th>
                                telefon
                            </th>
                            <th>
                                Tc Kimlik
                            </th>
                            <th>
                                mail
                            </th>
                            <th>
                                Düzenle
                            </th>
                            <th>
                                Sil
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {customerList.map(e =>
                            <tr key={e.id}>
                                <td>{e.ad}</td>
                                <td>{e.tel}</td>
                                <td>{e.tckn}</td>
                                <td>{e.mail}</td>
                                <td>
                                    <button type="button"
                                        className="btn btn-light mr-1"
                                        data-bs-toggle="modal"
                                        data-bs-target="#exampleModal"
                                        onClick={() => this.editClick(e)}>
                                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-brush-fill" viewBox="0 0 16 16">
                                            <path d="M15.825.12a.5.5 0 0 1 .132.584c-1.53 3.43-4.743 8.17-7.095 10.64a6.067 6.067 0 0 1-2.373 1.534c-.018.227-.06.538-.16.868-.201.659-.667 1.479-1.708 1.74a8.118 8.118 0 0 1-3.078.132 3.659 3.659 0 0 1-.562-.135 1.382 1.382 0 0 1-.466-.247.714.714 0 0 1-.204-.288.622.622 0 0 1 .004-.443c.095-.245.316-.38.461-.452.394-.197.625-.453.867-.826.095-.144.184-.297.287-.472l.117-.198c.151-.255.326-.54.546-.848.528-.739 1.201-.925 1.746-.896.126.007.243.025.348.048.062-.172.142-.38.238-.608.261-.619.658-1.419 1.187-2.069 2.176-2.67 6.18-6.206 9.117-8.104a.5.5 0 0 1 .596.04z" />
                                        </svg>
                                    </button>
                                </td>
                                <td>
                                    <button type="button"
                                        className="btn btn-light mr-1"
                                        onClick={() => this.deleteClick(e)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle-fill" viewBox="0 0 16 16">
                                            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z" />
                                        </svg>
                                    </button>
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
                <button type="submit" className="buttons" onClick={() => this.props.history.push("customer")}>Customer Kayıt Et </button>
            </div>
        );
    }
}