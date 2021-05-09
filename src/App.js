import './App.css';
import Tasks from './components/Tasks'
import React, {useState} from 'react';
import TaskInput from './components/TaskInput';


function App() {

  const [taskList,settaskList]= useState([{
    id:'1',taskName: 'Learn Machine Learning concepts',description:'', deadline: 'August 2021'}
    ,{id:'2', taskName: 'Learn Web development',description:'' , deadline : 'May 15th 2021'
  }])

  const addTask = (task) => {
    const id = taskList.length + 1;
    const newTask = {...task, id: id}
    settaskList([...taskList, newTask])
    console.log(taskList)
  }

  const deleteTask = (id) => {
    settaskList(taskList.filter((task)=> task.id !==id))
    console.log('delete')
  }

  const [flagAddTask,setFlagAddTask]=useState(false);

  const toggleFlag = () => {
    setFlagAddTask(!flagAddTask)
  }
  
  return (
    <div className="body">
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap" rel="stylesheet">
        </link>
      <div className="Main">
        <div className="Top">
          <h2>Tasks to Do</h2>
          <button className={!flagAddTask ? "" : "redButton"} onClick={()=>toggleFlag()}>{!flagAddTask ?'New Task'  : 'Close'}</button>
        </div>
        <div className="Middle">
          {taskList.length > 0 ? <Tasks tasks={taskList} deleteTask={deleteTask}/> : "No Tasks added yet"}
        </div> 
        {flagAddTask ? <><div className="MiddleLine"></div>
        <div className="TaskInputForm">
          <TaskInput addTask={addTask}/> 
        </div></> : ''}
      </div>
    </div>
  );
}

export default App;
