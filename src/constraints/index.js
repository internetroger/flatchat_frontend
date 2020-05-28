export const API_ROOT = 'https://flatchat-demo.herokuapp.com/';
export const API_WS_ROOT = 'wss://flatchat-demo.herokuapp.com/cable';
export const HEADERS = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    Authorization: `Bearer ${localStorage.getItem("token")}`
};
