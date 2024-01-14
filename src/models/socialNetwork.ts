export class SocialNetwork<T> {

    socialNetwork: string = "";
    link: string = "";
    logo!: T;
    logoSize: number = 50;
    logoAlt: string = "";

    constructor(init: Partial<SocialNetwork<T>>) {

        Object.assign(this, init)
        
    }

}