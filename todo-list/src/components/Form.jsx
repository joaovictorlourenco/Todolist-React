import React from "react"
import { Title } from '../styles/Form'
import AddButton from '../components/buttonAdd'

export default function Form(){
    return(
        <Title>
            <div>
                <h2>My Tasks</h2>
                <AddButton/>
            </div>
        </Title>
    )
} 