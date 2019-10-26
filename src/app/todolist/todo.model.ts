export class Todo {

    public id : number
    public label : string



    constructor( id: number, label: string){
        this.id = id;
        this.label= label;
    }

  
}
export type Todos = Array<Todo>;