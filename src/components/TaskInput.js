import { useState } from "react";

const TaskInput = (props) => {

    //local states for fetching data from the form
    const [taskName, setTaskName]= useState('')
    const [taskDescription,setTaskDescription]= useState('')
    const [deadline, setDeadline] = useState('')

    const submitTask = (e) => {
        // To prevent the default action of submitting to a page
        e.preventDefault()

        if(!taskName){
            alert('Please add a Task before submitting')
            return
        }

        props.addTask({taskName,setTaskDescription,deadline})

        setTaskDescription('')
        setTaskName('')
        setDeadline('')
    }
    return (
        <>
        <h4>Add new Task</h4>
        <form onSubmit={submitTask}>
            <input type="Text" id='inputTask' name='inputTask' placeholder="Enter the new task" value={taskName} onChange={(e)=>setTaskName(e.target.value)}></input>
            <textarea className= 'InputDescription' id='TaskDescription' placeholder='Enter the description' value={taskDescription} onChange={(e) => setTaskDescription(e.target.value)}></textarea>
            <input type= "date" id='TaskDeadline' name='TaskDeadline' placeholder='Deadline' value={deadline} onChange={(e)=>setDeadline(e.target.value)}></input>
            <input type="submit" value="Submit"></input>
        </form>
        
        </>
    );
}

export default TaskInput;