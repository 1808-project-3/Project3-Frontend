import { addSkillsTypes } from "./add-skills.types";
import { Skill } from "../../models/Skill";
import { Resume } from "../../models/Resume";
import history from '../../history';
import { Resource } from "../../models/Resource";
import { Location } from "../../models/Location";
import { Grade } from "../../models/Grade";
import { CompetencyTag } from "../../models/CompetencyTag";

export const fetchCompetencyTaggingList = () => (dispatch: any) => {
    dispatch({
        payload: {
            listOfCompetencyTaggings: [new CompetencyTag({ tagId: 1, name: "Business" }),
            new CompetencyTag({ tagId: 2, name: "Process" }),
            new CompetencyTag({ tagId: 3, name: "Operations and IT Consulting" }),
            new CompetencyTag({ tagId: 4, name: "Application Development and System Integration" }),
            new CompetencyTag({ tagId: 5, name: "Enterprise Information Management" })]
        },
        type: addSkillsTypes.FETCH_COMPETENCY_TAGGINGS
    })
}

export const fetchGradeList = () => (dispatch: any) => {
    // Fetch needs to pull list of possible Grades
    dispatch({
        payload: {
            listOfGrades: [new Grade({ gradeId: 1, name: 'AU' }),
            new Grade({ gradeId: 2, name: 'A' }),
            new Grade({ gradeId: 3, name: 'D' }),
            new Grade({ gradeId: 4, name: 'AD' }),
            new Grade({ gradeId: 5, name: 'UA' })]
        },
        type: addSkillsTypes.FETCH_GRADES
    })
}

export const fetchLocationList = () => (dispatch: any) => {
    // fetch needs to pull list of possible grades
    dispatch({
        payload: {
            listOfLocations: [new Location({ locationId: 1, name: "Location1" }),
            new Location({ locationId: 2, name: "Location2" }),
            new Location({ locationId: 3, name: "Location3" }),
            new Location({ locationId: 4, name: "Location4" })]
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

export const cancelResource = () => {
    history.push('/dashboard')
    return {
        payload: {},
        type: addSkillsTypes.CANCEL_RESOURCE
    }
}

export const submitResource = (resource: Resource) => (dispatch: any) => {
    dispatch({
        payload: {
            submitted: true
        },
        type: addSkillsTypes.SUBMIT_RESOURCE
    })
}