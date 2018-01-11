import React from 'react';
import PropTypes from 'prop-types';
import CommonModal from 'components/Shared/Modal';

import 'assets/css/style.scss';
import './style.scss';

const Confirm = ({ onCancel, onOk, text, okBtnText = 'Ok', cancelBtnText = 'Cancel', visible }) => (
    <CommonModal
        modalClassName="confirm-box"
        modalFooterClassName="btn-wrapper"
        header={<span />}
        isOpen={visible}
        toggleModal={onCancel}
        body={<div>{text}</div>}
        footer={
            <div className="d-flex w-100">
                <button type="button" className="btn btn-secondary col" onClick={onCancel}>
                    {cancelBtnText}
                </button>
                <button type="button" className="btn btn-primary col ml-2" onClick={onOk}>
                    {okBtnText}
                </button>
            </div>
        }
    />
);

Confirm.propTypes = {
    onCancel: PropTypes.func.isRequired,
    onOk: PropTypes.func.isRequired,
    text: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    cancelBtnText: PropTypes.string,
    okBtnText: PropTypes.string,
    visible: PropTypes.bool,
};

export default Confirm;
