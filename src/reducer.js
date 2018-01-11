import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import globalReducer from 'containers/App/reducer';
import formListReducer from 'containers/FormList/reducer';

export default combineReducers({
    global: globalReducer,
    routing: routerReducer,
    formList: formListReducer,
});
