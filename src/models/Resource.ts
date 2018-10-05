import { User } from "./User";
import { Project } from "./Project";
import { Resume } from "./Resume";
import { Skill } from "./Skill";
import { Certification } from "./Certification";

export class Resource {
    public resourceId: number
    public user: User
    public project: Project
    public aupCertified: boolean
    public grade: string
    public compentencyTagging: string
    public joinDate: Date
    public leaveDate: Date
    public resumes: Resume[]
    public skills: Skill[]
    public certifications: Certification[]

    public constructor(init?: Partial<Resource>) {
        Object.assign(this, init);
    }

}