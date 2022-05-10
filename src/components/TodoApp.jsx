import React, { useState } from 'react';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const TodoApp = () => {
  const [taskList, setTaskList] = useState([]);

  const handleAddTask = task => {
    setTaskList(prevTaskList => {
      return [task, ...prevTaskList];
    });
  };

  const handleRemoveTask = idOfTask => {
    setTaskList(
      taskList.filter(task => {
        return task.id !== idOfTask;
      })
    );
  };

  return (
    <section className='bg-slate-100 mx-auto flex flex-col w-96 shadow-lg shadow-slate-200 my-8 p-8 rounded-lg'>
      <TodoForm handleAddTask={handleAddTask} />
      <TodoList handleRemoveTask={handleRemoveTask} taskList={taskList} />
    </section>
  );
};

export default TodoApp;
