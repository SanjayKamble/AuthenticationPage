import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
// import base from '../../pages/api/base';
import axios from 'axios';
const  baseURL = "https://test.mshr.website/api";


export const fetchAsyncUsers = createAsyncThunk("/api/users",
async()=>{
    try {
        
        const response = await axios.get(baseURL);
        return [...response.data];
    } catch (error) {
        return error.message;
    }
}
);

const initialState = {
    users :{}
};

const userSlice = createSlice({
    name : 'employees',
    initialState,
    reducers :{
        fetchUserData:(state,{payload})=>{
                return {...state,users : payload}
        },
        
    }
})