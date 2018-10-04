import { addSkillsTypes } from "./add-skills.types";
import { Skill } from "../../models/Skill";

export const updateResource = (event: any) => {
    return {
        payload: {
            id: event.id,
            name: event.name,
            value: event.value
        },
        type: addSkillsTypes.UPDATE_RESOURCE
    }
}

export const updateResourceSkills = (skill: Skill) => {
    return {
        payload: {
            skill
        },
        type: addSkillsTypes.UPDATE_RESOURCE_SKILLS
    }
}

export const toggleSkillGroup = (event: any) => {
    return {
        payload: {
            groupId: +event.id.slice(13)
        },
        type: addSkillsTypes.TOGGLE_SKILL_GROUP
    }
}