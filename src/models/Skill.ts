export class Skill{
    public skillId:number
    public name:string
    public groupId: number

    public constructor(init?: Partial<Skill>){
        Object.assign(this, init);
    }
}