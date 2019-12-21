import React, { Component } from 'react';

class Main_content_table extends Component {    
    renderValue = () => this.props.data.map((value, index) => (
        <tr key={value.id}>
            <th>{index + 1}</th>
            <th>{value.name}</th>
            <th>{value.phone}</th>
            <th>{value.authority === "1" ? "Administrator" : value.authority === "2" ? "Moderator" : value.authority === "3" ? "User" : "Undefined"}</th>
            <th>
                <div onClick={(e) => this.props.switchEdit(value)} className="btn btn-green">Sửa</div><div onClick={(e) => this.props.btnDelete(value.id)} className="btn btn-red">Xóa</div>
            </th>
        </tr>
    ))
    render() {
        return (
            <div className={(this.props.isInsert) ? "col-8" : "col-12"}>
                <table>
                    <tbody>
                        <tr>
                            <th>STT</th>
                            <th>Tên</th>
                            <th>Điện thoại</th>
                            <th>Quyền</th>
                            <th>Thao tác</th>
                        </tr>
                        {this.renderValue()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default Main_content_table;