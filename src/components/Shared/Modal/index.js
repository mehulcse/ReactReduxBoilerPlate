import React from 'react';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import If from 'components/Shared/If';

const CommonModal = ({
    header,
    footer,
    body,
    toggleModal,
    modalClassName,
    isOpen,
    modalFooterClassName,
    modalBodyClassName,
}) => (
    <div>
        <Modal isOpen={isOpen} toggle={toggleModal} modalClassName={modalClassName}>
            <ModalHeader toggle={toggleModal}>{header}</ModalHeader>
            <ModalBody className={modalBodyClassName}>{body}</ModalBody>
            <If condition={!isEmpty(footer)}>
                <ModalFooter className={modalFooterClassName}>{footer}</ModalFooter>
            </If>
        </Modal>
    </div>
);

CommonModal.propTypes = {
    header: PropTypes.object,
    footer: PropTypes.object,
    body: PropTypes.oneOfType([PropTypes.array.isRequired, PropTypes.object.isRequired]),
    toggleModal: PropTypes.func.isRequired,
    modalClassName: PropTypes.string,
    isOpen: PropTypes.bool,
    modalFooterClassName: PropTypes.string,
    modalBodyClassName: PropTypes.string,
};

export default CommonModal;
