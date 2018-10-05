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
    userID: 0
}

export const registerReducer = (state = initialState, action: any) => {
    switch (action.type) {

        case registerTypes.UPDATE_FIELDS:
            const newState = { ...state };
            newState[action.payload.name] = action.payload.value;
            return newState;

        case registerTypes.UPDATE_ERROR:
            return {
                ...state,
                errorMessage: action.payload.errorMessage
            }

        case registerTypes.CLEAR_FIELDS:
            return initialState;
    }

    return state;
}