import * as constants from './constants';
const URL_ROOT = 'http://localhost:3004';

export const getClientList = () => dispatch =>
    fetch(`${URL_ROOT}/clientList`, {
        method: 'GET',
    })
        .then(response => response.json())
        .then(data => {
            dispatch(updateClientList(data));
        })
        .catch(error => {
            console.log('request failed', error);
        });

export const deleteClient = id => dispatch =>
    fetch(`${URL_ROOT}/clientList/${id}`, {
        method: 'DELETE',
    })
        .then(response => response.json())
        .then(() => dispatch(getClientList()));

export const updateClientList = list => ({
    type: constants.UPDATE_LIST,
    payload: list,
});
