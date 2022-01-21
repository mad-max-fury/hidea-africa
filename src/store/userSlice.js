import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const signupUser = createAsyncThunk(
    'user/signupUser', 
    async ({firstName, lastName, email, password}, thunkAPI) => {
        try {
            const response = await fetch('https://hidea-backend-dev.herokuapp.com/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    firstName,
                    lastName,
                    email,
                    password,
                }),
            })
            let data = await response.json();
            console.log("data", data);

            if (response.status === 200) {
                localStorage.setItem('token', data.token);
                return {...data, firstName, lastName, email, password};
            } else {
                return thunkAPI.rejectWithValue(data);
            }
        } catch (error) {
            console.log("error", error.response.data);
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

export const userSlice = createSlice({
    name: 'user',
    initialState: {
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        isLoading: false,
        errorMessage: '',
        isSuccess: false,
        isError: false,
    },
    reducers: {
        clearState: (state) => {
            state.isLoading = false;
            state.isSuccess = false;
            state.isError = false;

            return state;
        }

    },
    extraReducers: {
        [signupUser.fulfilled]: (state, { payload }) => {
            console.log("payload", payload);
            state.email = payload.email;
            state.password = payload.password;
            state.firstName = payload.firstName;
            state.lastName = payload.lastName;
            state.isLoading = false;
            state.isSuccess = true;
        },
        [signupUser.pending]: (state) => {
            state.isLoading = true;
        },
        [signupUser.rejected]: (state, { payload }) => {
            state.isLoading = false;
            state.isError = true;
            state.errorMessage = payload.message;
        },

    }
});

export const { clearState } = userSlice.actions;

export const userSelector = state => state.user;