const Tasks = (props) => {
    return (
        <>
        <ul>
            {props.tasks.map(task => {return <div className="DisplayTasks"><div className="TaskDetails"><li id={task.id}><h4>{task.taskName}</h4><h5>{task.deadline}</h5></li></div>
            <div className="DeleteButton">
                <button onClick={()=>props.deleteTask(task.id)}>Delete</button>
                </div>
                </div>
            })}
        </ul>
        </>
    );

}

export default Tasks;