export class Location {
    public locationId: number
    public name: string

    public constructor(init?: Partial<Location>) {
        Object.assign(this, init);
    }
}   