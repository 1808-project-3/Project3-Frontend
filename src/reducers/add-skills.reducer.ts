import { IAddSkillsState } from ".";
import { addSkillsTypes } from "../actions/resource-skills/add-skills.types";
import { Project } from "../models/Project";
import { Resource } from "../models/Resource";
import { User } from "../models/User";

const initialState: IAddSkillsState = {
    dateTbd: false,
    listOfCompetencyTaggings: [],
    listOfGrades: [],
    listOfLocations: [],
    resource: new Resource(),
    skillGroupIds: []
}

export const addSkillsReducer = (state = initialState, action: any) => {
    const newState = { ...state };
    switch (action.type) {
        case addSkillsTypes.UPDATE_RESOURCE:
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
                case "aopCertified":
                    newResource.aupCertified = action.payload.id === "aop-certified-yes";
                    newState.resource = newResource;
                    break;
                case "customerName":
                    const newCustomerNameProject = new Project({ ...state.resource.project, customerName: action.payload.value });
                    newResource.project = newCustomerNameProject;
                    newState.resource = newResource;
                    break;
                case "projectId":
                    const newIdProject = new Project({ ...state.resource.project, pId: action.payload.value });
                    newResource.project = newIdProject;
                    newState.resource = newResource;
                    break;
                case "projectName":
                    const newNameProject = new Project({ ...state.resource.project, name: action.payload.value });
                    newResource.project = newNameProject;
                    newState.resource = newResource;
                    break;
                case "grade":
                    newResource.grade = action.payload.value;
                    newState.resource = newResource;
                    break;
                case "competencyTagging":
                    newResource.compentencyTagging = action.payload.value;
                    newState.resource = newResource;
                    break;
                case "supervisorId":
                    const newSupervisorIdProject = new Project({ ...state.resource.project, supervisor: new User({ ...state.resource.project.supervisor, assocId: action.payload.value }) });
                    newResource.project = newSupervisorIdProject;
                    newState.resource = newResource;
                    break;
                case "supervisorName":
                    const newSupervisorNameProject = new Project({ ...state.resource.project, supervisor: new User({ ...state.resource.project.supervisor, firstName: action.payload.value }) });
                    newResource.project = newSupervisorNameProject;
                    newState.resource = newResource;
                    break;
                case "location":
                    const newLocationProject = new Project({ ...state.resource.project, location: action.payload.value });
                    newResource.project = newLocationProject;
                    newState.resource = newResource;
                    break;
                case "startDate":
                    const newStartDateProject = new Project({ ...state.resource.project, startDate: action.payload.value });
                    newResource.project = newStartDateProject;
                    newState.resource = newResource;
                    break;
                case "endDate":
                    const newEndDateProject = new Project({ ...state.resource.project, endDate: action.payload.value });
                    newResource.project = newEndDateProject;
                    newState.resource = newResource;
                    break;
                case "date-tbd":
                    const newEmptyDateProject = new Project({ ...state.resource.project, startDate: undefined, endDate: undefined });
                    newResource.project = newEmptyDateProject;
                    newState.resource = newResource;
                    newState.dateTbd = !state.dateTbd;
                    break;
            }
            return newState;
        case addSkillsTypes.TOGGLE_SKILL_GROUP:
            const toggledGroupId = action.payload.groupId;
            const currentlyToggledOn = state.skillGroupIds.indexOf(toggledGroupId) > -1;
            const newSkillGroups = currentlyToggledOn ? [...state.skillGroupIds].filter(groupId => groupId !== toggledGroupId) : [...state.skillGroupIds, toggledGroupId];
            newState.skillGroupIds = newSkillGroups;
            if (currentlyToggledOn) {
                newState.resource.skills = state.resource.skills.filter(skill => skill.group.groupId !== toggledGroupId);
            }
            return newState;
        case addSkillsTypes.UPDATE_RESOURCE_SKILLS:
            const currentSkills = state.resource.skills;
            const changedSkill = action.payload.skill;
            const resourceHasSkill = currentSkills.some(skill => skill.skillId === changedSkill.skillId);
            const newSkills = resourceHasSkill ? [...currentSkills].filter(skill => skill.skillId !== changedSkill.skillId) : [...currentSkills, changedSkill];
            const newSkillsResource = new Resource({ ...state.resource, skills: newSkills });
            newState.resource = newSkillsResource;
            return newState;
        case addSkillsTypes.FETCH_GRADES:
            newState.listOfGrades = action.payload.listOfGrades;
            return newState;
        case addSkillsTypes.FETCH_LOCATIONS:
            newState.listOfLocations = action.payload.listOfLocations;
            return newState;
        case addSkillsTypes.FETCH_COMPETENCY_TAGGINGS:
            newState.listOfCompetencyTaggings = action.payload.listOfCompetencyTaggings;
            return newState;
        case addSkillsTypes.ADD_RESUMES:
            const newResumesResource = new Resource({ ...state.resource });
            newResumesResource.resumes = [...state.resource.resumes, ...action.payload.newResumes];
            newState.resource = newResumesResource;
            return newState;
        case addSkillsTypes.REMOVE_RESUME:
            const newRemovedResumeResource = new Resource({ ...state.resource });
            newRemovedResumeResource.resumes = state.resource.resumes.filter(resume => resume.resumeId !== action.payload.resumeId);
            newState.resource = newRemovedResumeResource;
            return newState;
    }
    return state;
}