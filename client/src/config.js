export const API_URL = process.env.NODE_ENV === 'production'
    ? 'https://inventory-management-software.herokuapp.com/'
    : 'http://localhost:5001'