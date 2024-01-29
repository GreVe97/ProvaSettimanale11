import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import sessionStorage from "redux-persist/lib/storage/session";
import { persistStore, persistReducer } from "redux-persist";
import { encryptTransform } from "redux-persist-transform-encrypt";
import rigaReducer from "../slice/rigaSlice";
import chiamataAlbumReducer from "../slice/chiamataAlbumSlice";
import chiamataArtistaReducer from "../slice/chiamataArtistaSlice";
import chiamataSearchReducer from "../slice/chiamataSearchSlice";
import inRiproduzioneReducer from "../slice/inRiproduzioneSlice";
import preferitiReducer from '../slice/preferitiSlice'


const rootPersistConfig = {
  key: "root",
  storage: sessionStorage,
  transforms: [
    encryptTransform({
      secretKey: "my-super-secret-key",
      onError: function (error) {
        console.log(error);
      },
    }),
  ],
};


const rootReducer = combineReducers({
  riga: rigaReducer,
  chiamataAlbum: chiamataAlbumReducer,
  chiamataArtista: chiamataArtistaReducer,
  chiamataSearch: chiamataSearchReducer,
  inRiproduzione: inRiproduzioneReducer,
  preferiti: preferitiReducer,
});


const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer, 
});


export const persistor = persistStore(store);


