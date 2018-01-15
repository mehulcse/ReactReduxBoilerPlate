import React, { Component } from 'react';
import { Field } from 'redux-form';
import { PropTypes } from 'prop-types';

const required = value => value ? undefined : 'Required';
const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined;
const minLength = min => value =>
    value && value.length < min ? `Must be ${min} characters or more` : undefined;
const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
        'Invalid email address' : undefined;
const alphaNumeric = value =>
    value && /[^a-zA-Z0-9 ]/i.test(value)
        ? 'Only alphanumeric characters'
        : undefined;
const phoneNumber = value =>
    value && !/^(0|[1-9][0-9]{9})$/i.test(value)
        ? 'Invalid phone number, must be 10 digits'
        : undefined;

class AddPatient extends Component {
    onSubmit = (values) => {
        this.props.addPatient(values);
        this.props.history.push('/patientList');
    };

  renderInputField = ({ input, label, type, meta: { touched, error, warning } }) => (
      <div className="form-group">
          <label>{label}</label>
          <div>
              <input {...input} placeholder={label} type={type} className="form-control" />
              {touched && ((error && <span>{error}</span>) || (warning && <span>{warning}</span>))}
          </div>
      </div>
  );

  render() {
      return (
          <div className="card">
              <div className="card-body">
                  <div className="Form">
                      <div className="top">
                          <h3>Add Patient</h3>
                      </div>
                      <form onSubmit={this.props.handleSubmit((values) => this.onSubmit(values))}>
                          <Field
                              label="User Name"
                              name="username"
                              type="text"
                              component={this.renderInputField}
                              validate={[required, alphaNumeric]}
                          />
                          <Field
                              label="Email ID"
                              name="emailID"
                              type="email"
                              component={this.renderInputField}
                              validate={[required, email]}
                          />
                          <Field
                              label="Password"
                              name="password"
                              type="password"
                              validate={[required, minLength(8), maxLength(50)]}
                              component={this.renderInputField}
                          />
                          <Field
                              label="Confirm Password"
                              name="confirmPassword"
                              type="password"
                              validate={[required, minLength(8), maxLength(50)]}
                              component={this.renderInputField}
                          />
                          <Field
                              label="Landline Number"
                              name="landlineNumber"
                              type="number"
                              validate={required}
                              component={this.renderInputField}
                          />
                          <Field
                              label="Mobile Number"
                              name="mobileNumber"
                              type="number"
                              validate={[required, phoneNumber]}
                              component={this.renderInputField}
                          />
                          <Field
                              label="Address Line 1"
                              name="address_1"
                              type="text"
                              validate={required}
                              component={this.renderInputField}
                          />
                          <Field
                              label="Address line 2"
                              name="address_2"
                              type="text"
                              component={this.renderInputField}
                          />
                          <Field
                              label="City"
                              name="city"
                              type="text"
                              validate={required}
                              component={this.renderInputField}
                          />
                          <Field
                              label="State"
                              name="state"
                              type="text"
                              validate={required}
                              component={this.renderInputField}
                          />
                          <Field
                              label="Zip"
                              name="zip"
                              type="number"
                              validate={[required, maxLength(5), minLength(5)]}
                              component={this.renderInputField}
                          />
                          <button type="submit">Submit</button>
                      </form>
                  </div>
              </div>
          </div>

      );
  }
}

AddPatient.propTypes = {
    handleSubmit: PropTypes.func,
    addPatient: PropTypes.func,
};

export default AddPatient;
