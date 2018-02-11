import React, { Component } from 'react';

class CreateUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visantid: "",
            firstName: "",
            lastName: "",
            organization:""
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event){
      let change={};
      change[event.target.name]=event.target.value
      this.setState(change)
    }

    render() {
        return (
            <div>
                <header className="App-header">
                    <h1 className="App-title">Welcome to Compliance</h1>
                </header>
                <div className="center_Align">
                    <div className="input_box">
                        <label> visa NTID : </label>
                        <span><input type="text" name="visantid" value={this.state.visantid} placeholder="visa NTID" onChange={this.handleChange} /></span>
                    </div>
                    <div className="input_box">
                        <label>First Name : </label>
                        <span><input type="text" name="firstName" value={this.state.firstName} placeholder="First Name" onChange={this.handleChange} /></span>
                    </div>
                    <div className="input_box">
                        <label> Last Name : </label>
                        <span><input type="text" name="lastName" value={this.state.lastName} placeholder="Last Name" onChange={this.handleChange} /></span>
                    </div>
                    <div className="input_box">
                        <label> Organization : </label>
                        <span><input type="text" name="organization" value={this.state.organization} placeholder="Organization" onChange={this.handleChange} /></span>
                    </div>
                    <div>
                        <button className="button_1">Cancel</button>
                        <button className="button_1">Submit</button>
                    </div>
                </div>
            </div>
        )
    }
}
export default CreateUser;