import * as constants from './constants';

const createPatient = (state = {}, action) => {
    switch (action.type) {
        case constants.ADD_PATIENT:
            return { ...state, list: [...state.list || [], action.patient] };
        default:
            return state;
    }
};

export default createPatient;
