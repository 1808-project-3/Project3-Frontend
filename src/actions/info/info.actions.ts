import { infoTypes } from "./info.types";
import {api} from "../../API/api";
import axios from "axios";

/**
 * This action uses axios to make a GET request for all certifications and updates the certificationList in the state store.
 */

export const getCertificationList = () => (dispatch: any) => {
    axios.get(api.certifications, {headers: {"JWT": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2Vycy9Uek1Vb2NNRjRwIiwiZXhwIjo2MjUxNjM3OTYwMCwidXNlcmlkIjoxMjM0NTYsInNjb3BlIjoic2VsZiBncm91cHMvdXNlcnMifQ.nD9kCwmbAIpFj__Qq_e2_XOkbBCe6zhXu713DoBOCjY"}})
        .then(response => {
            const certifications: any[] = [];
            for (const c of response.data){
                certifications.push(c);
            }
            dispatch({
                payload: {
                    certificationList: certifications
                },
                type: infoTypes.GET_CERTIFICATION_LIST
            })
        })
}

/**
 * This action uses axios make a GET request for all resources based on tableType and updates the resourceList in the state store.
 * @param tableType
 * Determines which API endpoint is used for the GET request
 */

export const getResourceList = () => (dispatch: any) => {
    axios.get(api.resources, {headers: {"JWT": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2Vycy9Uek1Vb2NNRjRwIiwiZXhwIjo2MjUxNjM3OTYwMCwidXNlcmlkIjoxMjM0NTYsInNjb3BlIjoic2VsZiBncm91cHMvdXNlcnMifQ.nD9kCwmbAIpFj__Qq_e2_XOkbBCe6zhXu713DoBOCjY"}})
        .then(response => {
            const resourceEntries: any[] = [];
            for (const r of response.data) {
                resourceEntries.push(r);
            }
            dispatch({
                payload: {
                    resourceList: resourceEntries
                },
                type: infoTypes.GET_RESOURCE_LIST
            })
            return response;
        })
        .catch((e: any) => {
            const error = e.toString();
            dispatch({
                payload: {
                    errorMessage: error
                },
                type: infoTypes.UPDATE_ERROR
            })
        })
}

/**
 * This action updates project name with the one passed in.
 * @param data
 *  The passed in project name.
 */

export const getProjectName = (data: any) => {
    return {
        payload: {
            data
        },
        type: infoTypes.GET_PROJECT_NAME
    }
}




/**
 * This action will make a GET request for the list of projects that will be displayed on the
 * project list table.
 */

export const getProjectList = () => (dispatch: any) => {
    axios.get(api.projects, {headers: {"JWT": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2Vycy9Uek1Vb2NNRjRwIiwiZXhwIjo2MjUxNjM3OTYwMCwidXNlcmlkIjoxMjM0NTYsInNjb3BlIjoic2VsZiBncm91cHMvdXNlcnMifQ.nD9kCwmbAIpFj__Qq_e2_XOkbBCe6zhXu713DoBOCjY"}})
        .then(response => {
            const projectEntries: any[] = [];
            for (const r of response.data) {
                projectEntries.push(r);
            }
            dispatch({
                payload: {
                    projectList: projectEntries
                },
                type: infoTypes.GET_PROJECT_LIST
            });
            return response;
        })
        .catch((e: any) => {
            const error = e.toString();
            dispatch({
                payload: {
                    errorMessage: error
                },
                type: infoTypes.UPDATE_ERROR
            })
        })
}

/**
 * This action uses axios to make a GET request for all associates/users and updates the associateList in the state store.
 */

export const getAssociateList = () => (dispatch: any) => {
    axios.get(api.users, {headers: {"JWT": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2Vycy9Uek1Vb2NNRjRwIiwiZXhwIjo2MjUxNjM3OTYwMCwidXNlcmlkIjoxMjM0NTYsInNjb3BlIjoic2VsZiBncm91cHMvdXNlcnMifQ.nD9kCwmbAIpFj__Qq_e2_XOkbBCe6zhXu713DoBOCjY"}})
        .then(response => {
            const associateEntries: any[] = [];
            for (const r of response.data) {
                associateEntries.push(r);
            }
            dispatch({
                payload: {
                    associateList: associateEntries
                },
                type: infoTypes.GET_ASSOCIATE_LIST
            });
            return response;
        })
        .catch((e: any) => {
            const error = e.toString();
            dispatch({
                payload: {
                    errorMessage: error
                },
                type: infoTypes.UPDATE_ERROR
            })
        });

}

/**
 * This action will update the tableType based on the passed in parameter.
 * @param text
 * This signifies the passed in tableType.
 */

export const updateTableType = (tab: number) => {
    return {
        payload: {
            tableType: tab
        },
        type: infoTypes.UPDATE_TABLE_TYPE
    }
}

/**
 * This action updates the error message.
 * @param text
 * This signifies the passed in error message.
 */

export const updateError = (text: string) => {
    return {
        payload: {
            errorMessage: text
        },
        type: infoTypes.UPDATE_ERROR

    }
}

/**
 * This action updates the viewRow variable.
 * @param id
 * This signifies the passed in row id.
 */

export const updateViewRow = (id: number) => {
    return {
        payload: {
            viewRow: id
        },
        type: infoTypes.UPDATE_VIEW_ROW
    }
}