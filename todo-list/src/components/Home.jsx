import React, { useState } from "react"
import { Title, ListStyle, General } from '../styles/Form'

import List from "./List";
import Form from "./Form";

export default function Home(){

  const [todos, setTodos] = useState([]);
  
  const addTodo = todo => {

    if(!todo.text || /^\s*$/.test(todo.text)){
      return
    }

    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(newTodos);

  }

  const updatedTodo = (todoId, newValue) => {

    if(!newValue.text || /^\s*$/.test(newValue.text)){
      return
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)))

  }

  const removeTodo = id => {

    const removeArr = [...todos].filter(todo=> todo.id !== id)

    setTodos(removeArr);

  }

  const completeTodo = id => {

    let updatedTodos = todos.map(todo => {
        if(todo.id === id){

            todo.isComplete = !todo.isComplete;

        }
        return todo;
    });
    setTodos(updatedTodos);
  }

    return(
        <General>
            <h2>My Tasks</h2>
            <Title>
                <Form onSubmit={addTodo}/>
            </Title>

            <ListStyle>
            <List todos={todos} completeTodo={completeTodo} removeTodo={removeTodo} updatedTodo={updatedTodo}/>
            </ListStyle>
        </General>
    );
}