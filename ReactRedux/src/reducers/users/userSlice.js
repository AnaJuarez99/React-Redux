import { createSlice} from '@reduxjs/toolkit'

const initialState = {
    email: "",
    fullname: "",
    token: "",

}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{        //modifico estado
        setUser: (state, action)=>{
        state.email= action.payload.email;
        state.fullname= action.payload.fullname;
        state.token= action.payload.token;
        }
    },
    
})

//Accion para ser disparada desde la vista
export const{setUser, unsetUser} = userSlice.actions;
//Esto es lo que le interesa al store
export default userSlice.reducer;