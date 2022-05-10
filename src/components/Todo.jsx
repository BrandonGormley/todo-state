import React from 'react';

const Todo = ({ task, dueDate, handleRemoveTask, id }) => {
  return (
    <div className='flex flex-row w-full bg-slate-200 border-2 border-slate-300 justify-between rounded-lg p-2 my-2'>
      <div className='flex flex-col'>
        <p className='text-sm'>{task}</p>
        <p className='text-xs'>{dueDate}</p>
      </div>
      <p
        className=' ml-auto text-red-400 text-sm hover:cursor-pointer hover:scale-110 transition-all'
        onClick={() => handleRemoveTask(id)}
      >
        X
      </p>
    </div>
  );
};

export default Todo;
