export class Project {
    public projectName: string;
    public id: number;
    public startDate: string;
    public endDate: string;
    public projectDetails: string;

    constructor(
        projectName: string,
        id: number,
        startDate: string,
        endDate: string,
        projectDetails: string
    ) {
       this.projectName = projectName;
       this.id = id;
       this.startDate = startDate;
       this.endDate = endDate;
       this.projectDetails = projectDetails;
    }
}