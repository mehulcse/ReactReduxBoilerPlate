import React from 'react';
import PropTypes from 'prop-types';
import omit from 'lodash/omit';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Header from 'components/Shared/Header';
import Footer from 'components/Shared/Footer';
import { ToastContainer } from 'react-toastify';

const App = props => (
    <div className="container-fluid">
        <Header />
        <main>{React.Children.map(props.children, child => React.cloneElement(child, omit([props, 'children'])))}</main>
        <Footer />
        <ToastContainer
            position="top-right"
            type="default"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            pauseOnHover
        />
    </div>
);

App.propTypes = {
    children: PropTypes.object,
};


const mapDispatchToProps = dispatch =>
    bindActionCreators({}, dispatch);

export default connect(null, mapDispatchToProps)(App);
