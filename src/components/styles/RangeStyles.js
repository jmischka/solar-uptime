import styled from 'styled-components';

const RangeStyles = styled.div`
    padding: 0 25px 45px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    label {
        position: relative;
        margin: 0 0 35px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        font-size: 1.4em;
        font-weight: 600;
        color: #333333;
        &:last-child {
            margin: 0 0 0;
        }
    }

    div {
        position: relative;
        margin: 0;
        width: 65%;

        span {
            display: block;
            position: absolute;
            left: 0;
            top 140%;
            width: 80px;
            font-size: 14px;
            line-height: 1;
            font-weight: 400;
            color: #333333;
            text-align: center;
            transform-origin: center;
            transition: .7s ease-out;
        }
    }

    input {
        margin: 0;
        width: 100%;
        -webkit-appearance: none;
        --webkitProgressPercent: 50%;
    }

    input::-webkit-slider-thumb {
        -webkit-appearance: none;
        margin-top: -5.5px;
        border: 1px solid #E9E9E9;
        height: 14px;
        width: 14px;
        border-radius: 100%;
        background: #ffffff;
        cursor: pointer;
        box-shadow: 0 0 3px rgba(0,0,0,.3);
    }

    input::-moz-range-thumb {
        -webkit-appearance: none;
        margin-top: -5.5px;
        border: 1px solid #E9E9E9;
        height: 14px;
        width: 14px;
        border-radius: 100%;
        background: #ffffff;
        cursor: pointer;
    }

    input::-ms-track {
        background: transparent; 
        border-color: transparent;
        color: transparent;
    }

    input::-webkit-slider-runnable-track {
        height: 6px;
        cursor: pointer;
        border-radius: 1.3px;
        background: linear-gradient(to right, #0A7AFF var(--webkitProgressPercent), #F2F2F2 var(--webkitProgressPercent));
        border: 0.2px solid #E9E9E9;
    }
`

export default RangeStyles;