import styled from 'styled-components';

export const SubmitStyle = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    button{

        color: #EFF5F5;
        background-color: #EB6440;
        width: 5rem;
        height: 3rem;
        border-top-right-radius: 7px;
        border-bottom-right-radius: 7px;
        border: none;
        cursor: pointer;
        font-size: 18px;

    }
    button:hover{

        filter: brightness(1.3);
        transition: 250ms;

    }
    input{

        padding: 12px 7px;
        font-size: 25px;
        width: 15rem;
        height: 3rem;
        border: none;
        outline: none;
        border-top-left-radius: 7px;
        border-bottom-left-radius:  7px;
        background-color:#D6E4E5;

    }

`;
