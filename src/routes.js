import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import PropTypes from 'prop-types';

import AppContainer from 'containers/App';
import TokenManager from 'utils/TokenManager';
import { history } from './store';

const ProtectedRoute = ({ component: Component, ...rest }) => (
    <Route
        render={props =>
            TokenManager.get() ? (
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
            <Route path="*" component={require('containers/NotFound').default} />
        </Switch>
    </ConnectedRouter>
);

ProtectedRoute.propTypes = {
    component: PropTypes.func.isRequired,
    rest: PropTypes.object,
    location: PropTypes.object,
};
