const COMM_HOST = window.ENV_CONFIG.hosts.api;
export const registerUserEndpoint = () => `${COMM_HOST}/register`;
export const loginUserEndpoint = () => `${COMM_HOST}/login`;
export const getCurrentUserEndpoint = () => `${COMM_HOST}/@me`;