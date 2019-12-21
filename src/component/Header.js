import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="wrap">
                        <h1 className="main-title">Project quản lý thành viên bằng <br /> React JS</h1>
                        <h5 className="sub-title">với dữ liệu json</h5>
                        <hr />
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;