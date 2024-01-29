import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { urlArtista } from "../api/api";
import { headers } from "../api/api";
import axios from "axios";

const initialState = {
  info: {},
  tracce: [],
  loading: null,
  error: "",
  successo: [false, false],
};
export const getArtistaInfo = createAsyncThunk(
  "chiamataArtistaInfo/fetch",
  async (id) => {
    console.log(id);
    return axios(urlArtista + id.id).then((response) => {
      console.log(response.data);
      return response.data;
    });
  }
);

export const getArtistaTracks = createAsyncThunk(
  "chiamataArtistaTracks/fetch",
  async (url) => {
    console.log(url);
    return axios(url).then((response) => {
      console.log(response.data);
      return response.data;
    });
  }
);

const chiamataArtista_slice = createSlice({
  name: "chiamataArtista",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getArtistaTracks.pending, (state, action) => {
        state.loading = true;
        state.successo[1] = false;
      })
      .addCase(getArtistaTracks.rejected, (state, action) => {
        state.loading = false;
        state.successo[1] = false;
        state.error = "Errore nel caricamento dei dati!!!";
      })
      .addCase(getArtistaTracks.fulfilled, (state, action) => {
        state.loading = false;
        state.successo[1] = true;
        console.log(action);
        state.tracce = [...action.payload.data];
        console.log(state);
      })
      .addCase(getArtistaInfo.pending, (state, action) => {
        state.loading = true;
        state.successo[0] = false;
      })
      .addCase(getArtistaInfo.rejected, (state, action) => {
        state.loading = false;
        state.successo[0] = false;
        state.error = "Errore nel caricamento dei dati!!!";
      })
      .addCase(getArtistaInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.successo[0] = true;
        console.log(action);
        state.info = action.payload;
        console.log(state);
      });
  },
});
const { reducer, actions } = chiamataArtista_slice;

export default reducer;
