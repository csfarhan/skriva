import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import authService from './authService';

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
export const register = createAsyncThunk('auth/register', async (user, thunkAPI) => {
    try {
        return await authService.register(user);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

// Logout user
export const logout = createAsyncThunk('auth/logout', async (user, thunkAPI) =>{
    await authService.logout();
})

// Login user
export const login = createAsyncThunk('auth/login', async (user, thunkAPI) =>{
    try {
        return await authService.login(user);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

// Follow user
export const follow = createAsyncThunk('auth/followUser', async (user, thunkAPI) =>{
    try {
        return await authService.followUser(user);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

// Get profile
export const getprofile = createAsyncThunk('auth/getProfile', async (user, thunkAPI) =>{
    try {
        return await authService.getprofile(user);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

// Update profile
export const updateprofile = createAsyncThunk('auth/updateProfile', async (user, thunkAPI) =>{
    try {
        return await authService.updateprofile(user);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

// Change password
export const changepassword = createAsyncThunk('auth/changePassword', async (user, thunkAPI) =>{
    try {
        return await authService.changepassword(user);
    } catch (error) {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        return thunkAPI.rejectWithValue(message);
    }
})

// Creation of authSlice reset state and
// the extra reducers which are states of 
// the above requests
export const authSlice = createSlice({
    name: 'auth',
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
            .addCase(register.pending, (state) =>{
                state.isLoading = true
            })
            .addCase(register.fulfilled, (state, action) =>{
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(register.rejected, (state, action) =>{
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })
            .addCase(login.pending, (state) =>{
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state,action) =>{
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(login.rejected, (state, action) =>{
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user = null
            })
            .addCase(logout.fulfilled, (state) => {
                state.user = null
            })
            .addCase(follow.pending, (state) =>{
                state.isLoading = false
            })
            .addCase(follow.fulfilled, (state,action) =>{
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(follow.rejected, (state,action) =>{
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(getprofile.pending, (state) =>{
                state.isLoading = false
            })
            .addCase(getprofile.fulfilled, (state,action) =>{
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(getprofile.rejected, (state,action) =>{
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(updateprofile.pending, (state) =>{
                state.isLoading = false
            })
            .addCase(updateprofile.fulfilled, (state,action) =>{
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(updateprofile.rejected, (state,action) =>{
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(changepassword.pending, (state) =>{
                state.isLoading = false
            })
            .addCase(changepassword.fulfilled, (state,action) =>{
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
            .addCase(changepassword.rejected, (state,action) =>{
                state.isLoading = false
                state.isSuccess = true
                state.user = action.payload
            })
    }
})

export const {reset} = authSlice.actions
export default authSlice.reducer;