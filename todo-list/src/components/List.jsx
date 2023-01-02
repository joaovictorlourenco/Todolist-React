import React, { useState } from 'react';
import { ListActions, ListStyle } from '../styles/List'
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import Form from './Form';

const List = ({todos, completeTodo, removeTodo, updatedTodo}) => {

    const [edit, setEdit] = useState({

        id: null,
        value: ''

    })

    const submitUpdate = value => {

        updatedTodo(edit.id, value);

        setEdit({
            id:null,
            value: ''
        });
    };

    if(edit.id){

        return <Form edit={edit} onSubmit={submitUpdate}/>

    }

    return todos.map((todo , index) => (
        <div key={index}>
            <ul className="todo-list">
                    <ListStyle>
                        <li>
                            <p>{todo.text}</p>
                            <ListActions >
                                <div className='icon'>
                                    <FaEdit onClick={() => setEdit({id:todo.id, value: todo.text})}/>
                                    <FaTrashAlt onClick={() => removeTodo(todo.id)}/>
                                </div>
                            </ListActions>
                        </li>
                    </ListStyle>
            </ul>
        </div>
    ));
}

export default List;
