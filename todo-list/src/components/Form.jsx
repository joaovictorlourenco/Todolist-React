import React, { useState } from "react"
import { Title, ListStyle, General, SubmitStyle } from '../styles/Form'
import List from "./List";

export default function Form(){

    const [task, setTask] = useState("");
    const [itemsList, setItemsList] = useState([]);
    const [id, setId] = useState(0);

    function handleAddItemToList(event) {
        event.preventDefault(); 
        console.log(event.value);
        const inputTask = { value: inputValue, id: id};

        // setId(id + 1);
        // setTask(inputTask); 

        console.log(inputTask);
        // if (!!task) {
        //     setItemsList([...itemsList, task]);
        //     setTask("");
        // }

    }
     

    return(
        <General>
            <h2>My Tasks</h2>
            <Title>
                <form onSubmit={handleAddItemToList}>
                    <SubmitStyle>     
                        <input placeholder="Adicione uma tarefa" value={task} type="text"/>
                        <button type="submit">ADD</button>
                    </SubmitStyle>
                </form>
            </Title>

            <ListStyle>
                <List List={itemsList} />
            </ListStyle>
        </General>
    )
}