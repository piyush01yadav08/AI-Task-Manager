
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home(){
  const [tasks,setTasks] = useState([]);
  const [title,setTitle] = useState('');

  const fetchTasks = async ()=>{
    const res = await axios.get('http://localhost:5000/api/tasks', {
      headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}
    });
    setTasks(res.data);
  }

  const addTask = async ()=>{
    await axios.post('http://localhost:5000/api/tasks',
      {title},
      {headers:{Authorization:`Bearer ${localStorage.getItem('token')}`}}
    );
    fetchTasks();
  }

  useEffect(()=>{ fetchTasks(); },[]);

  return (
    <div style={{padding:20}}>
      <h1>NeuroTask AI</h1>
      <input value={title} onChange={e=>setTitle(e.target.value)} />
      <button onClick={addTask}>Add</button>
      {tasks.map(t=> <div key={t._id}>{t.title}</div>)}
    </div>
  )
}
