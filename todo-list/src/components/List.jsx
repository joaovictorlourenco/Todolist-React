import React from 'react';
import { ListActions, ListStyle } from '../styles/List'
import { MdDelete, MdEdit } from "react-icons/md";

const List = (props) => {
    return (
        <div>
            <ul className="todo-list">
                {props.List.map((item, index) => ( 
                    <ListStyle>
                        <li key={index}>
                            <p>{item}</p>
                            <ListActions>
                                <input type="checkbox" name="feito" id="feito" />
                            <MdDelete/>
                            <MdEdit/>
                            </ListActions>
                        </li>
                    </ListStyle>
                    ))}
            </ul>
        </div>
    );
}

export default List;
