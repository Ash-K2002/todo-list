import {Todo, Projects} from './classes';

// retrieves all projects from localstorage
function retrieveFromStorage()
{
    const projectList=  JSON.parse(JSON.stringify(localStorage));
    const arr=[];
    for(let property in projectList)
    {
        const project=new Projects(property,JSON.parse(projectList[property]));
        arr.push(project);
    }
    return arr;
}


// adds a project to localstorage, updates if already present
function addToStorage(project)
{
const name= project.name;
const arr=[];

for(let item of project.list)
{
    const todo={
        "title":item.title,
        "description":item.description,
        "duedate":item.duedate,
        "priority":item.priority,
        "checked":item.checked
    }
    arr.push(todo);
}

localStorage.setItem(name,JSON.stringify(arr));

}

// deletes a project from local storage
function deleteProjectStorage(project)
{
localStorage.removeItem(project.name);
}


export {retrieveFromStorage,addToStorage,deleteProjectStorage};