export default class TokenManager {
    static get() {
        return localStorage.getItem('someTokenID');
    }

    static set(idToken) {
        if (idToken) {
            localStorage.setItem('someTokenID', idToken);
        }
    }

    static remove() {
        localStorage.removeItem('someTokenID');
    }
}
