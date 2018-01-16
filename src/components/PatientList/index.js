import React, { Component } from 'react';
import {
    Button,
    Table,
    Breadcrumb,
    BreadcrumbItem,
} from 'reactstrap';
import Sidebar from 'components/Shared/Sidebar';
import TabBar from 'components/Shared/TabBar';
import { PropTypes } from 'prop-types';
export default class PatientList extends Component {
    renderList = (list, deleteClient) => {
        if (list && list.length > 0) {
            return list.map((item, index) => (
                <tr key={index}>
                    <td>{item.username}</td>
                    <td>{item.associated_hospital}</td>
                    <td><span className={`fa fa-check ${item.isApproved && 'approved'}`} /></td>
                    <td><a
                        href={`client/${item.id}`}
                        className="fa fa-pencil clientedit"
                        title="edit"
                        onClick={() => {
                        // Custom Data handling goes here
                        }}
                    /><span className="fa fa-trash clientdelete" onClick={() => deleteClient(item.id)} />
                    </td>
                </tr>
            ));
        }
        return null;
    };

    render() {
        const { clientList, deleteClient } = this.props;
        return (
            <div>
                <div>
                    <Sidebar />
                    <div className="content">
                        <TabBar selected="client" />
                        <div>
                            <Breadcrumb className="float-left">
                                <BreadcrumbItem><a href="#">Client Management</a></BreadcrumbItem>
                            </Breadcrumb>
                            <div className="addClient"><Button color="primary"><i className="fa fa-plus font14 marginRT5" /> Add Client</Button></div>
                        </div>
                        <div className="clearfix" />
                        <div className="TabelCall">
                            <Table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Associated with</th>
                                        <th>Approved</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.renderList(clientList, deleteClient)}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>


        );
    }
}

PatientList.propTypes = {
    deleteClient: PropTypes.func,
    clientList: PropTypes.array,
};
