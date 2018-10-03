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
                    const newUser = new User({ ...state.resource.user })
                    newUser.assocId = action.payload.value;
                    newResource.user = newUser;
                    newState.resource = newResource;
            }
            return newState;
    }
    return state;
}