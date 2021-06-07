import styled from 'styled-components';

const HeaderStyles = styled.header`
    margin: 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: auto;
    border-radius: 5px 5px 0 0;
    box-shadow: 0 1px 0 0 #E9E9E9;

    h1 {
        margin: 0;
        font-size: 1.8em;
        font-weight: 600;
        line-height: 2.2em;
        padding: 8.5px 25px;
    }

    button {
        position: relative;
        display: block;
        margin: 0;
        width: 56px;
        border: none;
        outline: none;
        background-color: #FFFFFF;
        cursor: pointer;
        border-radius: 0 5px 0 0;
        transition: .4s;

        span {
            position: absolute;
            width: 16px;
            height: 2px;
            top: 50%;
            left: 50%;
            background-color: #333333;
            border-radius: 2px;
            transition: .4s;
        }

        span:nth-child(1) {
            transform: translate(-50%,-50%) rotate(45deg);
        }

        span:nth-child(2) {
            transform: translate(-50%,-50%) rotate(-45deg);
        }

        &:hover {
            background-color: #F25749;
            span {
                background-color: #FFFFFF;
            }
        }
    }
`

export default HeaderStyles;