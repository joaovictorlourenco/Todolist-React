import React from "react"
import { SubmitStyle } from '../styles/SubmitStyle'


export default function AddButton(){
    return(
        <SubmitStyle>     
            <input type="text"/>
            <button type="submit">ADD</button>
        </SubmitStyle>
    )
} 
