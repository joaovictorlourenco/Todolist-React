import styled from "styled-components";

export const ListActions = styled.div`


    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 100%;
    height: 100%;

    input{

        height: 20px;
        width: 20px;

    }
    input:checked{

        background-color: #EB6440;

    }

`;

export const ListStyle = styled.div `

    display: flex;
    flex-direction: center;
    align-items: center;
    list-style: none;
    color: #EFF5F5;


    min-width: 400px; 
    width: fit-content;
    max-width: 100%;
    height: 50px;
    border-radius: 7px;
    font-size: 30px;
    margin: 1rem;
    
    background-color: #8CBCBF;

    li{

        display: flex;
        height: 100%;
        width: 100%;
        justify-content: left;

    }

    p{

        display: flex;
        height: 100%;
        
        padding-left: 1rem;
        padding-right: 1rem;
        align-items: center;

    }

`;
