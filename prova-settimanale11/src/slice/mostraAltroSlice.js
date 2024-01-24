import { createSlice } from '@reduxjs/toolkit';

const initialState = []
    
;

const inRiproduzione_slice = createSlice(
    {
        name: 'inRiproduzione',
        initialState: initialState,
        reducers: {
            metti(state, action) {
                state=action.payload
            },
        }
    }
)

const { actions, reducer } = inRiproduzione_slice;
export const { riproduci } = actions;
export default reducer;