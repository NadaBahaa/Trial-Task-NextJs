import React from 'react';

interface Task {
  id: number;
  title: string;
  description: string;
  status: string;
}

const TaskDetails = async ({ params }: { params: { id: string } }) => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const response = await fetch(`${baseUrl}/tasks/${params?.id}`);
    
    if (!response.ok) {
        return <p>Task not found.</p>;
    }

    const task: Task = await response.json();

    return (
        <div className="max-w-lg mx-auto bg-white rounded-lg shadow-md border border-gray-200 p-6">
            <h2 className="text-xl font-bold mb-4 text-gray-800">Task Details</h2>
            <div className="mb-2">
                <span className="font-semibold text-gray-600">ID:</span> {task.id}
            </div>
            <div className="mb-2">
                <span className="font-semibold text-gray-600">Title:</span> {task.title}
            </div>
            <div className="mb-2">
                <span className="font-semibold text-gray-600">Description:</span>{' '}
                {task.description}
            </div>
            <div>
                <span className="font-semibold text-gray-600">Status:</span>{' '}
                <span
                className={`px-2 py-1 rounded text-sm ${
                    task.status === 'Completed'
                    ? 'bg-green-100 text-green-600'
                    : 'bg-yellow-100 text-yellow-600'
                }`}
                >
                {task.status}
                </span>
            </div>
    </div>
    );
};

export default TaskDetails;
