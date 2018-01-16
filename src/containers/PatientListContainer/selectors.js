import get from 'lodash/get';
export const selectClientList = state => get(state, 'clientList.clientList');
