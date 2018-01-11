import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import './inputError.scss';

const InputError = ({ className, visible, errorMessage }) => {
    const errorClass = classNames(className, {
        'error_container m-3': true,
        'd-block': !visible,
        'd-none': visible,
    });
    return <div className={errorClass}>{errorMessage}</div>;
};

InputError.propTypes = {
    visible: PropTypes.bool,
    className: PropTypes.string,
    errorMessage: PropTypes.string,
};

export default InputError;
