import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { urlAlbum } from '../api/api';
import { headers } from '../api/api';
import axios from 'axios';


const initialState = {
    chiamataAlbum: [],
    loading:null,
    error: "",
    successo:false,
};

export const getAlbumTracks = createAsyncThunk("chiamataAlbum/fetch", async (id) => {    
    return  axios(urlAlbum + id.id)
        .then((response) =>{console.log(response.data); return response.data})
})

const chiamataAlbum_slice = createSlice(
    {
        name: 'chiamataAlbum',
        initialState: initialState,
        reducers: {},
        extraReducers: builder => {
            builder.addCase(getAlbumTracks.pending, (state, action) => {
                state.loading = true;
                state.successo=false;
            })
                .addCase(getAlbumTracks.rejected, (state, action) => {
                    state.loading = false
                    state.successo=false;
                    state.error = "Errore nel caricamento dei dati!!!"
                })
                .addCase(getAlbumTracks.fulfilled, (state, action) => {
                    state.loading = false;
                    state.successo=true;
                    console.log(action);
                    state.chiamataAlbum= action.payload;
                    console.log(state);                    
                })
        }
    }
)
const { reducer,actions } = chiamataAlbum_slice;
/* export const { addFavourite, removeFavourite } = actions; */
export default reducer;