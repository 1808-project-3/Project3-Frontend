import { IAddSkillsState } from ".";
import { addSkillsTypes } from "../actions/resource-skills/add-skills.types";
import { Project } from "../models/Project";
import { Resource } from "../models/Resource";
import { User } from "../models/User";
import { Grade } from "../models/Grade";
import { CompetencyTag } from "../models/CompetencyTag";
import { Location } from "../models/Location";

const initialState: IAddSkillsState = {
    associateIdInput: '',
    certificationSearch: '',
    dateTbd: false,
    listOfCertifications: [],
    listOfCompetencyTaggings: [],
    listOfGrades: [],
    listOfLocations: [],
    newOrExistingProject: 'none',
    projectIdInput: '',
    resource: new Resource(),
    skillGroupIds: [],
    submitted: false,
    supervisorIdInput: ''
}

export const addSkillsReducer = (state = initialState, action: any) => {
    const newState = { ...state };
    switch (action.type) {
        case addSkillsTypes.UPDATE_RESOURCE:
            const newResource = new Resource({ ...state.resource });
            switch (action.payload.name) {
                case "associateId":
                    newState.associateIdInput = action.payload.value.replace(/[^\d]/, '');
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
                    newState.projectIdInput = action.payload.value.replace(/[^\d]/, '');
                    break;
                case "projectName":
                    const newNameProject = new Project({ ...state.resource.project, name: action.payload.value });
                    newResource.project = newNameProject;
                    newState.resource = newResource;
                    break;
                case "grade":
                    newResource.grade = new Grade(state.listOfGrades.find(grade => grade.gradeId === +action.payload.value));
                    newState.resource = newResource;
                    break;
                case "competencyTagging":
                    newResource.compentencyTagging = new CompetencyTag(state.listOfCompetencyTaggings.find(tag => tag.tagId === +action.payload.value));
                    newState.resource = newResource;
                    break;
                case "supervisorId":
                    newState.supervisorIdInput = action.payload.value.replace(/[^\d]/, '');
                    break;
                case "supervisorName":
                    const newSupervisorNameProject = new Project({ ...state.resource.project, supervisor: new User({ ...state.resource.project.supervisor, firstName: action.payload.value }) });
                    newResource.project = newSupervisorNameProject;
                    newState.resource = newResource;
                    break;
                case "location":
                    const newLocation = new Location(state.listOfLocations.find(location => location.locationId === +action.payload.value));
                    const newLocationProject = new Project({ ...state.resource.project, location: newLocation });
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
        case addSkillsTypes.CANCEL_RESOURCE:
            return { ...initialState, listOfGrades: [...state.listOfGrades], listOfCompetencyTaggings: [...state.listOfCompetencyTaggings], listOfLocations: [...state.listOfLocations] };
        case addSkillsTypes.SUBMIT_RESOURCE:
            return { ...state, submitted: action.payload.submitted };
        case addSkillsTypes.UPDATE_CERTIFICATION_SEARCH:
            return { ...state, certificationSearch: action.payload.certificationSearch };
        case addSkillsTypes.FETCH_CERTIFICATIONS:
            return { ...state, listOfCertifications: action.payload.listOfCertifications };
        case addSkillsTypes.FETCH_ASSOCIATE:
            const newAssociateResource = new Resource({ ...state.resource });
            newAssociateResource.user = action.payload.associate;
            newState.resource = newAssociateResource;
            return newState;
        case addSkillsTypes.FETCH_SUPERVISOR:
            const newSupervisorResource = new Resource({ ...state.resource });
            const newSupervisorProject = new Project({ ...state.resource.project, supervisor: action.payload.supervisor });
            newSupervisorProject.supervisor = action.payload.supervisor;
            newSupervisorResource.project = newSupervisorProject;
            newState.resource = newSupervisorResource;
            return newState;
        case addSkillsTypes.FETCH_PROJECT:
            const newProjectResource = new Resource({ ...state.resource });
            newProjectResource.project = action.payload.project;
            newState.resource = newProjectResource;
            return newState;
        case addSkillsTypes.ADD_CERTIFICATION:
            const newCertificationResource = new Resource({ ...state.resource });
            if (!state.resource.certifications.some(cert => cert.certId === action.payload.certification.certId)) {
                newCertificationResource.certifications = [...state.resource.certifications, action.payload.certification];
            }
            newState.resource = newCertificationResource;
            newState.certificationSearch = '';
            return newState;
        case addSkillsTypes.REMOVE_CERTIFICATION:
            const newRemovedCertificationResource = new Resource({ ...state.resource });
            newRemovedCertificationResource.certifications = state.resource.certifications.filter(cert => cert.certId !== action.payload.certId);
            newState.resource = newRemovedCertificationResource;
            return newState;
        case addSkillsTypes.SHOW_OR_HIDE_PROJECT:
            if (action.payload.newOrExisting === 'none') {
                const clearProjectResource = new Resource({ ...state.resource });
                clearProjectResource.project = new Project();
                clearProjectResource.grade = new Grade();
                clearProjectResource.compentencyTagging = new CompetencyTag();
                newState.supervisorIdInput = '';
                newState.projectIdInput = '';
                newState.dateTbd = false;
                newState.resource = clearProjectResource;
            }
            newState.newOrExistingProject = action.payload.newOrExisting;
            return newState;
    }
    return state;
}