import React from 'react';
import isEmpty from 'lodash/isEmpty';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import If from 'components/Shared/If';

class Input extends React.Component {
    constructor() {
        super();
        this.state = {
            value: '',
            valid: false,
        };
    }

    handleChange = event => {
        event.preventDefault();
        const valid = this.validation(event.target.value);
        if (this.props.onChange) {
            this.props.onChange(event, valid);
        }
    };

    handleBlur = event => {
        event.preventDefault();
        this.validation(event.target.value);
    };

    validation = value => {
        let valid = true;
        if (this.props.required && isEmpty(value)) {
            valid = false;
        }
        this.setState({
            value,
            valid,
        });
        return valid;
    };

    render() {
        return (
            <div className={`field input ${this.props.id}`}>
                <If condition={this.props.IconUrl}>
                    <div className="icon">
                        <img src={this.props.IconUrl} alt="Envelope" />
                    </div>
                </If>
                <input
                    id={this.props.id}
                    type={this.props.type}
                    name={this.props.name}
                    placeholder={this.props.placeholder}
                    className={classNames({
                        'input rounded-2': true,
                        valid: this.state.valid,
                        invalid: !this.state.valid,
                    })}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    value={this.state.value}
                />
            </div>
        );
    }
}

Input.propTypes = {
    id: PropTypes.string.isRequired,
    IconUrl: PropTypes.string,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    required: PropTypes.bool,
    onChange: PropTypes.func.isRequired,
};

export default Input;
