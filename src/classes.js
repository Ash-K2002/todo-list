class Todo{
constructor(title){
this.title= title;
}

    /**
     * @param {String} title
     */
set Title(title){
    this.title=title;
}


    /**
     * @param {String} description
     */
set Description(description){
    this.description= description;
}

    /**
     * @param {Date} duedate
     */
set DueDate(duedate)
{
    this.duedate=duedate;
}


    /**
     * @param {Number} priority
     */
set Priority(priority){
this.priority=priority;
}

    /**
     * @param {boolean} checked
     */
set Checked(checked){
this.checked=checked;
}

}


class Projects{
    constructor(name='',list=[])
    {
        this.name=name;
        this.list=list;
    }

    /**
     * @param {any[]} list
     */
    set todoList(list)
    {
        this.list=list;
    }

    /**
     * @param {string} name
     */
    set Name(name)
    {
        this.name=name;
    }

    addTodo(todo)
    {
        this.list.push(todo);
    }

    remTodo(todo)
    {
        this.list.pop(todo);
    }
}

export{Todo,Projects};
