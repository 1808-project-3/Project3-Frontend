import { combineReducers } from "redux";
import { Resource } from "../models/Resource";
import { addSkillsReducer } from "./add-skills.reducer";
import { signInReducer } from "./sign-in.reducer";
import { Grade } from "../models/Grade";
import { Location } from "../models/Location";
import { CompetencyTag } from "../models/CompetencyTag";
import { Certification } from "../models/Certification";

export interface ISignInState {
  credentials: {
    password: string,
    username: string
  },
  errorMessage: string
}

export interface IAddSkillsState {
  certificationSearch: string,
  dateTbd: boolean,
  listOfCertifications: Certification[],
  listOfCompetencyTaggings: CompetencyTag[],
  listOfGrades: Grade[],
  listOfLocations: Location[],
  resource: Resource,
  skillGroupIds: number[],
  submitted: boolean
}

export interface IState {
  signIn: ISignInState,
  addSkills: IAddSkillsState
}

export const state = combineReducers<IState>({
  addSkills: addSkillsReducer,
  signIn: signInReducer
})