export class Resume {
    public resumeId: number
    public fileName: string
    public url: string

    public constructor(init?: Partial<Resume>) {
        Object.assign(this, init);
    }

}