import { combineReducers } from "redux";
import { signInReducer } from "./sign-in.reducer";

export interface ISignInState {
  credentials: {
    pass: string,
    userId: string
  },
  errorMessage: string
}

export interface IState {
  signIn: ISignInState,
}

export const state = combineReducers<IState>({
  signIn: signInReducer,
})