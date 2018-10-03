export class Group{
    public groupId:number
    public name: string

    public constructor(init?: Partial<Group>){
        Object.assign(this, init);
    }
}   