import React, { Component } from 'react';

import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { createSelector } from 'reselect';
import PatientList from 'components/PatientList';
import { selectClientList } from './selectors';
import * as clientActions from './actions';

class PatientListContainer extends Component {
    componentWillMount = () => {
        this.props.getClientList();
    };

    render() {
        const { deleteClient, clientList } = this.props;
        return (
            <PatientList
                deleteClient={deleteClient}
                clientList={clientList}
            />
        );
    }
}


PatientListContainer.propTypes = {
    getClientList: PropTypes.func,
    deleteClient: PropTypes.func,
    clientList: PropTypes.array,
};

const mapStateToProps = createSelector(
    [selectClientList],
    (clientList) => ({
        clientList,
    })
);

const mapDispatchToProps = dispatch => bindActionCreators({ ...clientActions }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(PatientListContainer);
