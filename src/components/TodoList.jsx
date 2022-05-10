import React from 'react';
import Todo from './Todo';

const TodoList = ({ taskList, handleRemoveTask }) => {
  return (
    <section className='flex flex-col w-full'>
      <ul>
        {taskList.map(task => {
          return <Todo handleRemoveTask={handleRemoveTask} {...task} />;
        })}
      </ul>
    </section>
  );
};

export default TodoList;
