import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios'


const homeslice = createSlice({
    name: 'users',
    initialState: {
        users: [],
    },
    reducers: {
        usersSuccess: (state, action) => {
            state.users = action.payload;
        },
        usersAddSuccess: (state, action) => {
            state.users.push= action.payload;
        },
    },
});

export const { usersSuccess , usersAddSuccess} = homeslice.actions

export const showTodo = (state) => state.users;


export default homeslice.reducer


    export const fetchUsers = () => async dispatch => {
        try {
            const res = await axios.get('https://reqres.in/api/users?page=2')
                dispatch(usersSuccess(res.data.data))
                
        }
        catch (e) {
            return console.error(e.message);
        }
    }
    export const addUsers = (data)=>async dispatch=>{
        try{
            const resData = await axios.post('https://reqres.in/api/users',data)
            dispatch(usersAddSuccess(resData.data))
        }catch(e){
            return console.error(e.message)
        }
    }

