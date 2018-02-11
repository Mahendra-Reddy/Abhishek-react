import React, { Component } from 'react';

const JSON = [
    {
        "visaNTID": "Abhishgu",
        "fistName": "Abhishek",
        "lastName": "Gupta",
        "organization": "Infosys",
    },
    {
        "visaNTID": "Ananku",
        "fistName": "Anand",
        "lastName": "Kumar",
        "organization": "Infosys",
    },
    {
        "visaNTID": "Schabra",
        "fistName": "Sumit",
        "lastName": "Chabra",
        "organization": "Infosys",
    }];

class GetUserList extends Component {
    render() {

        var Row = JSON.map(function (key, i) {
            return (
                <div className="row" key={i}>
                    <div className="col">{key.visaNTID}</div>
                    <div className="col">{key.fistName}</div>
                    <div className="col">{key.lastName}</div>
                    <div className="col">{key.organization}</div>
                </div>
            )
        });

        return (
            <div>
                <div className="container">
                    <div className="header_style">
                        Welcome to Compliance
                    </div>
                    <Header />
                    {Row}
                </div>
            </div>
        )
    }
}

const Header = () => (
    <div className="row">
        <div className="col">VisaNTID</div>
        <div className="col">First Name</div>
        <div className="col">Last Name</div>
        <div className="col">Organization</div>
    </div>
)

export default GetUserList;

