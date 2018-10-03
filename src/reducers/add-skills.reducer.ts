import { addSkillsTypes } from "../actions/resource-skills/add-skills.types";
import { IAddSkillsState } from ".";
import { Resource } from "../models/Resource";

const initialState: IAddSkillsState = {
    resource: new Resource
}

export const addSkillsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case addSkillsTypes.UPDATE_RESOURCE:
            const newState = { ...state };
            newState[action.payload.name] = action.payload.value;
            return newState;
    }
    return state;
}