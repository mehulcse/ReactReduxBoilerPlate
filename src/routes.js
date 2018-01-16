import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import PropTypes from 'prop-types';

import AppContainer from 'containers/App';
import CreatePatient from 'containers/AddPatient';
import PatientList from 'containers/PatientListContainer';
import TokenManager from 'utils/TokenManager';
import { history } from './store';

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        render={props =>
            // TokenManager.get() ? (
            true ? (
                <AppContainer>
                    <Component {...props} />
                </AppContainer>
            ) : (
                <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            )
        }
        {...rest}
    />
);

export default () => (
    <ConnectedRouter history={history}>
        <Switch>
            <Route path="/" exact component={require('containers/Welcome').default} />
            <ProtectedRoute path="/addPatient" exact component={CreatePatient} />
            <ProtectedRoute path="/client" exact component={PatientList} />
            <Route path="*" component={require('containers/NotFound').default} />
        </Switch>
    </ConnectedRouter>
);

ProtectedRoute.propTypes = {
    component: PropTypes.func.isRequired,
    rest: PropTypes.object,
    location: PropTypes.object,
};
