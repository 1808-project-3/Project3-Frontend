import { User } from "./User";

export class Project {
    public pId: number
    public name: string
    public startDate: Date
    public endDate: Date
    public supervisor: User
    public location: string
    public customerName: string

    public constructor(init?: Partial<Project>) {
        Object.assign(this, init);
    }

}