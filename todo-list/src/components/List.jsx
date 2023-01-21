import React, { useState } from 'react';
import { ListActions, ListStyle, EditForm, ListGeneral} from '../styles/List'
import { FaTrashAlt, FaEdit } from "react-icons/fa";
import { AiFillCheckCircle, AiOutlineCheckCircle } from "react-icons/ai"
import Form from './Form';

const List = ({todos, removeTodo, updatedTodo, completeTodo}) => {


    const [edit, setEdit] = useState({

        id: null,
        value: '',
        isCompleted: false

    })

    const submitUpdate = value => {

        updatedTodo(edit.id, value);

        setEdit({

            id:null,
            value: '',
            isCompleted: false

        });
    };

    if(edit.id){
        return(
            <EditForm>
                <h3>Modificando: {edit.value}</h3>
                <Form placeholder={edit.value} textButton="Edit" edit={edit} onSubmit={submitUpdate} editButton={true} />
            </EditForm>
        )

    }

    return todos.map((todo , index) => (
        <div key={index}>
            <ListGeneral>
                <ListStyle>
                         {/* <label className="containerCheckbox" htmlFor="checkbox">
                                <input  type="checkbox" name="checkbox" id="checkbox" />
                            </label> */}
                    <li> 
                        <p onClick={()=> completeTodo(todo.id)}> 
                            {todo.isCompleted ?<AiFillCheckCircle/> : <AiOutlineCheckCircle/> }
                            {todo.text}
                        </p>
                        <ListActions>
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
