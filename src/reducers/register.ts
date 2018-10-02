import { registerTypes } from "../actions/register/register.actions"
import { IRegisterState } from ".";

const initialState: IRegisterState = {
    confirmPassword: '',
    email: '',
    errorMessage: '',
    firstName: '',
    lastName: '',
    password: '',
    roleProfile: '',
    userID: ''
}

export const registerReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case registerTypes.UPDATE_FIELDS:
    if(action.payload.name === 'first name'){
        return {
            ...state,
            firstName: action.payload.value
          }
    }
    else if (action.payload.name === 'last name'){
        return {
            ...state,
            lastName: action.payload.value
          }
    }
    else if (action.payload.name === 'email address'){
        return {
            ...state,
            email: action.payload.value
          }
    }
    else if (action.payload.name === 'role profile'){
        return {
            ...state,
            roleProfile: action.payload.value
          }
    }
    else if (action.payload.name === 'user id'){
        return {
            ...state,
            userID: action.payload.value
          }
    }
    else if (action.payload.name === 'password'){
        return {
            ...state,
            password: action.payload.value
          }
    }
    else if (action.payload.name === 'confirm password'){
        return {
            ...state,
            confirmPassword: action.payload.value
          }
    }
  }

  return state;
}