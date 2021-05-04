const Tasks = (props) => {
    return (
        <>
        <ul>
            {props.tasks.map(task => {return <li><h4>{task.taskName}</h4><h5>{task.deadline}</h5></li>})}
        </ul>
        </>
    );

}

export default Tasks;