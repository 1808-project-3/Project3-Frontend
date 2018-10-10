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

export interface ISignInState {
  credentials: {
    pass: string,
    userId: string
  },
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

export const state = combineReducers<IState>({
  addSkills: addSkillsReducer,
  info: infoReducer,
  jwt: jwtReducer,
  register: registerReducer,
  resourceSkillsDisplayState: resourceSkillsDisplayReducer,
  searchResults: searchReducer,
  signIn: signInReducer
})


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

// export interface IInfoState {
//     tableType: string
//     viewRow: number
//     resourceCMList: any[]
//     resourceDesignList: any[]
//     resourceList: any[]
//     resourceMobilityList: any[]
//     resourceUIList: any[]
//     projectList: any[]
//     projectName: string
//     associateList: any[]
//     errorMessage: string

// export interface IAddSkillsState {
//   associateIdInput: string,
//   certificationSearch: string,
//   dateTbd: boolean,
//   listOfCertifications: Certification[],
//   listOfCompetencyTaggings: CompetencyTag[],
//   listOfGrades: Grade[],
//   listOfLocations: Location[],
//   listOfSkillGroups: Group[],
//   newOrExistingProject: string,
//   projectIdInput: string,
//   resource: Resource,
//   skillGroupIds: number[],
//   submitted: boolean,
//   supervisorIdInput: string
// }

// export interface IResourceSkillsDisplayState {
//   isConfirm: boolean,
//   currentResource: Resource
// }

// export interface IState {
//   addSkills: IAddSkillsState,
//   info: IInfoState,
//   resourceSkillsDisplayState: IResourceSkillsDisplayState,
//   signIn: ISignInState
// }

// export const state = combineReducers<IState>({
//   addSkills: addSkillsReducer,
//   info: infoReducer,
//   resourceSkillsDisplayState: resourceSkillsDisplayReducer,
//   signIn: signInReducer
// })
