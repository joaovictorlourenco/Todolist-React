import styled from "styled-components";


export const ListActions = styled.div`


    display: flex;
    justify-content:${props => props.primary ? "flex-start" : " flex-end"};
    align-items: center;
    width: ${props => props.primary ? '8%' : '100%'} ;
    height: 100%;

    label{

        padding-left: 1rem;

    }

    .checkmark{
        /* Add if not using autoprefixer */
        -webkit-appearance: none;
        appearance: none;
        /* For iOS < 15 to remove gradient background */
        background-color: #fff;
        /* Not removed via appearance */
        margin: 0;

        cursor: pointer;

        width: 1.5rem;
        height: 1.5rem;
        background-color: #EFF5F5;
        border-radius: 4px;
        vertical-align: middle;
        outline: none;
        border: none;
        transform: translateY(-0.075em);
        opacity: 1;
        
    }


    input{

        display: grid;
        place-content: center;


    }
    input::before{

        content: "";
        width: 1.1rem;
        height: 1.1rem;
        border-radius: 12px;
        transform: scale(0);
        transition: 120ms transform ease-in-out;
        box-shadow: inset 1rem 1rem #EB6440;

    }
    input[type="checkbox"]:checked::before{

        transform: scale(1);

    }
    input[type="checkbox"]::before {
        /* ...existing styles */

        /* Windows High Contrast Mode */
        background-color: CanvasText;
    }
    input[type="checkbox"]::before{

        transform-origin: bottom left;
        clip-path: polygon(14% 44%, 0 65%, 50% 100%, 100% 16%, 80% 0%, 43% 62%);

    }
    input[type="checkbox"]::before{

        outline: max(2px, 0.15em) solid currentColor;
        outline-offset: max(2px, 0.15em);

    }

    .icon{
        
        display: flex;
        justify-content: center;
        align-items: center;
        height: 1.4rem;


    }


    .icon > svg{


        height: 1.5rem;
        color: #EFF5F5;
        cursor: pointer;

    }
    .icon > svg:hover{

        color: #EB6440;
        transition: 300ms;

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
