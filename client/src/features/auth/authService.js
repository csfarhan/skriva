import axios from 'axios';

const API_URL = 'http://localhost:5000/user/';

// Register user
const register = async (userData) => {
    // Post request to backend register function
    const response = await axios.post(API_URL, userData);
    // If data then save information to local storage
    if(response.data) {
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
}

// Login user
const login = async (userData) => {
    const response = await axios.post(API_URL + 'login' , userData);
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
}

// Logout user
const logout = () => {
    // Remove item from local storage called user
    // Which will log the user out because no token
    localStorage.removeItem('user');
}

const authService = {
    register,
    logout,
    login
}

export default authService;