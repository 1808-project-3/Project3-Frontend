import { combineReducers } from "redux";
import { signInReducer } from "./sign-in.reducer";
import { Resource } from "../models/Resource";
import { addSkillsReducer } from "./add-skills.reducer";

export interface ISignInState {
  credentials: {
    password: string,
    username: string
  },
  errorMessage: string
}

export interface IAddSkillsState {
  resource: Resource
}

export interface IState {
  signIn: ISignInState,
  addSkills: IAddSkillsState
}

export const state = combineReducers<IState>({
  addSkills: addSkillsReducer,
  signIn: signInReducer
})