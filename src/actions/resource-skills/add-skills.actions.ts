import axios from 'axios';
import MockCompetencyTags from '../../assets/competency-tags.json';
import MockGrades from '../../assets/grades.json';
import MockLocations from '../../assets/locations.json';
import MockProject from '../../assets/project.json';
import MockUser from '../../assets/user.json';
import history from '../../history';
import { Certification } from "../../models/Certification";
import { CompetencyTag } from "../../models/CompetencyTag";
import { Grade } from "../../models/Grade";
import { Group } from "../../models/Group";
import { Location } from "../../models/Location";
import { Project } from "../../models/Project";
import { Resource } from "../../models/Resource";
import { Resume } from "../../models/Resume";
import { Skill } from "../../models/Skill";
import { User } from "../../models/User";
import { addSkillsTypes } from "./add-skills.types";

export const fetchSkillGroupList = () => async (dispatch: any) => {
    const res = await axios.get('http://ec2-54-70-66-176.us-west-2.compute.amazonaws.com:5002/skill-group', { headers: { "JWT": 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2Vycy9Uek1Vb2NNRjRwIiwiZXhwIjo2MjUxNjM3OTYwMCwidXNlcmlkIjoxMjM0NTYsInNjb3BlIjoic2VsZiBncm91cHMvdXNlcnMifQ.nD9kCwmbAIpFj__Qq_e2_XOkbBCe6zhXu713DoBOCjY' } });
    const res1 = await axios.get('http://ec2-54-70-66-176.us-west-2.compute.amazonaws.com:5002/skills', { headers: { "JWT": 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2Vycy9Uek1Vb2NNRjRwIiwiZXhwIjo2MjUxNjM3OTYwMCwidXNlcmlkIjoxMjM0NTYsInNjb3BlIjoic2VsZiBncm91cHMvdXNlcnMifQ.nD9kCwmbAIpFj__Qq_e2_XOkbBCe6zhXu713DoBOCjY' } });
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

export const fetchAssociate = (assocId: number) => (dispatch: any) => {
    let associate = new User();
    if (assocId) {
        associate = new User(MockUser);
    }
    dispatch({
        payload: {
            associate
        },
        type: addSkillsTypes.FETCH_ASSOCIATE
    })
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
    const res = await axios.get('http://ec2-54-70-66-176.us-west-2.compute.amazonaws.com:5002/certifications', { headers: { "JWT": 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1c2Vycy9Uek1Vb2NNRjRwIiwiZXhwIjo2MjUxNjM3OTYwMCwidXNlcmlkIjoxMjM0NTYsInNjb3BlIjoic2VsZiBncm91cHMvdXNlcnMifQ.nD9kCwmbAIpFj__Qq_e2_XOkbBCe6zhXu713DoBOCjY' } });
    dispatch({
        payload: {
            listOfCertifications: res.data.map((cert: any) => new Certification({ certId: cert.id, name: cert.certificationName }))
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
    history.push('/home')
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