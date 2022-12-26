import styled from 'styled-components';

export const General = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
    margin-top: 10rem;
    gap: 2rem;

    h2{
        
        color:#497174;
        font-size: 50px;
        margin-bottom: 2rem;

    }

`;

export const Title = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    color: #497174;

`;

export const backgroundModal = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;
    color: whitesmoke;

`;

export const ListStyle = styled.ul`


    list-style: none;


`;

export const SubmitStyle = styled.div`

    display: flex;
    justify-content: center;
    align-items: center;

    button{

        color: #EFF5F5;
        background-color: #EB6440;
        width: 5rem;
        height: 4rem;
        border-top-right-radius: 7px;
        border-bottom-right-radius: 7px;
        border: none;
        cursor: pointer;
        font-size: 18px;

    }
    button:hover{

        filter: brightness(1.2);
        transition: 1000ms;

    }
    input{

        padding: 12px 7px;
        font-size: 30px;
        width: 20rem;
        height: 4rem;
        border: none;
        outline: none;
        border-top-left-radius: 7px;
        border-bottom-left-radius:  7px;
        background-color:#D6E4E5;

    }

`;
