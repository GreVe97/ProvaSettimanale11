import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { urlSearch } from '../api/api';
import { headers } from '../api/api';
import axios from 'axios';

const initialState = {
    riga: [[], [], []],
    loading: [false, false, false],
    error: ["", "", ""],
    successo:[false, false, false],
};

export const getTracks = createAsyncThunk("riga/fetch", async (arr) => {    
    let parola = arr[1];
    console.log(parola);    
    return  axios(urlSearch + parola)
        .then((response) => response.data.data)
})

const riga_slice = createSlice(
    {
        name: 'riga',
        initialState: initialState,
        reducers: {},
        extraReducers: builder => {
            builder.addCase(getTracks.pending, (state, action) => {
                state.loading[action.meta.arg[0]] = true
            })
                .addCase(getTracks.rejected, (state, action) => {
                    state.loading [action.meta.arg[0]]= false
                    state.error[action.args[0]] = "Errore nel caricamento dei dati!!!"
                })
                .addCase(getTracks.fulfilled, (state, action) => {
                    state.loading[action.meta.arg[0]] = false
                    state.successo[action.meta.arg[0]]=true;
                    state.error[action.meta.arg[0]] = ""  
                    state.riga[action.meta.arg[0]]= [...action.payload]
                    console.log(state);                    
                })
        }
    }
)
const { reducer,actions } = riga_slice;
/* export const { addFavourite, removeFavourite } = actions; */
export default reducer;