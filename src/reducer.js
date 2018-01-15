import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import globalReducer from 'containers/App/reducer';
import { reducer as formReducer } from 'redux-form';
import createPatient from 'containers/AddPatient/reducer';

export default combineReducers({
    global: globalReducer,
    routing: routerReducer,
    form: formReducer,
    patient: createPatient,
});
