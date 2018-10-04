import { addSkillsTypes } from "./add-skills.types";
import { Skill } from "../../models/Skill";
import { Resume } from "../../models/Resume";

export const fetchCompetencyTaggingList = () => (dispatch: any) => {
    dispatch({
        payload: {
            listOfCompetencyTaggings: ['Tag1', 'Tag2', 'Tag3', 'Tag4']
        },
        type: addSkillsTypes.FETCH_COMPETENCY_TAGGINGS
    })
}

export const fetchGradeList = () => (dispatch: any) => {
    // Fetch needs to pull list of possible Grades
    dispatch({
        payload: {
            listOfGrades: ['AU', 'A', 'D', 'AD', 'UA']
        },
        type: addSkillsTypes.FETCH_GRADES
    })
}

export const fetchLocationList = () => (dispatch: any) => {
    // fetch needs to pull list of possible grades
    dispatch({
        payload: {
            listOfLocations: ['Florida', 'Georgia', 'California', 'Texas']
        },
        type: addSkillsTypes.FETCH_LOCATIONS
    })
}

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

export const addResumes = (files: FileList | null) => {
    const newResumes: Resume[] = [];
    if (files) {
        for (let i = 0; i < files.length; i++) {
            const fileName = files[i].name;
            newResumes.push(new Resume({ fileName, url: `http://fakeURL.com/${fileName}`, resumeId: i }));
        }
    }
    return {
        payload: {
            newResumes
        },
        type: addSkillsTypes.ADD_RESUMES
    }
}
export const removeResume = (resumeId: number) => {
    return {
        payload: {
            resumeId
        },
        type: addSkillsTypes.REMOVE_RESUME
    }
}