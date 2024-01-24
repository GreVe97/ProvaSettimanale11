import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    inRiproduzione: {}
}; 

const inRiproduzione_slice = createSlice(
    {
        name: 'inRiproduzione',
        initialState: initialState,
        reducers: {
            riproduci(state, action) {
                if(state.id!=action.payload.id){
                    state = {...action.payload}
                }
            },
        }
    }
)

const { actions, reducer } = inRiproduzione_slice;
export const { riproduci } = actions;
export default reducer;