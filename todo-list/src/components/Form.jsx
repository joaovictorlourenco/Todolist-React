import React, { useState, useEffect , useRef } from "react";
import { SubmitStyle } from '../styles/Form'

function Form(props){
    const inputRef = useRef(null);

    useEffect(()=> {

        inputRef.current.focus();

    })
    
    const [input, setInput] = useState('');

    const handleChange = e => {

        setInput(e.target.value);

    }

    const handleSubmit = e => {
        e.preventDefault();

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input,
            isCompleted: false
        });

        setInput('');
      
    }

return(
    <form onSubmit={handleSubmit}>
        <SubmitStyle edit={props.editButton}>     
            <input placeholder={props.placeholder} type="text" value={input} onChange={handleChange} ref={inputRef} />
            <button type="submit">{props.textButton}</button>
        </SubmitStyle>
    </form>
);

}

export default Form