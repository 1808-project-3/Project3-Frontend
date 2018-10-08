import { combineReducers } from "redux";
import { Resource } from "../models/Resource";
import { addSkillsReducer } from "./add-skills.reducer";
import { signInReducer } from "./sign-in.reducer";
import { Grade } from "../models/Grade";
import { Location } from "../models/Location";
import { CompetencyTag } from "../models/CompetencyTag";
import { Certification } from "../models/Certification";
import { resourceSkillsDisplayReducer } from "./resource-skills-display.reducer";

export interface ISignInState {
  credentials: {
    password: string,
    username: string
  },
  errorMessage: string
}

export interface IAddSkillsState {
  associateIdInput: string,
  certificationSearch: string,
  dateTbd: boolean,
  listOfCertifications: Certification[],
  listOfCompetencyTaggings: CompetencyTag[],
  listOfGrades: Grade[],
  listOfLocations: Location[],
  newOrExistingProject: string,
  projectIdInput: string,
  resource: Resource,
  skillGroupIds: number[],
  submitted: boolean,
  supervisorIdInput: string
}

export interface IResourceSkillsDisplayState {
  isConfirm: boolean,
  currentResource: Resource
}

export interface IState {
  signIn: ISignInState,
  addSkills: IAddSkillsState,
  resourceSkillsDisplayState: IResourceSkillsDisplayState
}

export const state = combineReducers<IState>({
  addSkills: addSkillsReducer,
  resourceSkillsDisplayState: resourceSkillsDisplayReducer,
  signIn: signInReducer
})