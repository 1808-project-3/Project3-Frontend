import { combineReducers } from "redux";
import { signInReducer } from "./sign-in.reducer";
import { Resource } from "../models/resource";
import { Project } from "../models/project";
import {infoReducer} from "./info.reducer";

export interface ISignInState {
  credentials: {
    password: string,
    username: string
  },
  errorMessage: string
}

export interface IInfoState {
    tableType: string
    resourceList: Resource[]
    projectList: Project[]
    errorMessage: string
}

export interface IState {
  signIn: ISignInState,
  info: IInfoState,
}

export const state = combineReducers<IState>({
    info: infoReducer,
    signIn: signInReducer,
})