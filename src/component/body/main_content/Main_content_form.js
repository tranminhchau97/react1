import React, { Component } from 'react';

class Main_content_form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: "",
            name: "unknow",
            phone: "0000000000",
            authority: "3"
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        this.props.getSubmit(this.state)
        event.preventDefault();
    }

    handleInputChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <div className="form-group">
                <form>
                    <label>Thêm mới user vào hệ thống</label>
                    <div className="form-body">
                        <input name="name" type="text" placeholder="Tên user" onChange={this.handleInputChange} />
                        <input name="phone" type="text" placeholder="Điện thoại" onChange={this.handleInputChange} />
                        <select name="authority" onChange={this.handleInputChange}>
                            <option value="3">Chọn quyền mặc định</option>
                            <option value="1">Administrator</option>
                            <option value="2">Moderator</option>
                            <option value="3">User</option>
                        </select>
                        <input type="reset" onClick={this.handleSubmit} className="btn-block btn-green" value="Thêm mới" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Main_content_form;