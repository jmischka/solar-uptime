import styled, { keyframes } from 'styled-components';

const fadeIn = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`

const FormWrapperStyles = styled.div`
    position: absolute;
    left: 50%;
    top: 50%;
    background-color: #FFFFFF;
    border-radius: 5px;
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2);
    width: 100%;
    max-width: 800px;
    transform: translate(-50%,-50%);
    animation: 1s ${fadeIn} ease-out;

    @media screen and (max-width: 800px) {
        position: relative;
        margin: 0 0 0 0;
        left: 0;
        top: 0;
        transform: translate(0,0);
    }
`

export default FormWrapperStyles;