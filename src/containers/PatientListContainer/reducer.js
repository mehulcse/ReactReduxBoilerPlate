import * as constants from './constants';

const clientListReducer = (state = {}, action) => {
    switch (action.type) {
        case constants.UPDATE_LIST: {
            return {
                ...state,
                clientList: action.payload,
            };
        }

        default:
            return state;
    }
};

export default clientListReducer;
