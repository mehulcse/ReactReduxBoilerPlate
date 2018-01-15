import * as constants from './constants';

const addPatient = patient => ({
    type: constants.ADD_PATIENT,
    patient,
});

export { addPatient };
