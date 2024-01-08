export class Skills {

    markdownLenguages: string[] = [];
    programmingLenguage: string[] = [];
    frameworks: string[] = [];
    librarys: string[] = [];
    dataBases: string[] = [];
    softskills: string[] = [];
    others: string[] = [];

    constructor(init: Partial<Skills>) {

        Object.assign(this, init);

    }

}