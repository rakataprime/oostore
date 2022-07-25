
import { writable } from 'svelte/store';

class OoState {

    myState:string = "initalized state"

    public subscribe: Function;  //required for class store 
    public set: Function;  //required for class store 
    public update: Function;  //required for class store 

    constructor(
        public alsoMyState: string = "state",
    	
    ) {

        let {subscribe, set, update} = writable(this); //required for class store 
        this.subscribe = subscribe;  //required for class store 
        this.set = set; //required for class store 
        this.update = update;  //required for class store 
    }

    doSomething(newState:string) {
        this.myState = newState
        this.update(()=>this)  //required for class method to update mutated state 
    }

}

export const oostate =  new OoState();