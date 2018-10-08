import { IJwtState } from ".";
import { signInTypes } from "../actions/sign-in/sign-in.types";

const intialState: IJwtState = {
    jwt: ''
}

export const jwtReducer = (state = intialState, action: any) => {
    switch (action.type) { 

        case signInTypes.LOGIN:
        return {
            ...state,
            jwt: action.payload.jwt
        }

    }

    return state;
}
