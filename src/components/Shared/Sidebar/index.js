import React, { Component } from 'react';

export default class Sidebar extends Component {
    render() {
        return (

            <div>
                <div className="sidebar">
                    <a href="#" className="active"><span className="fa fa-user" />Management</a>
                    <a href="#"><span className="fa fa-vcard-o" /> Mapping</a>
                    <a href="#"><span className="fa fa-list-alt" /> Reporting</a>
                </div>
            </div>

        );
    }
}

