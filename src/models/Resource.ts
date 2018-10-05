import { User } from "./User";
import { Project } from "./Project";
import { Resume } from "./Resume";
import { Skill } from "./Skill";
import { Certification } from "./Certification";
import { CompetencyTag } from "./CompetencyTag";
import { Grade } from "./Grade";

export class Resource {
    public resourceId: number
    public user: User
    public project: Project
    public aupCertified: boolean
    public grade: Grade
    public compentencyTagging: CompetencyTag
    public joinDate: Date
    public leaveDate: Date
    public resumes: Resume[]
    public skills: Skill[]
    public certifications: Certification[]

    public constructor(init?: Partial<Resource>) {
        this.user = new User();
        this.project = new Project();
        this.compentencyTagging = new CompetencyTag();
        this.grade = new Grade();
        this.skills = [];
        this.resumes = [];
        this.certifications = [];
        Object.assign(this, init);
    }

}