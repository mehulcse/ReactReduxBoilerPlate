export const validateEmail = email => /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email);
// Password (UpperCase, LowerCase, Number, SpecialChar and min 8 Chars)
export const validatePassword = password =>
    /(?=^.{8,}$)(?=.*\d)(?=.*\W+)(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/.test(password);
