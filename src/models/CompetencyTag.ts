export class CompetencyTag {
    public tagId: number
    public name: string

    public constructor(init?: Partial<CompetencyTag>) {
        Object.assign(this, init);
    }
}   