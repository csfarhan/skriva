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

// Follow user
const follow = async (userData) => {
    const response = await axios.put(API_URL + 'follow' , userData);
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
}

// Get profile
const getprofile = async (userData) => {
    const response = await axios.get(API_URL + 'getProfile' , userData);
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
}

// Update Profile
const updateprofile = async (userData) => {
    const response = await axios.put(API_URL + 'update' , userData);
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
}

// Change Password
const changepassword = async (userData) => {
    const response = await axios.put(API_URL + 'changePassword' , userData);
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
}
const authService = {
    register,
    logout,
    login,
    follow,
    getprofile,
    updateprofile,
    changepassword
}

export default authService;