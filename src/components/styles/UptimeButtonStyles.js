import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const UptimeButtonStyles = styled.button`
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;
    width: 153px;
    height: 36px;
    left: 50%;
    top: 50%;
    font-size: 1.4em;
    color: white;
    background-color: #0A7AFF;
    border-radius: 3px; 
    outline: none;
    border: none;
    transform: translate(-50%, -50%);
    cursor: pointer;
    transition: .4s;
    animation: .5s ${fadeIn} ease-out;
    &:hover {
        background-color: #36BF4A;
    }
`

export default UptimeButtonStyles;