import {IInfoState} from "./index";
import {infoTypes} from "../actions/info/info.types";

const initialState: IInfoState = {
    associateList: [],
    certificationList: [],
    errorMessage: "",
    projectList: [],
    projectName: "",
    resourceList: [],
    skillGroupList: [],
    skillsList: [],
    tableType: 0,
    viewRow: 0,
};

export const infoReducer = (state: IInfoState = initialState, action: any) => {
    switch (action.type) {
        case infoTypes.GET_ASSOCIATE_LIST:
            return {
                ...state,
                associateList: action.payload.associateList
            };
        case infoTypes.GET_CERTIFICATION_LIST:
            return {
                ...state,
                certificationList: action.payload.certificationList
            };
        case infoTypes.GET_PROJECT_NAME:
            return {
                ...state,
                projectName: action.payload.data
            };
        case infoTypes.GET_RESOURCE_LIST:
            return {
                ...state,
                resourceList: action.payload.resourceList
            };
        case infoTypes.GET_PROJECT_LIST:
            return {
                ...state,
                projectList: action.payload.projectList
            };
        case infoTypes.GET_SKILL_GROUPS:
            return {
                ...state,
                skillGroupList: action.payload.skillGroupList
            };
        case infoTypes.UPDATE_TABLE_TYPE:
            return {
                ...state,
                tableType: action.payload.tableType
            }
        case infoTypes.UPDATE_ERROR:
            return {
                ...state,
                errorMessage: action.payload.errorMessage
            }
        case infoTypes.UPDATE_VIEW_ROW:
            return {
                ...state,
                viewRow: action.payload.viewRow
            }

        default:
            return state;
    }
};
