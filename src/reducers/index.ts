import { combineReducers } from "redux";
import { Resource } from "../models/Resource";
import { addSkillsReducer } from "./add-skills.reducer";
import { signInReducer } from "./sign-in.reducer";
import { registerReducer } from "./register";
import { searchReducer } from './search.reducer';
import { jwtReducer } from "./jwt";
import { infoReducer } from "./info.reducer";
import { Grade } from "../models/Grade";
import { Location } from "../models/Location";
import { CompetencyTag } from "../models/CompetencyTag";
import { Certification } from "../models/Certification";
import { resourceSkillsDisplayReducer } from "./resource-skills-display.reducer";
import { Group } from "../models/Group";
import { User } from "src/models/User";
import { signInTypes } from "../actions/sign-in/sign-in.types";

export interface ISignInState {
  credentials: {
    pass: string,
    userId: string
  },
  currentUser: User,
  errorForgotMessage: string,
  errorMessage: string,
  modal: boolean,
  resetModal: boolean
}

export interface IInfoState {
  tableType: number
  viewRow: number
  resourceList: any[]
  projectList: any[]
  certificationList: any[]
  skillGroupList: any[]
  skillsList: any[]
  projectName: string
  associateList: any[]
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
listOfSkillGroups: Group[],
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

export interface IJwtState {
  jwt: string
}

export interface IState {
  addSkills: IAddSkillsState,
  info: IInfoState,
  resourceSkillsDisplayState: IResourceSkillsDisplayState,
  jwt: IJwtState,
  signIn: ISignInState,
  register: IRegisterState,
  searchResults: ISearchResultsState
}
const reducers = {
  addSkills: addSkillsReducer,
  info: infoReducer,
  jwt: jwtReducer,
  register: registerReducer,
  resourceSkillsDisplayState: resourceSkillsDisplayReducer,
  searchResults: searchReducer,
  signIn: signInReducer
}

const reducer = combineReducers<IState>(reducers);

export const state = (newState: any, action: any) => {
  if (action.type === signInTypes.LOGOUT) {
    newState = {}
  }

  return reducer(newState, action)
};