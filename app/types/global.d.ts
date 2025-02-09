// types/global.d.ts
export {};

declare global {
    
    type Project = {
        id: number;
        name: string;
        description: string;
        image: string;
        link: string;
        icones: Icon[];
    }

    type Icon = {
        name: string;
        image: string;
    }
}
