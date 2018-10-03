import { infoTypes } from "./info.types";
import {Resource} from "../../models/resource";
import {Project} from "../../models/project";
import axios from "axios";

export const getResourceList = (tableType: string) => (dispatch: any) => {
    let path = '';
    if(tableType === "UI"){
        path = 'http://localhost:4000/ui'
    }
    else if(tableType === "Mobility"){
        path = 'http://localhost:4000/mobility'
    }
    else if(tableType === "CM"){
        path = 'http://localhost:4000/cm'
    }
    else if(tableType === "Design"){
        path = 'http://localhost:4000/design'
    }

    axios.get(path)
        .then( response => {
            const resourceEntries: Resource[] = [];
            // resourceEntries.map( () => {
            //     new Resource(;lakjsd;lfkj)
            // })
            for (const r of response.data){
                console.log(r);
                resourceEntries.push(new Resource(r.first_name, r.last_name, r.user_id, r.certifications.name, r.project_name, r.grade));
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
    axios.get("../../models/project")
        .then(response => {
            const projectEntries: Project[] = [];
            projectEntries.map(() => {
                return response.data
            })
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