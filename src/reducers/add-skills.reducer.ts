import { addSkillsTypes } from "../actions/resource-skills/add-skills.types";
import { IAddSkillsState } from ".";
import { Resource } from "../models/Resource";
import { User } from "../models/User";

const initialState: IAddSkillsState = {
    resource: new Resource
}

export const addSkillsReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case addSkillsTypes.UPDATE_RESOURCE:
            const newState = { ...state };
            const newResource = new Resource({ ...state.resource });
            switch (action.payload.name) {
                case "associateId":
                    const newIdUser = new User({ ...state.resource.user, assocId: action.payload.value })
                    newResource.user = newIdUser;
                    newState.resource = newResource;
                    break;
                case "associateName":
                    const newNameUser = new User({ ...state.resource.user, firstName: action.payload.value });
                    newResource.user = newNameUser;
                    newState.resource = newResource;
                    break;
            }
            return newState;
    }
    return state;
}