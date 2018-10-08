import { signInTypes } from "../actions/sign-in/sign-in.types";
import { ISignInState } from ".";

const initialState: ISignInState = {
  credentials : {
    pass: '',
    userId: ''
  },
  errorMessage: '',
  modal: false
}

export const signInReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case signInTypes.UPDATE_ERROR:
      return {
        ...state,
        errorMessage: action.payload.errorMessage
      }
    case signInTypes.UPDATE_PASSWORD:
      return {
        ...state,
        credentials: {
          ...state.credentials,
          pass: action.payload.pass
        }
      }
    case signInTypes.UPDATE_USERNAME:
      return {
        ...state,
        credentials: {
          ...state.credentials,
          userId: action.payload.userId
        }
      }

      case signInTypes.LOGIN:
      const errorMessage = action.payload.errorMessage
      const newState = {
        ...state,
        errorMessage
      }
      if (!errorMessage) {
        newState.credentials = {
          pass: '',
          userId: ''
        }
      }
      return newState;

      case signInTypes.CHANGE_MODAL:
      return {
        ...state,
        modal: !state.modal
      }
  }

  return state;
}