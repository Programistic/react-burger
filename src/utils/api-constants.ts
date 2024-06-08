export const apiURL = 'https://norma.nomoreparties.space/api';
export const dataURL = `${apiURL}/ingredients`;
export const orderURL = `${apiURL}/orders`;
export const passwordRecoverURL = `${apiURL}/password-reset`;
export const passwordResetURL = `${apiURL}/password-reset/reset`;
export const authURL = `${apiURL}/auth`;
export const registerURL = `${authURL}/register`;
export const loginURL = `${authURL}/login`;
export const logoutURL = `${authURL}/logout`;
export const tokenURL = `${authURL}/token`;
export const userURL = `${authURL}/user`;
export const wsURL = `wss://norma.nomoreparties.space`;
export const wsOrdersURL = `${wsURL}/orders`; //timeout 15s
export const wsAllOrdersURL = `${wsOrdersURL}/all`;
