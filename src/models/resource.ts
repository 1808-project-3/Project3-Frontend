export class Resource {
    public firstName: string;
    public lastName: string;
    public id: number;
    public certification: string;
    public projectDetails: string;
    public grade: string;

    constructor(
        firstName: string,
        lastName: string,
        id: number,
        certification: string,
        projectDetails: string,
        grade: string
    ) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.certification = certification;
        this.projectDetails = projectDetails;
        this.grade = grade;
    }
}