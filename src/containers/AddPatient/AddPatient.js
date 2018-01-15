import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import AddPatient from 'components/AddPatient';
import { addPatient } from './actions';

class AddPatientContainer extends Component {
    render() {
        const { addPatient, handleSubmit, history } = this.props;
        return (
            <AddPatient addPatient={addPatient} handleSubmit={handleSubmit} history={history} />
        );
    }
}

AddPatientContainer.propTypes = {
    handleSubmit: PropTypes.func,
    addPatient: PropTypes.func,
    history: PropTypes.object,
};

const mapDispatchToProps = dispatch =>
    bindActionCreators({ addPatient }, dispatch);

export default reduxForm({
    form: 'AddPatient',
})(
    connect(null, mapDispatchToProps)(AddPatientContainer)
);

