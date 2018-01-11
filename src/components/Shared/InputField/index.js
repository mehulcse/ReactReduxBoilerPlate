import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import If from 'components/Shared/If';

const InputField = ({
    name,
    label,
    type,
    error,
    inputFieldClass,
    fieldClass,
    placeholder = '',
    fieldId = '',
    onChange,
    onBlur,
    value,
    checked,
}) => {
    const fieldClassName = classNames({
        [`${fieldClass}`]: true,
        field: true,
    });
    const inputFieldClassName = classNames({
        [`${inputFieldClass}`]: true,
        error,
    });

    return (
        <div className={fieldClassName}>
            <label htmlFor={fieldId} className="col-12 no-offset">
                <If condition={label && type !== 'checkbox' && type !== 'radio'}>
                    <span>{label}</span>
                </If>
                <input
                    name={name}
                    type={type}
                    id={fieldId}
                    className={inputFieldClassName}
                    placeholder={placeholder}
                    onChange={onChange}
                    onBlur={onBlur}
                    checked={type === 'checkbox' || type === 'radio' ? checked : undefined}
                    value={value}
                />
                <If condition={label && (type === 'checkbox' || type === 'radio')}>
                    <span>{label}</span>
                </If>
            </label>
            <If condition={error}>
                <span className="error">{error}</span>
            </If>
        </div>
    );
};

InputField.propTypes = {
    name: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    type: PropTypes.string.isRequired,
    error: PropTypes.string,
    inputFieldClass: PropTypes.string,
    fieldClass: PropTypes.string,
    placeholder: PropTypes.string,
    fieldId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    onChange: PropTypes.func.isRequired,
    onBlur: PropTypes.func,
    value: PropTypes.string,
    checked: PropTypes.bool,
};

export default InputField;
