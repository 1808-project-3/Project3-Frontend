import {IInfoState} from "./index";
import {infoTypes} from "../actions/info/info.types";

const initialState: IInfoState = {
    errorMessage: "",
    projectList: [],
    resourceList: [],
    tableType: "",
};

export const infoReducer = (state: IInfoState = initialState, action: any) => {
    switch (action.type) {
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
        case infoTypes.UPDATE_TABLE_TYPE:
            return {
                ...state,
                tableType: action.payload.tableType
            }
        case infoTypes.UPDATE_ERROR:
            return {
                ...state,
                tableType: action.payload.errorMessage
            }

        default:
            return state;
    }
};
