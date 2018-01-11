import get from 'lodash/get';
export const selectFormList = state => get(state, 'formList');
