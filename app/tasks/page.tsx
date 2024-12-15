'use client'
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye } from '@fortawesome/free-solid-svg-icons';

const TaskList = ({tasks}) => {
    

  return (
    <div className="container m-10 pl-5">
        <div className="flex justify-center items-center h-screen">
            <h1 className="text-2xl font-bold">Task List</h1>
        </div>
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            ID
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Description
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Status
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Action
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {tasks.map((task: { id: number; title: string; description: string; status: string } ) => (
                        <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600" key={task.id}>
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {task?.id}
                            </th>
                            <td className="px-6 py-4">
                            {task?.title}
                            </td>
                            <td className="px-6 py-4">
                            {task?.description}
                            </td>
                            <td className={`px-6 py-3 ${task.status == 'Completed'? 'bg-green-100 text-green-600 rounded-md' : 'bg-yellow-100 text-yellow-600'}`}>
                            {task?.status}
                            </td>
                            <td className="px-6 py-4 text-right">
                                <a href={`/tasks/${task.id}`} className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                                    <FontAwesomeIcon icon={faEye} className="text-blue-500 hover:text-blue-700" />
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        
    </div>
  );
};

export default TaskList;
