import styled from "styled-components";


export const ListGeneral = styled.ul`

    .task-container-complete{

        background-color: #C0C5C5;
    }


`;

export const ListActions = styled.div`


    display: flex;
    justify-items: center;
    align-items: center;

    label{

        padding-left: 1rem;

    }

    .icon{
        
        display: flex;
        justify-content: center;
        align-items: center;
        height: 1.4rem;
        

    }

    .icon > svg{

        height: 1.4rem;
        color: #EFF5F5;
        cursor: pointer;

        
    }
    .icon > svg:nth-child(2){

     
        margin-right: 0.6rem;


    }
    .icon > svg:hover{

        color: #EB6440;
        transition: 300ms;

    }

`;

export const EditForm = styled.div`


    width: 500px;
    height: 200px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    border-radius: 10px;
    gap: 1rem;
    background-color: #B1B5B5;

    h3{

        margin: 1rem;
        color: #EFF5F5;
        font-size: 30px;

    }

`;

export const ListStyle = styled.div `

    display: flex;
    flex-direction: center;
    align-items: center;
    list-style: none;
    color: #497174;


    min-width: 400px; 
    width: fit-content;
    max-width: 100%;
    height: 50px;
    border-radius: 7px;
    font-size: 30px;
    margin: 1rem;
    
    background-color: #c0c5c5;

    li{

        display: flex;
        height: 100%;
        width: 100%;
        justify-content: space-between;

    }

    p{

        display: flex;
        height: 100%;
        
        padding-left: 1rem;
        padding-right: 1rem;
        align-items: center;

    }

`;
