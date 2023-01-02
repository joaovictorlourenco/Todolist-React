import React, { useState } from "react";
import { SubmitStyle } from '../styles/Form'

function Form(props){

    const [input, setInput] = useState('');

    const handleChange = e => {

        setInput(e.target.value);

    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        });

        setInput('');
      
    }

return(
    <form onSubmit={handleSubmit}>
        <SubmitStyle>     
            <input placeholder="Adicione uma tarefa" type="text" value={input} onChange={handleChange} />
            <button type="submit">ADD</button>
        </SubmitStyle>
    </form>
);

}

export default Form