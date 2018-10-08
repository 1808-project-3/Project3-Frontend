import { resourceSkillsDisplayTypes } from "./resource-skills-display.types";
import { Resource } from "../../models/Resource";


export const toggleConfirm = () => {
    return {
        payload: {
        },
        type: resourceSkillsDisplayTypes.TOGGLE_CONFIRM
    }
}

export const updateResource = (newResource:Resource) => {
    return {
        payload: {
            newResource
        },
        type: resourceSkillsDisplayTypes.UPDATE_RESOURCE
    }
}