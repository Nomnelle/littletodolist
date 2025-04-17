import './App.css'
import {tasksCollection} from "./data.ts";
import type {Task} from "./types";
import {useState} from "react";

function App() {
    console.log("hello world");

    const [tasks, setTasks] = useState<Task[]>(tasksCollection);

    function addNewTask(content:string) {
        const newTask:Task = {
            id:tasks.length+1,
            content:content,
            status:"todo",
            createdAt:new Date()};
        setTasks([...tasks, newTask]);
    }

    function whenAddButtonIsClicked() {
        const newContent = prompt("Entrez la nouvelle tâche souhaitée.");
        if(newContent !== undefined && newContent !== null && newContent !== ""){
            addNewTask(newContent);
        }else{
            alert("Veuillez rentrer un texte valide !")
        }
    }

    function whenValidateButtonClicked(id:number) {
        const index = id-1;
        const tasksCopy = [...tasks]
        tasksCopy[index].status = "done";
        tasksCopy[index].completedAt = new Date();
        setTasks([...tasksCopy]);
    }

    function renderTaskList(task:Task){
        if(task.status=="done"){
            return <li
                key={crypto.randomUUID()}
                value={task.content}>
                <s>{task.content}</s> 🆗
            </li>
        }if(task.status=="doing"){
            return <li
                key={crypto.randomUUID()}
                value={task.content}>
                {task.content} ⏳ <button onClick={() => whenValidateButtonClicked(task.id)}>Valider</button>
            </li>
        }else{
            return <li
                key={crypto.randomUUID()}
                value={task.content}>
                {task.content} 🆕 <button onClick={() => whenValidateButtonClicked(task.id)}>Valider</button>
            </li>
        }
    }

    return (
        <>
            <h1>Todo list</h1>
            <p>Nombre de tâches : {tasks.length}</p>
            <ul>
                {tasks.map((task) => renderTaskList(task))}
            </ul>
            <button onClick={whenAddButtonIsClicked}>Nouvelle tâche</button>
        </>
    )
}

export default App;
