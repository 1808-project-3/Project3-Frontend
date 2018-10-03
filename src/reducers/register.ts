import { registerTypes } from "../actions/register/register.actions"
import { IRegisterState } from ".";

const initialState: IRegisterState = {
    confirmPassword: '',
    email: '',
    errorMessage: '',
    firstName: '',
    lastName: '',
    password: '',
    roleProfile: 0,
    userID: ''
}

export const registerReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case registerTypes.UPDATE_FIELDS:
            const newState = {...state};
            newState[action.payload.name] = action.payload.value;

            return newState;
    }

    return state;
}