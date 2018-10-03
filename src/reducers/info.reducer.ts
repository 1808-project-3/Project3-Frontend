import {IInfoState} from "./index";
import {infoTypes} from "../actions/info/info.types";

const initialState: IInfoState = {
    errorMessage: "",
    projectList: [],
    resourceList: [],
    tableType: "",
    viewRow: 0,
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
