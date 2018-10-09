import { Group } from "./Group";

export class Skill {
    public skillId: number
    public name: string
    public group: Group

    public constructor(init?: Partial<Skill>) {
        this.group = new Group();
        Object.assign(this, init);
    }
}