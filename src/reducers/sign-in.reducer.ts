import { signInTypes } from "../actions/sign-in/sign-in.types";
import { ISignInState } from ".";
import { User } from "src/models/User";

const initialState: ISignInState = {
  credentials : {
    pass: '',
    userId: ''
  },
  currentUser: new User,
  errorForgotMessage: '',
  errorMessage: '',
  modal: false,
  resetModal: false,
  
}

export const signInReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case signInTypes.UPDATE_ERROR:
      return {
        ...state,
        errorMessage: action.payload.errorMessage
      }
      case signInTypes.UPDATE_FORGOT_ERROR:
      return {
        ...state,
        errorForgotMessage: action.payload.errorForgotMessage
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
      
      return {
        ...state,
        currentUser: action.payload.currentUser
        }

      case signInTypes.CHANGE_MODAL:
      return {
        ...state,
        modal: !state.modal
      }

      case signInTypes.CHANGE_RESET:
      return {
        ...state,
        resetModal: !state.resetModal
      }
  }

  return state;
}