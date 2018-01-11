import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import clone from 'lodash/clone';
import { Row, Col, ListGroup } from 'reactstrap';
import { Link } from 'react-router-dom';
import Confirm from 'components/Shared/Confirm';
import fieldManagementMessages from 'components/FieldManagementForm/messages';
import Field from './Field';
import messages from './messages';
import './style.scss';

class FormListing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fieldToDelete: null,
            fieldType: '',
        };
    }

    onDeleteField = () => {
        if (this.state.fieldType === 'form') {
            const formList = get(this.props, 'formList.formList', []);
            this.props.updateFormsList(formList.filter(item => item.id !== this.state.fieldToDelete.id));
        }
        if (this.state.fieldType === 'assignment') {
            const assignmentList = get(this.props, 'formList.assignmentList', []);
            this.props.updateAssignmentList(assignmentList.filter(item => item.id !== this.state.fieldToDelete.id));
        }
        this.onCancel();
    };

    onCancel = () => {
        this.setState({ fieldToDelete: null, fieldType: '' });
    };

    toggleActive = (id, type) => {
        if (type === 'form') {
            const formList = get(this.props, 'formList.formList', []);
            this.props.updateFormsList(this.updateActive(formList, id));
        }
        if (type === 'assignment') {
            const assignmentList = get(this.props, 'formList.assignmentList', []);
            this.props.updateAssignmentList(this.updateActive(assignmentList, id));
        }
    };

    updateActive = (list, id) =>
        list.map(item => {
            if (item.id === id) {
                const element = clone(item);
                element.isActive = !element.isActive;
                return element;
            }
            return item;
        });

    renderFieldListing = (list, type) =>
        list.map(item => (
            <Field
                id={item.id}
                key={item.id}
                formData={item}
                type={type}
                onDeleteField={(fieldToDelete, fieldType) => {
                    this.setState({ fieldToDelete, fieldType });
                }}
                toggleActive={this.toggleActive}
            />
        ));

    render() {
        const { formatMessage } = this.props;
        const formList = get(this.props, 'formList.formList', []);
        const assignmentList = get(this.props, 'formList.assignmentList', []);
        return (
            <div className="container-fluid c-my-5">
                <div className="app-content">
                    <Row>
                        <Col sm="12" md="12" lg="12">
                            <div className="header-wrapper p-3 my-sm-4">
                                <div className="d-flex">
                                    <Col sm="12" md="12" lg="12" className="d-flex align-items-center">
                                        <h2 className="d-flex align-items-center">
                                            {formatMessage({ ...messages.pageTitle })}
                                        </h2>
                                    </Col>
                                </div>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm="12" md="12" lg="6" className="mb-sm-3">
                            <div className="card card-block no-border-radius h-500min position-relative">
                                <div className="content-center p-3">
                                    <Col sm="12" md="12" lg="12" className="content-center">
                                        <Col
                                            sm="1"
                                            md="1"
                                            lg="1"
                                            className="icon-secondary content-center align-items-center icon-wrapper"
                                        >
                                            <div className="icon icon-expand-down font-ex-lg d-inline-flex justify-content-center" />
                                        </Col>
                                        <Col sm="auto" md="auto" lg="auto">
                                            <div className="card-title text-center w-100 my-0">
                                                <h4>{formatMessage({ ...messages.forms })}</h4>
                                            </div>
                                        </Col>
                                    </Col>
                                </div>
                                <Col sm="12" md="12" lg="12">
                                    <div className="font-md text-right">{formatMessage({ ...messages.active })}</div>
                                </Col>
                                <div className="list-group h-75">
                                    <ListGroup>{this.renderFieldListing(formList, 'form')}</ListGroup>
                                </div>
                                {/* list end */}
                                <div className="d-flex justify-content-end my-3 position-absolute bottom-0 right-10">
                                    <div className="btn-wrapper">
                                        <Link to="/form/create" className="btn btn-size-lg tertiary-bg-color">
                                            {formatMessage({ ...messages.createForm })}
                                        </Link>{' '}
                                    </div>
                                </div>
                            </div>
                        </Col>

                        <Col sm="12" md="12" lg="6" className="mb-sm-3">
                            <div className="card card-block no-border-radius h-500min position-relative">
                                <div className="content-center p-3">
                                    <Col sm="12" md="12" lg="12" className="content-center">
                                        <Col
                                            sm="1"
                                            md="1"
                                            lg="1"
                                            className="icon-secondary content-center align-items-center icon-wrapper"
                                        >
                                            <div className="icon icon-expand-down font-ex-lg d-inline-flex justify-content-center" />
                                        </Col>
                                        <Col sm="auto" md="auto" lg="auto">
                                            <div className="card-title text-center w-100 my-0">
                                                <h4>{formatMessage({ ...messages.assignments })}</h4>
                                            </div>
                                        </Col>
                                    </Col>
                                </div>
                                <Col sm="12" md="12" lg="12">
                                    <div className="font-md text-right">{formatMessage({ ...messages.active })}</div>
                                </Col>
                                <div className="list-group h-75">
                                    <ListGroup>{this.renderFieldListing(assignmentList, 'assignment')}</ListGroup>
                                </div>
                                {/* list end */}
                                <div className="d-flex justify-content-end my-3 position-absolute bottom-0 right-10">
                                    <div className="btn-wrapper">
                                        <Link
                                            to="/assignment/create"
                                            className="btn btn-size-lg tertiary-bg-color"
                                            onClick={this.toggle}
                                        >
                                            {formatMessage({ ...messages.createAssignment })}
                                        </Link>{' '}
                                    </div>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </div>
                <Confirm
                    text={`Are you sure you want to delete '${this.state.fieldToDelete &&
                        this.state.fieldToDelete.name}'?`}
                    onOk={this.onDeleteField}
                    onCancel={this.onCancel}
                    okBtnText={formatMessage({ ...messages.validate })}
                    cancelBtnText={formatMessage({ ...fieldManagementMessages.cancelBtnText })}
                    visible={!!this.state.fieldToDelete}
                />
            </div>
        );
    }
}

FormListing.propTypes = {
    formatMessage: PropTypes.func.isRequired,
    updateFormsList: PropTypes.func,
    updateAssignmentList: PropTypes.func,
};

export default FormListing;
