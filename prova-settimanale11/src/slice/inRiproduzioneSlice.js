import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    inRiproduzione: {},
    play:false,
}; 

const inRiproduzione_slice = createSlice(
    {
        name: 'inRiproduzione',
        initialState: initialState,
        reducers: {
            riproduci(state, action) {
                if(state.id!=action.payload.id){
                    state.inRiproduzione = {...action.payload};
                    state.play=true;
                }else{
                    state.play=false;
                }
            },
        }
    }
)

const { actions, reducer } = inRiproduzione_slice;
export const { riproduci } = actions;
export default reducer;