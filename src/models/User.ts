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

    public isCompetencyLead() {
        return this.roleId ? this.roleId === 1 : false;
    }

    public isTalentEnablementLead() {
        return this.roleId ? this.roleId === 2 : false;
    }

    public isSupervisor() {
        return this.roleId ? this.roleId === 3 : false;
    }

    public isAssociate() {
        return this.roleId ? this.roleId === 4 : false;
    }

    public getFullName() {
        return `${this.firstName || ''} ${this.lastName || ''}`;
    }
}