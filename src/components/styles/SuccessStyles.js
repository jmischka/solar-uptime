import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const SuccessStyles = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    width: 80%;
    height: auto;
    padding: 25px;
    background-color: #FFFFFF;
    border-top: 10px solid #34C759;
    transform: translate(-50%, -50%);
    box-shadow: 2px 2px 15px rgba(0,0,0,.3);
    transition: .5s;
    opacity: 1;
    animation: .75s ${fadeIn} ease-out;

    h2 {
        margin: 0 0 9px 0;
        font-size: 1.8em;
        font-weight: 400;
        line-height: 1;
        text-align: center;
        color: #333333;
        span {
            font-size: 1.2em;
            font-weight: 700;
            color: #34C759;
        }
    }

    p {
        margin: 0;
        font-size: 1.4em;
        line-height: 1.3;
        font-weight: 400;
        color: #333333;
        Text-align: center;
    }
`

export default SuccessStyles;