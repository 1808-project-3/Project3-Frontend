import { IResourceSkillsDisplayState } from ".";
import { Resource } from "../models/Resource";
import { resourceSkillsDisplayTypes } from "../actions/resource-skills/resource-skills-display.types";

const initialState: IResourceSkillsDisplayState = {
    currentResource: new Resource(),
    isConfirm: false
}

export const resourceSkillsDisplayReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case resourceSkillsDisplayTypes.TOGGLE_CONFIRM:
            const confirm = state.currentResource.skills.length > 0 && state.currentResource.user.firstName && state.currentResource.project.supervisor.firstName;
            return {
                ...state,
                isConfirm: confirm ? !state.isConfirm : false
            };
        case resourceSkillsDisplayTypes.UPDATE_RESOURCE:
            return {
                ...state,
                currentResource: action.payload.newResource
            };
    }
    return state;

}