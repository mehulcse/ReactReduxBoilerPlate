import React from 'react';
import PropTypes from 'prop-types';
import { Row, Col, FormGroup, Input, ListGroupItem, Label } from 'reactstrap';
import { Link } from 'react-router-dom';
import If from 'components/Shared/If';

const Field = props => {
    const { onDeleteField, formData, toggleActive, type } = props;

    return (
        <ListGroupItem className="list-group-item no-border-radius p-3">
            <Row>
                <Col sm="8" md="8" lg="8">
                    {formData.name}
                </Col>
                <Col sm="4" md="4" lg="4" className="display-inlineflex justify-content-sm-end no-offset">
                    <div className="col-sm-1 col-md-1 col-lg-1 ico-bg content-center mx-1">
                        <If condition={type === 'form'}>
                            <Link className="display-inlineflex reset-btn-styling" to={`/form/${formData.id}`}>
                                <span className="ico-bg icon icon-edit action-icon tertiary-color align-content-center display-inlineflex" />
                            </Link>
                        </If>
                        <If condition={type === 'assignment'}>
                            <Link className="display-inlineflex reset-btn-styling" to={`/assignment/${formData.id}`}>
                                <span className="ico-bg icon icon-edit action-icon tertiary-color align-content-center display-inlineflex" />
                            </Link>
                        </If>
                    </div>
                    <div className="col-sm-1 col-md-1 col-lg-1 ico-bg content-center mx-1">
                        <button
                            className="display-inlineflex reset-btn-styling"
                            onClick={() => onDeleteField(formData, type)}
                        >
                            <span className="ico-bg icon icon-delete action-icon tertiary-color align-content-center display-inlineflex" />
                        </button>
                    </div>
                    <div className="col-sm-1 col-md-1 col-lg-1 content-center align-items-center mx-1">
                        <FormGroup check className="d-inline-flex align-middle align-items-center">
                            <Label>
                                <Input
                                    type="checkbox"
                                    name="check"
                                    onChange={() => toggleActive(formData.id, type)}
                                    checked={formData.isActive}
                                />{' '}
                                <span className="checkmark" />
                            </Label>
                        </FormGroup>
                    </div>
                </Col>
            </Row>
        </ListGroupItem>
    );
};

Field.propTypes = {
    formData: PropTypes.object.isRequired,
    onDeleteField: PropTypes.func.isRequired,
    toggleActive: PropTypes.func.isRequired,
    type: PropTypes.oneOf(['form', 'assignment']).isRequired,
};

export default Field;
