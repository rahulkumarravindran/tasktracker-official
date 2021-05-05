const TaskInput = () => {
    return (
        <>
        <h4>Add new Task</h4>
        <form>
            <input type="Text" id='inputTask' name='inputTask' placeholder="Enter the new task" onChange=''></input>
        <input type="Text" id='TaskDescription' name='TaskDescription' placeholder='Enter the description'></input>
        <input type= "date" id='TaskDeadline' name='TaskDeadline' placeholder='Deadline'></input>
        <input type="submit"></input>
        </form>
        
        </>
    );
}

export default TaskInput;