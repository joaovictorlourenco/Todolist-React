import React from 'react';
import { ListActions, ListStyle } from '../styles/List'
import { FaTrashAlt } from "react-icons/fa";

const List = (props) => {
    return (
        <div>
            <ul className="todo-list">
                    <ListStyle>
                        <li>
                            <ListActions  primary >
                                <label htmlFor='feito' >
                                    <input className='checkmark' type="checkbox" name="feito" />
                                </label>
                            </ListActions>
                            
                            <p>Teste</p>
                            <ListActions >
                                <div className='icon'>
                                 
                                    <FaTrashAlt/>
                                </div>
                            </ListActions>
                        </li>
                    </ListStyle>
            </ul>
        </div>
    );
}

export default List;
