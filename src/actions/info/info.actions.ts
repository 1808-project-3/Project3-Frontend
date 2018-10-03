import { infoTypes } from "./info.types";
import axios from "axios";

export const getResourceList = (tableType: string) => (dispatch: any) => {
    let path = '';
    if(tableType === "UI"){
        path = 'https://my-json-server.typicode.com/avicuna/talent-portal-mock/ui'
    }
    else if(tableType === "Mobility"){
        path = 'https://my-json-server.typicode.com/avicuna/talent-portal-mock/mobility'
    }
    else if(tableType === "CM"){
        path = 'https://my-json-server.typicode.com/avicuna/talent-portal-mock/cm'
    }
    else if(tableType === "Design"){
        path = 'https://my-json-server.typicode.com/avicuna/talent-portal-mock/design'
    }

    axios.get(path)
        .then( response => {
            const resourceEntries: any[] = [];
            for (const r of response.data){
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

export const getProjectList = () => (dispatch:any) => {
    axios.get('https://my-json-server.typicode.com/avicuna/talent-portal-mock/projects')
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

export const updateTableType = (text: string) =>  {
    return {
        payload: {
            tableType: text
        },
        type: infoTypes.UPDATE_TABLE_TYPE
    }
}

export const updateError = (text: string) => {
    return {
        payload: {
            errorMessage: text
        },
        type: infoTypes.UPDATE_ERROR

    }
}

export const updateViewRow = (id: number) => {
    return {
        payload: {
            viewRow: id
        },
        type: infoTypes.UPDATE_VIEW_ROW
    }
}