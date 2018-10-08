export class Certification {
    public certId: number
    public name: string

    public constructor(init?: Partial<Certification>) {
        Object.assign(this, init);
    }
}