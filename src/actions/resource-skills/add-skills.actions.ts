import MockProject from '../../assets/project.json';
import MockUser from '../../assets/user.json';
import { apiClient } from '../../axios/api-client';
import { Certification } from "../../models/Certification";
import { CompetencyTag } from "../../models/CompetencyTag";
import { Grade } from "../../models/Grade";
import { Group } from "../../models/Group";
import { Location } from "../../models/Location";
import { Project } from "../../models/Project";
import { Resume } from "../../models/Resume";
import { Skill } from "../../models/Skill";
import { User } from "../../models/User";
import { addSkillsTypes } from "./add-skills.types";

export const fetchSkillGroupList = () => async (dispatch: any) => {
    const res = await apiClient.get('skill-group');
    const res1 = await apiClient.get('skills');
    const groupsWithSkills: any[] = [];
    res.data.forEach((el: any) => {
        const group = new Group({ groupId: el.id, name: el.groupName });
        const skills = res1.data.map((skill: any) => new Skill({ skillId: skill.id, name: skill.skillName, group: new Group({ groupId: skill.groupId }) }));
        const groupSkills = skills.filter((skill: Skill) => skill.group.groupId === group.groupId);
        groupsWithSkills.push({
            ...group, skills: [...groupSkills]
        });
    });
    const orderedGroupsWithSkills = groupsWithSkills.sort((sg1: Group, sg2: Group) => sg1.name < sg2.name ? -1 : 1);
    dispatch({
        payload: {
            listOfSkillGroups: orderedGroupsWithSkills
        },
        type: addSkillsTypes.FETCH_SKILL_GROUPS
    })
}

export const fetchProject = (projectId: number) => (dispatch: any) => {
    let project = new Project();
    if (projectId) {
        project = new Project(MockProject);
        project.supervisor = new User(project.supervisor);
        project.location = new Location(project.location);
        if (project.startDate) {
            project.startDate = new Date(project.startDate);
        }
        if (project.endDate) {
            project.endDate = new Date(project.endDate);
        }
    }
    dispatch({
        payload: {
            project
        },
        type: addSkillsTypes.FETCH_PROJECT
    })
}

export const fetchAssociate = (assocId: number) => async (dispatch: any) => {
    const res = await apiClient.get(`users/${assocId}`);
    const userData = res.data;
    dispatch({
        payload: {
            associate: new User({ assocId: userData.userId, uId: userData.associateId, firstName: userData.firstName, lastName: userData.lastName, emailAddress: userData.email, roleId: userData.role })
        },
        type: addSkillsTypes.FETCH_ASSOCIATE
    })
}

export const clearAssociate = () => {
    return {
        payload: {},
        type: addSkillsTypes.CLEAR_ASSOCIATE
    }
}

export const clearSupervisor = () => {
    return {
        payload: {},
        type: addSkillsTypes.CLEAR_SUPERVISOR
    }
}

export const fetchSupervisor = (supId: number) => (dispatch: any) => {
    let supervisor = new User();
    if (supId) {
        supervisor = new User(MockUser);
    }
    dispatch({
        payload: {
            supervisor
        },
        type: addSkillsTypes.FETCH_SUPERVISOR
    })
}

export const fetchCertificationList = () => async (dispatch: any) => {
    const res = await apiClient.get('certifications');
    dispatch({
        payload: {
            listOfCertifications: res.data.map((cert: any) => new Certification({ certId: cert.id, name: cert.certificationName }))
        },
        type: addSkillsTypes.FETCH_CERTIFICATIONS
    })
}

export const fetchCompetencyTaggingList = () => async (dispatch: any) => {
    const res = await apiClient.get('competency');
    dispatch({
        payload: {
            listOfCompetencyTaggings: res.data.map((tag: any) => new CompetencyTag({ tagId: tag.ctId, name: tag.ct }))
        },
        type: addSkillsTypes.FETCH_COMPETENCY_TAGGINGS
    })
}

export const fetchGradeList = () => async (dispatch: any) => {
    const res = await apiClient.get('grades');
    dispatch({
        payload: {
            listOfGrades: res.data.map((grade: any) => new Grade({ gradeId: grade.gradeId, name: grade.grade }))
        },
        type: addSkillsTypes.FETCH_GRADES
    })
}

export const fetchLocationList = () => async (dispatch: any) => {
    const res = await apiClient.get('location');
    dispatch({
        payload: {
            listOfLocations: res.data.map((location: any) => new Location({ name: location.locationName }))
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

export const updateCertificationSearch = (search: string) => {
    return {
        payload: {
            certificationSearch: search
        },
        type: addSkillsTypes.UPDATE_CERTIFICATION_SEARCH
    }
}

export const showOrHideProject = (newOrExisting: string) => {
    return {
        payload: {
            newOrExisting
        },
        type: addSkillsTypes.SHOW_OR_HIDE_PROJECT
    }
}

export const addCertification = (certification: Certification) => {
    return {
        payload: {
            certification
        },
        type: addSkillsTypes.ADD_CERTIFICATION
    }
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
    return {
        payload: {},
        type: addSkillsTypes.CANCEL_RESOURCE
    }
}

export const submitResource = (valid: boolean) => (dispatch: any) => {
    dispatch({
        payload: {
            submitted: valid
        },
        type: addSkillsTypes.SUBMIT_RESOURCE
    })
}