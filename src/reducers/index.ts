import { combineReducers } from "redux";
import { signInReducer } from "./sign-in.reducer";
import { registerReducer } from "./register";
import { searchReducer } from './search.reducer';

export interface ISignInState {
  credentials: {
    pass: string,
    userId: string
  },
  errorMessage: string
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

export interface ISearchResultsState {
  associateName: string,
  id: number,
  certifcation: string,
  projectDetails: string,
  grade: string
}

export interface IState {
  signIn: ISignInState,
  register: IRegisterState,
  searchResults: ISearchResultsState
}

export const state = combineReducers<IState>({
  register: registerReducer,
  searchResults: searchReducer,
  signIn: signInReducer
})