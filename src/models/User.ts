export class User {
    public uId: number
    public assocId: number
    public firstName: string
    public lastName: string
    public emailAddress: string
    public roleId: number

    public constructor(init?: Partial<User>) {
        Object.assign(this, init);
    }
}