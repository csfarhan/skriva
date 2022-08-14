import axios from 'axios';

const API_URL = 'http://localhost:5000/tweet/';

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

const tweetService = {
    register,
    logout,
    login,
    follow,
    getprofile,
    updateprofile,
    changepassword
}

export default authService;