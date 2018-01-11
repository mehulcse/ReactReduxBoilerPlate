import formDetails from 'containers/FormList/formDetails';
import * as constants from './constants';

const formListReducer = (state = formDetails, action) => {
    switch (action.type) {
        case constants.UPDATE_FORM_LIST: {
            return {
                ...state,
                formList: action.payload,
            };
        }

        case constants.UPDATE_ASSIGNMENT_LIST: {
            return {
                ...state,
                assignmentList: action.payload,
            };
        }

        default:
            return state;
    }
};

export default formListReducer;
