import React, { useState } from 'react';
import { ListActions, ListStyle, EditForm, ListGeneral} from '../styles/List'
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import Form from './Form';

const List = ({todos, removeTodo, updatedTodo, completeTodo}) => {

    

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
        return(
            <EditForm>
                <h3>Modificando: {edit.value}</h3>
                <Form edit={edit} onSubmit={submitUpdate} editButton={true} />
            </EditForm>
        )

    }

    return todos.map((todo , index) => (
        <div key={index}>
            <ListGeneral>
                <ListStyle >
                    <li>
                        <p>{todo.text}</p>
                        <ListActions>
                            {/* colocar um icon de completed usando a função todo.id https://www.youtube.com/watch?v=36a__1Vn6B8 */}
                            <div className='icon'>
                                <FaEdit onClick={() => setEdit({id:todo.id, value: todo.text})}/>
                                <FaTrashAlt onClick={() => removeTodo(todo.id)}/>
                            </div>
                        </ListActions>
                    </li>
                </ListStyle>
            </ListGeneral>
        </div>
    ));
}

export default List;
