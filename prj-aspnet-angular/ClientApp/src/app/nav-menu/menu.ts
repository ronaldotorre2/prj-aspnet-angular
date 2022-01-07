export class Menu {
    id: number;
    name: string;
    url: string;
    active: boolean;
    
    constructor(id: number, name: string, url: string, active: boolean) {
        this.id = id;
        this.name = name;
        this.url = url;
        this.active = active;
    }
}