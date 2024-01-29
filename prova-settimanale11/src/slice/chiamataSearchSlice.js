import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { urlSearch } from '../api/api';
import { headers } from '../api/api';
import axios from 'axios';


const initialState = {
    chiamataSearch: [],
    loading:null,
    error: "",
    successo:false,
};

export const getSearchResults = createAsyncThunk("chiamataSearch/fetch", async (query) => {   
    console.log(query); 
    return  axios(urlSearch + query)
        .then((response) =>{console.log(response.data); return response.data.data})
})

const chiamataSearch_slice = createSlice(
    {
        name: 'chiamataSearch',
        initialState: initialState,
        reducers: {},
        extraReducers: builder => {
            builder.addCase(getSearchResults.pending, (state, action) => {
                state.loading = true;
                state.successo=false;
            })
                .addCase(getSearchResults.rejected, (state, action) => {
                    state.loading = false
                    state.successo=false;
                    state.error = "Errore nel caricamento dei dati!!!"
                })
                .addCase(getSearchResults.fulfilled, (state, action) => {
                    state.loading = false;
                  
                    console.log(action);
                    state.chiamataSearch= action.payload;
                    console.log(state);   
                    state.successo=true;                   
                })
        }
    }
)
const { reducer,actions } = chiamataSearch_slice;
/* export const { addFavourite, removeFavourite } = actions; */
export default reducer;