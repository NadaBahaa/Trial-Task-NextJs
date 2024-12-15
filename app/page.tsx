'use client'
import { useEffect, useState } from 'react';
import dynamic from 'next/dynamic'

const Task = () => {
	const [tasks, setTasks] = useState([]);
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
	const [width, setWidth] = useState(0);
  
	useEffect(() => {
	  const updateWidth = () => {
		setWidth(window.innerWidth); 
	  };
  
	  window.addEventListener('resize', updateWidth);
	  updateWidth(); 
  
	  const fetchTasks = async () => {
		try {
		  const response = await fetch(`${baseUrl}/tasks`);
		  const data = await response.json();
		  setTasks(data);
		} catch (error) {
		  console.error('Error fetching tasks:', error);
		}
	  };
  
	  fetchTasks();
  
	  return () => {
		window.removeEventListener('resize', updateWidth); 
	  };
	}, [baseUrl]);
	const TaskList = dynamic(() => import('./tasks/page'), { ssr: false })


  return (
    <div>
      <TaskList tasks={tasks}/>
    </div>
  );
};

export default Task;
