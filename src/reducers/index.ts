import { combineReducers } from "redux";
import { signInReducer } from "./sign-in.reducer";
import { registerReducer } from "./register";

export interface ISignInState {
  credentials: {
    password: string,
    username: string
  },
  errorMessage: string
}

export interface IRegisterState {
  firstName: string,
  lastName: string,
  email: string,
  roleProfile: string,
  userID: string,
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