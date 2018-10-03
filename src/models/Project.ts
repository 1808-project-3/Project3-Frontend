export class Project{
    public pId:number
    public name:string
    public startDate:Date
    public endDate:Date
    public supervisorId: number
    public location:string

    public constructor(init?: Partial<Project>){
        Object.assign(this, init);
    }

}