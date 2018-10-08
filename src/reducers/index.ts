import { combineReducers } from "redux";
import { signInReducer } from "./sign-in.reducer";
import { registerReducer } from "./register";

export interface ISignInState {
  credentials: {
    pass: string,
    userId: string
  },
  errorMessage: string,
  modal: boolean
}

export interface IRegisterState {
  firstName: string,
  lastName: string,
  email: string,
  roleProfile: number,
  userID: number,
  password: string,
  confirmPassword: string,
  errorMessage: string
}

export interface IState {
  signIn: ISignInState,
  register: IRegisterState
}

export const state = combineReducers<IState>({
  register: registerReducer,
  signIn: signInReducer
})