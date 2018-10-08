import { IResourceSkillsDisplayState } from ".";
import { Resource } from "../models/Resource";
import { resourceSkillsDisplayTypes } from "../actions/resource-skills/resource-skills-display.types";

const initialState: IResourceSkillsDisplayState = {
    isConfirm: false,
    currentResource: new Resource()
}

export const resourceSkillsDisplayReducer = (state = initialState, action: any) => {
    switch(action.type){
        case resourceSkillsDisplayTypes.TOGGLE_CONFIRM:
            return{
                ...state,
                isConfirm: !state.isConfirm
            };
        case resourceSkillsDisplayTypes.UPDATE_RESOURCE:
            return{
                ...state,
                currentResource: action.payload.newResource
            };
    }
    return state;

}