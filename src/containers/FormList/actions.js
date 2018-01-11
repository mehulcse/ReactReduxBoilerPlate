import * as constants from './constants';

const updateFormsList = list => ({
    type: constants.UPDATE_FORM_LIST,
    payload: list,
});

const updateAssignmentList = list => ({
    type: constants.UPDATE_ASSIGNMENT_LIST,
    payload: list,
});

export { updateFormsList, updateAssignmentList };
