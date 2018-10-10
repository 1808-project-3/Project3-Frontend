export class Grade {
    public gradeId: number
    public name: string

    public constructor(init?: Partial<Grade>) {
        Object.assign(this, init);
    }
}   