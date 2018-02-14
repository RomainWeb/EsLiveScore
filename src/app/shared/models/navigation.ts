export class Navigation{
    modules: Module[];   
}

export class Module{
    uid: number;
    title: string;
    description: string;
    isActive: boolean;
    chapters: Chapter[];
}

export class Chapter{
    uid: number;
    title: string;
    description: string;
    isActive: boolean;
    pages: Page[];
}

export class Page{
    uid: number;
    title: string;
    description: string;
    createdDate: Date;
    createrUser: string;
    content: string;
}