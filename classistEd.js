class Counter {
    constructor() {
    this.num = 0 //declares this to have a property of num which has a value of 0
    }

    increment(amount = 1){
        this.num = this.num + amount
    }

    decrement(amount = 1){
        this.num = this.num - amount
    }
}


class CounterMap {
    constructor() {
        this.counters = {}
    }

    set(name, counter) {
        if (this.counters[name] == null) { //plz watch video on =/==/==== later
            this.counters[name] = counter 
        }
    }

    get(name) {
        return this.counters[name]
    }


}
//TASK
//implement Counter and set of counter, should have constructor with 2 methods within, increment and decrement, each should have one parameter called amount. The amount should default to one. 
//Counter needs to have a property of num
//implement a counter map/list. This should hold a dictionary of counters. The counter list class should have a method called "set", taking two parameters "name" and "counter"

//Feedback
//generally good to get used to mapping things out spatially when coding, especially when using classes in JS

//Next step
//use the above to create a todo list application
//need to include a class for items and for the lists that they go in. 
//what properties will a todo have? 

const status = {
    INCOMPLETE: 'incomplete',
    COMPLETE: 'complete',
    DELETE: 'delete',
}

class Todo {
    constructor() {
        this.text = text 
        this.dueDate = null; //instantiate the todo with a due date of null
    }


    disposeTodo(newStatus) {
        switch (newStatus) {
            case "complete":
                this.status = newStatus
                break;
            case "delety": //would this not be delete?
                this.status = newStatus //why would it still be newstatus?
                break;
            case "rescheduled": //followed by - this.status = postponed?
                break;
            default: 
                console.log("Isaac Austizimos")
                break;
        }

        // can also write as -->   disposeTodo(newStatus) {
        //this.status = newStatus
    }

    get dueTillDue() {
        const currentDate = new Date() //gives exact date and time
        if (this.dueDate != null) {
            return this.dueDate - currentDate
        } else {
            return null
        }
    }

    get formattedDaysTillDue  //get makes it a computed property (what is this?)



class TodoList {
    constructor() {
//what am I intending to do with this function? 
    }
}
