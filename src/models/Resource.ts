export class Resource{
    public resourceId:number
    public userId:number
    public projectId: number
    public aupCertified: boolean
    public grade: string
    public compentencyTagging: string
    public joinDate: Date
    public leaveDate: Date
    public resumeId: number

    public constructor(init?: Partial<Resource>){
        Object.assign(this, init);
    }

}