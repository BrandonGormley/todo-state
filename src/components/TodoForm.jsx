import React, { useState } from 'react';

const TodoForm = ({ handleAddTask }) => {
  const [task, setTask] = useState('');
  const [dueDate, setDueDate] = useState('');
  const [alertMessage, setAlertMessage] = useState(false);
  const [alertMessageText, setAlertMessageText] = useState('');

  const handleTaskInput = e => {
    setTask(e.target.value);
  };

  const handleDueDateInput = e => {
    setDueDate(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newTask = { id: Math.random() * 10000, task, dueDate };

    if (task.length && dueDate.length) {
      handleAddTask(newTask);
      setAlertMessage(true);
      setAlertMessageText('Item Added!');
      setTask('');
      setDueDate('');
      return;
    }

    if (!task.length || !dueDate.length) {
      setAlertMessage(true);
      setAlertMessageText('Please fill out form');
      return;
    }
  };

  return (
    <form className='' onSubmit={handleSubmit}>
      {alertMessage && (
        <p
          className={
            alertMessageText === 'Item Added!'
              ? 'w-full bg-green-500 text-white text-center rounded-md my-2 py-1'
              : 'w-full bg-red-500 text-white text-center rounded-md my-2 py-1'
          }
        >
          {alertMessageText}
        </p>
      )}
      <div className='flex flex-col w-full'>
        <label className='text-sm text-slate-700' htmlFor='task'>
          Task:
        </label>
        <input
          placeholder='Take out trash'
          className='rounded-md my-2 text-lg pl-4 text-slate-700 outline-none focus:border-2 focus:border-slate-400'
          onChange={handleTaskInput}
          name='task'
          id='task'
          type='text'
          value={task}
        />
      </div>
      <div className='flex flex-col w-full'>
        <label className='text-sm text-slate-700' htmlFor='duedate'>
          Due:
        </label>
        <input
          placeholder='Saturday'
          className='rounded-md my-2 text-lg pl-4 text-slate-700 outline-none focus:border-2 focus:border-slate-400'
          onChange={handleDueDateInput}
          name='duedate'
          id='duedate'
          type='text'
          value={dueDate}
        />
      </div>
      <button
        className='w-full bg-slate-700 rounded-lg text-slate-100 py-1 my-4 hover:bg-slate-600 transition-all'
        type='submit'
      >
        Add New Task
      </button>
    </form>
  );
};

export default TodoForm;
