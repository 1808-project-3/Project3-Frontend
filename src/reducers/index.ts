import { combineReducers } from "redux";
import { signInReducer } from "./sign-in.reducer";
import {infoReducer} from "./info.reducer";

export interface ISignInState {
  credentials: {
    password: string,
    username: string
  },
  errorMessage: string
}

/**
 * IInfoState:
 *
 * tableType -          The type of table that is displayed based on type of skill.
 *                      Choices are "UI", "Mobility", "CM", "Design".
 * viewRow -            The id of the table row that is selected.
 * resourceList -       The list of resources that are to be displayed in the Resources table.
 * projectList -        The list of projects that are to be displayed in the Projects table.
 * errorMessage -       The error message that is caught and displayed to the user.
 */

export interface IInfoState {
    tableType: string
    viewRow: number
    resourceList: any[]
    projectList: any[]
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