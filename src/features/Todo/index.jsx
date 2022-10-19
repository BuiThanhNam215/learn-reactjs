import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList';
import { useState } from 'react';

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      title: 'Eat',
      status: 'new',
    },
    {
      id: 2,
      title: 'Code',
      status: 'completed',
    },
    {
      id: 3,
      title: 'Sleep',
      status: 'new',
    },
  ];
  const [todoList, setTodoList] = useState(initTodoList);
  const [filterStatus, setfilteredStatus] = useState('all');
  const handleClickTodo = (todo, idx) => {
    const newTodoList = [...todoList];

    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new ',
    };
    setTodoList(newTodoList);
  };
  const handleShowAllClick = () => {
    setfilteredStatus('all');
  };
  const handleShowCompletedClick = () => {
    setfilteredStatus('completed');
  };
  const handleShowNewClick = () => {
    setfilteredStatus('new');
  };
  const renderedTodoList = todoList.filter((todo) => filterStatus === 'all' || filterStatus === todo.status);
  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={renderedTodoList} onTodoClick={handleClickTodo} />
      <div>
        <button onClick={handleShowAllClick}>Show all</button>
        <button onClick={handleShowCompletedClick}>Show Completed</button>
        <button onClick={handleShowNewClick}>Show New</button>
      </div>
    </div>
  );
}

export default TodoFeature;
