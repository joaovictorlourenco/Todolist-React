import React, { useState } from 'react';
import { ListActions, ListStyle } from '../styles/List'
import { FaTrashAlt, FaEdit } from "react-icons/fa";

const List = ({todos, completeTodo, removeTodo}) => {

    const [edit, setEdit] = useState({

        id: null,
        value: ''

    })

    return todos.map((todo , index) => (
        <div key={index}>
            <ul className="todo-list">
                    <ListStyle  className={todo.isComplete ? 'complete' : 'no-complete'} >
                        <li>
                            <ListActions primary >
                                <label htmlFor='feito' >
                                    <input
                                      className='checkmark'
                                      type="checkbox" 
                                      name="feito"
                                    />
                                </label>
                            </ListActions>
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
