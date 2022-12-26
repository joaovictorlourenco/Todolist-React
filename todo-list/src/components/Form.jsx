import React, { useState } from "react"
import { Title, ListStyle, General, SubmitStyle } from '../styles/Form'
import List from "./List";

export default function Form(){

    return(
        <General>
            <h2>My Tasks</h2>
            <Title>
                <form>
                    <SubmitStyle>     
                        <input placeholder="Adicione uma tarefa" type="text"/>
                        <button type="submit">ADD</button>
                    </SubmitStyle>
                </form>
            </Title>

            <ListStyle>
                <List />
            </ListStyle>
        </General>
    )
}