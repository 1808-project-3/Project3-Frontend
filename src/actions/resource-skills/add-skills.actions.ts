import { addSkillsTypes } from "./add-skills.types";

export const updateResource = (event: any) => {
    return {
        payload: {
            name: event.name,
            value: event.value
        },
        type: addSkillsTypes.UPDATE_RESOURCE
    }
}