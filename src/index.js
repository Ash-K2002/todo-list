import css from './style.css';
import { addToStorage, retrieveFromStorage,deleteProjectStorage } from './applogic';
import { Todo,Projects } from './classes';

const project= new Projects('third project',[]);

const todo1= new Todo('todo1');
todo1.Description='todo1 of third project';
todo1.DueDate='03-08-2025';
todo1.Checked=true;
todo1.Priority=50;
project.addTodo(todo1);
console.log(project);

//addToStorage(project);
console.log(retrieveFromStorage());
deleteProjectStorage(project);