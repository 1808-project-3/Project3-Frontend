import { User } from "./User";
import { Location } from "./Location";

export class Project {
    public pId: number
    public name: string
    public startDate: Date
    public endDate: Date
    public supervisor: User
    public location: Location
    public customerName: string

    public constructor(init?: Partial<Project>) {
        this.supervisor = new User();
        this.location = new Location();
        Object.assign(this, init);
    }

}