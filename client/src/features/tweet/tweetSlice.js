import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import tweetService from './tweetService';

// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))


// Initial state
const initialState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

// Register user
// Await for response from authService
// or send error
export const postTweet = createAsyncThunk('tweet/post', async (user, thunkAPI) => {
    try {
        return await authService.register(user);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

// Creation of authSlice reset state and
// the extra reducers which are states of 
// the above requests
export const tweetSlice = createSlice({
    name: 'tweet',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isSuccess = false
            state.isError = false
            state.message = ''
        }
    },
    extraReducers: (builder) => {
        builder
        .addCase()
    }
})

export const {reset} = authSlice.actions
export default authSlice.reducer;