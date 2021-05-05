import './App.css';
import Tasks from './components/Tasks'
import React, {useState} from 'react';
import TaskInput from './components/TaskInput';


function App() {

  const taskList= [{
    taskName: 'Learn Machine Learning concepts', deadline: 'August 2021',description:''}
    ,{taskName: 'Learn Web development' , deadline : 'May 15th 2021',description:''
  }]
  const [flagAddTask,setFlagAddTask]=useState(true);
  return (
    <div className="body">
      <link rel="preconnect" href="https://fonts.gstatic.com"></link>
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@700&display=swap" rel="stylesheet">
        </link>
      <div className="Main">
        <div className="Top">
          <h2>Tasks to Do</h2>
          <button>New Task</button>
        </div>
        <div className="Middle">
          <Tasks tasks={taskList}/>
        </div> 
        <div className="MiddleLine"></div>
        <div className="TaskInputForm">
          <TaskInput />
        </div>
      </div>
    </div>
  );
}

export default App;
