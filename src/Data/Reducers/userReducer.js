import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

// Services
import {signinService} from '../services/AuthServices/auth.service'

export const signinItem = createAsyncThunk(
    "/authSigninUser", 
    async(payload, thunkAPI) => {
        const response = await signinService(payload) ;
        if (!response.isSuccessful){
            return thunkAPI.rejectWithValue(response) ;
        }
        return response ;
    }
) ;

const userSlice = createSlice({
    name : "User",
    initialState : {
        authentication : false,
        user : null
    },
    reducers : {

    }, 
    extraReducers : {
        [signinItem.fulfilled] : (state, action) => {
            console.log('actionin userReducer : ', action);
            state.authentication = true ;
            state.user = action.data ;
        }
    }
}) ;

export default userSlice.reducer ;
