import React from 'react';
import map from 'lodash/map';
import PropTypes from 'prop-types';

const footerStyle = {
    bottom: 0,
    width: '100%',
    position: 'fixed',
    background: '#333',
    padding: '10px 0',
    color: '#fff',
    marginLeft: '-15px',
};

const Footer = props => (
    <footer style={footerStyle}>
        Neospheres Inc.
        <select value={props.locale} onChange={e => props.changeLocale(e.target.value)}>
            {map(props.locales, (locale, index) => (
                <option value={locale.value} key={index}>
                    {locale.value}
                </option>
            ))}
        </select>
    </footer>
);

Footer.propTypes = {
    locale: PropTypes.string.isRequired,
    locales: PropTypes.array.isRequired,
    changeLocale: PropTypes.func.isRequired,
};

export default Footer;
