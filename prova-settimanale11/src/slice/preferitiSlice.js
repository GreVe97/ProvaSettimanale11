import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    preferiti: [],
}; 

const preferiti_slice = createSlice(
    {
        name: 'preferiti',
        initialState: initialState,
        reducers: {
            aggiungiPreferiti(state, action) {
                console.log("sono dentro l'azione");
                if(!state.preferiti.includes(action)){
                    state.preferiti.push(action.payload)            
                }
            },
            togliPreferiti(state,action){
                state.preferiti=state.preferiti.filter(ele=>ele!=action.payload)
            }
        }
    }
)

const { actions, reducer } = preferiti_slice;
export const { aggiungiPreferiti, togliPreferiti } = actions;
export default reducer;