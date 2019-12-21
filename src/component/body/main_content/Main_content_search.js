import React, { Component } from 'react';

class Main_content_search extends Component {
    constructor(props) {
        super(props);
        this.state = {
            searchValue: ""
        }
    }
    
    inputOnChange = (e) => {
        this.props.btnSearch(e.target.value);
    }
    btnInsert = () => {
        if (this.props.isInsert) {
            return  (<div className="btn-block btn-outline-black" onClick={() => this.props.switch()}>Đóng lại</div>);
        } else {
            return (<div className="btn-block btn-outline-blue" onClick={() => this.props.switch()}>Thêm mới</div>);
        }
    }
    render() {
        return (
            <div>
                <div className="search">
                    <input type="text" placeholder="Nhập từ khóa" onChange={(e) => this.inputOnChange(e)}/>
                    <div className="btn btn-blue" >Tìm kiếm</div>
                </div>
                {this.btnInsert()}
            </div>
        );
    }
}

export default Main_content_search;