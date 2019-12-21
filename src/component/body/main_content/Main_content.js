import React, { Component } from 'react';
import Table from './Main_content_table';
import Form from './Main_content_form';
import Search from './Main_content_search';
import EditForm from '../Main_content_edit_form';
const uuidv1 = require('uuid/v1');

class Main_content extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isInsert: false,
            isEditUser: false,
            searchValue: "",
            dataUser: this.props.dataUser,
            dataEdit: {}
        }
        this.handleSubmitUser = this.handleSubmitUser.bind(this);
        this.turnOnEditUser = this.turnOnEditUser.bind(this);
        this.turnOffEditUser = this.turnOffEditUser.bind(this);
        this.callEditForm = this.callEditForm.bind(this);
    }

    handleSubmitUser(event) {
        var items = this.state.dataUser;
        var item = {};
        item.id = uuidv1();
        item.name = event.name;
        item.phone = event.phone;
        item.authority = event.authority;
        items.push(item);
        this.setState({
            dataUser: items
        });
        localStorage.setItem('userData', JSON.stringify(items));
    }
    btnSearch = (value) => {
        var result = [];
        this.props.dataUser.forEach((item) => {
            if(item.name.indexOf(value) !== -1) {
                result.push(item);
            }
        });
        this.setState({
            dataUser:result
        });
    }
    handleButtonDelete = (e) => {
        var items = this.state.dataUser.filter(item => item.id !== e);
        this.setState({
            dataUser: items
        });
        localStorage.setItem('userData', JSON.stringify(items));
    }
    switchisInsert = () => {
        this.setState({
            isInsert: !this.state.isInsert
        });
    }
    turnOnEditUser = (value) => {
        this.setState({
            isEditUser: true,
            dataEdit: value
        });
    }
    turnOffEditUser = (event) => {
        this.state.dataUser.forEach((item) => {
            if(item.id === event.id) {
                item.name = event.name;
                item.phone = event.phone;
                item.authority = event.authority;
            }
        });
        this.setState({
            isEditUser: false,
        });
        localStorage.setItem('userData', JSON.stringify(this.state.dataUser));
    }
    callEditForm = () => {
        if (this.state.isEditUser) {
            return <EditForm turnOffRun={this.turnOffRun} dataEdit={this.state.dataEdit} switchEdit={this.turnOffEditUser} />
        }
    }
    callInsertForm = () => {
        if (this.state.isInsert) {
            return <Form isInsert={this.state.isInsert} getSubmit={this.handleSubmitUser}/>
        }
    }
    render() {
        return (
            <div className="main-content">
                <div className="container">
                    <Search switch={() => this.switchisInsert()} isInsert={this.state.isInsert} btnSearch={(e) => this.btnSearch(e)} />
                    {this.callEditForm()}
                    <hr/>
                    <div className="row">
                        <Table btnDelete={(e) => this.handleButtonDelete(e)} switchEdit={(e) => this.turnOnEditUser(e)} data={this.state.dataUser} isInsert={this.state.isInsert}/>
                        <div className={(this.props.isInsert)?"col-4":"col-0"}>
                            {this.callInsertForm()}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Main_content;