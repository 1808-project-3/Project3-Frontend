import { addSkillsTypes } from "./add-skills.types";
import { Skill } from "../../models/Skill";
import { Resume } from "../../models/Resume";
import history from '../../history';
import { Resource } from "../../models/Resource";
import { Location } from "../../models/Location";
import { Grade } from "../../models/Grade";
import { CompetencyTag } from "../../models/CompetencyTag";
import MockGrades from '../../assets/grades.json';
import MockLocations from '../../assets/locations.json';
import MockCompetencyTags from '../../assets/competency-tags.json';
import MockCertifications from '../../assets/certifications.json';
import MockUser from '../../assets/user.json';
import { Certification } from "../../models/Certification";
import { User } from "../../models/User";

export const fetchAssociate = (assocId: number) => (dispatch: any) => {
    dispatch({
        payload: {
            associate: new User(MockUser)
        },
        type: addSkillsTypes.FETCH_ASSOCIATE
    })
}

export const fetchCertificationList = (search: string) => (dispatch: any) => {
    dispatch({
        payload: {
            listOfCertifications: MockCertifications.map((cert: any) => new Certification(cert))
        },
        type: addSkillsTypes.FETCH_CERTIFICATIONS
    })
}

export const fetchCompetencyTaggingList = () => (dispatch: any) => {
    dispatch({
        payload: {
            listOfCompetencyTaggings: MockCompetencyTags.map((tag: any) => new CompetencyTag(tag))
        },
        type: addSkillsTypes.FETCH_COMPETENCY_TAGGINGS
    })
}

export const fetchGradeList = () => (dispatch: any) => {
    // Fetch needs to pull list of possible Grades
    dispatch({
        payload: {
            listOfGrades: MockGrades.map((grade: any) => new Grade(grade))
        },
        type: addSkillsTypes.FETCH_GRADES
    })
}

export const fetchLocationList = () => (dispatch: any) => {
    // fetch needs to pull list of possible grades
    dispatch({
        payload: {
            listOfLocations: MockLocations.map((location: any) => new Location(location))
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

export const updateCertificationSearch = (search: string) => (dispatch: any) => {
    dispatch({
        payload: {
            certificationSearch: search
        },
        type: addSkillsTypes.UPDATE_CERTIFICATION_SEARCH
    })
}

export const addCertification = (certification: Certification) => (dispatch: any) => {
    dispatch({
        payload: {
            certification
        },
        type: addSkillsTypes.ADD_CERTIFICATION
    })
}

export const removeCertification = (certId: number) => {
    return {
        payload: {
            certId
        },
        type: addSkillsTypes.REMOVE_CERTIFICATION
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