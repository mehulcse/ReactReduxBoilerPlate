import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

const LoadingWrapper = ({ children }) => (
    <div className="loading-container-wrapper">
        <div className="loading-container">{children}</div>
    </div>
);

LoadingWrapper.propTypes = {
    children: PropTypes.object,
};

const Loading = props => {
    if (props.error) {
        return (
            <LoadingWrapper>
                <p>Something went wrong!</p>
            </LoadingWrapper>
        );
    }
    if (props.timedOut) {
        return (
            <LoadingWrapper>
                <p>This might take some time...</p>
            </LoadingWrapper>
        );
    }
    if (props.pastDelay) {
        return (
            <LoadingWrapper>
                <span>
                    <div className="dot" />
                    <div className="dot" />
                    <div className="dot" />
                </span>
            </LoadingWrapper>
        );
    }
    return null;
};

Loading.propTypes = {
    error: PropTypes.bool,
    timedOut: PropTypes.bool,
    pastDelay: PropTypes.bool,
};

export default Loading;
