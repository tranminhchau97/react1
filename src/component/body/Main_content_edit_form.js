import React, { Component } from 'react';

class Main_content_edit_form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.dataEdit.id,
            name: this.props.dataEdit.name,
            phone: this.props.dataEdit.phone,
            authority: this.props.dataEdit.authority
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    handleSubmit = (e) => {
        this.props.switchEdit(this.state);
        e.preventDefault();
    }
    handleInputChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.type === 'checkbox'? target.checked : target.value;
        this.setState({
            [name]: value
        });
    }
    render() {
        return (
            <div className="edit-user">
                <form key={this.props.dataEdit.id}>
                    <label>Chỉnh sửa </label>
                    <div className="form-body">
                        <input name="name" type="text" placeholder="Tên user" onChange={this.handleInputChange} defaultValue={this.props.dataEdit.name} />
                        <input name="phone" type="text" placeholder="Điện thoại" onChange={this.handleInputChange} defaultValue={this.props.dataEdit.phone} />
                        <select defaultValue={this.props.dataEdit.authority} name="authority" onChange={this.handleInputChange}>
                            <option>Chọn quyền mặc định</option>
                            <option value="1">Administrator</option>
                            <option value="2">Moderator</option>
                            <option value="3">User</option>
                        </select>
                        <input type="submit" onClick={this.handleSubmit} className="btn-block btn-green" value="Lưu" />
                    </div>
                </form>
            </div>
        );
    }
}

export default Main_content_edit_form;