import { configureStore } from "@reduxjs/toolkit";
import sessionStorage from "redux-persist/lib/storage/session"; 
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import { encryptTransform } from 'redux-persist-transform-encrypt';
import rigaReducer from '../slice/rigaSlice'
import chiamataAlbumReducer from '../slice/chiamataAlbumSlice'
import chiamataArtistaReducer from '../slice/chiamataArtistaSlice'


const rootPersistConfig = {
    key: "root", 
    sessionStorage, 
     transforms: [
      encryptTransform({
        secretKey: 'my-super-secret-key',
        onError: function (error) {
          console.log(error)
        },
      })]
  };


  
  
  export const store = configureStore({
    reducer: { riga: rigaReducer,
              chiamataAlbum: chiamataAlbumReducer,
            chiamataArtista:chiamataArtistaReducer },
  })