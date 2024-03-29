import React, { useState, useEffect } from 'react';

const TodoComponent = () => {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setTodo(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>Todo Item</h1>
      {todo ? (
        <div>
          <h2>Title: {todo.title}</h2>
          <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
          <p>User ID: {todo.userId}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default TodoComponent;