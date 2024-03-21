import { retrieveFromStorage,addToStorage,deleteProjectStorage } from "./applogic";
import { Projects, Todo } from "./classes";

function addContent(name, content){
    const element = document.createElement(name);
    element.textContent=content;
    return element; 
}

function createTodoCard(todo,project)
{
const card=document.createElement('div');
const cardHead= addContent('h2',todo.title);
const description= addContent('p',todo.description);
const priority=addContent('div',"priority: "+todo.priority);
const delTodoBtn=addContent('button','delete');
delTodoBtn.addEventListener('click',()=>{
    project.remTodo(todo);
    addToStorage(project);
    showProject(project);
});
card.appendChild(cardHead);
card.appendChild(description);
card.appendChild(priority);
card.appendChild(delTodoBtn);
return card;
}

function showTodos(project,target=Node)
{
    const list=project.list;
    for(let item of list)
    {
        target.appendChild(createTodoCard(item,project));

    }
}

function showProject(project)
{
    const contentArea= document.querySelector('#content');
    contentArea.textContent='';
    const proHead= addContent('div','');
    proHead.appendChild(addContent('h1',project.name));
    const addtodoBtn=addContent('button','Add todo');
    addtodoBtn.addEventListener('click',()=>{
        const todo=new Todo('todo dummy');
        todo.description='dummy todo';
        todo.priority=50;
        project.addTodo(todo);
        addToStorage(project);
        showProject(project);
    });
    proHead.appendChild(addtodoBtn);
    contentArea.appendChild(proHead);
    showTodos(project,contentArea);
}

function populateProjects(projects=[])
{
const proDispArea= document.querySelector('#project-list');
proDispArea.textContent='';

for(let item of projects)
{

const li= addContent('li','');
li.appendChild(addContent('span',item.name));
const btns=addContent('span','');
btns.setAttribute('class','project-list-buttons');
li.appendChild(btns);

const showProjectBtn= addContent('button','show');
const delProjectBtn= addContent('button','delete');

delProjectBtn.addEventListener('click',()=>{
deleteProjectStorage(item);
populateProjects(retrieveFromStorage());
document.querySelector('#content').textContent='';
});

showProjectBtn.addEventListener('click',()=>{
showProject(item);
});

btns.appendChild(showProjectBtn);
btns.appendChild(delProjectBtn);

proDispArea.appendChild(li);
}
}

const addbtn= document.querySelector('#add-project');

addbtn.addEventListener('click',()=>{
    console.log('clicked');
addbtn.style.visibility='hidden';
const takeInput=document.querySelector('#take-input-project');

const add=addContent('button','Add');
const cancel=addContent('button','Cancel');
const inputBox= document.createElement('input');
inputBox.setAttribute('type','text');

function showAddButton()
{
addbtn.style.visibility='visible';
takeInput.textContent='';
}

add.addEventListener('click',()=>{
const str= inputBox.value;
if(str!='')
{
const project=new Projects(str);
project.todoList=[];
addToStorage(project);
}
else
console.log('empty project name');
populateProjects(retrieveFromStorage());
showAddButton();
});
cancel.addEventListener('click',()=>{
showAddButton();
});

takeInput.appendChild(inputBox);
takeInput.appendChild(add);
takeInput.appendChild(cancel);
});

export {populateProjects};