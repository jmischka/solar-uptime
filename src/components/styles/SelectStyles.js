import styled from 'styled-components';
import arrowImage from './assets/down-arrow-pngrepo-com.png';

const SelectStyles = styled.div`
    margin: 16px 0 0;
    padding: 0 25px 16px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    &:after {
        content: "";
        display: block;
        margin: 16px auto 8px;
        width: 100%;
        height: 1px;
        background-color: #E9E9E9;
    }

    label {
        position: relative;
        display: block;
        margin: 0 0 0 0;
        width: 31%;
        font-size: 1.4em;
        font-weight: 600;
        color: #333333;

        span.tooltip {
            position: absolute;
            left: 36px;
            top: 0;
            font-size: 16px;
            color: #B3B3B3;
            cursor: pointer;

            span.tooltip-text {
                position: absolute;
                left 24px;
                top: -8px;
                width: 150px;
                padding: 6px 8px;
                font-size: 12px;
                font-weight: 400;
                line-height: 1.1;
                color: #333333;
                opacity: 0;
                visibility: hidden;
                background-color: #F2EEB3;
                transition: .5s;
            }

            &:hover {
                color: #333333;
                span.tooltip-text {
                    opacity: 1;
                    visibility: visible;
                }
            }
        }
        
        span.tip {
            display: block;
            margin: 12px 0 0;
            width: 100%;
            height: auto;
            font-size: 12px;
            font-weight: 400;
            line-height: 1.4;
            color: #B9B9B9;
        }

        @media screen and (max-width: 768px) {
            width: 100%;
            margin: 0 0 14px 0;
            &:last-child {
                margin: 0 0 0 0;
            }
        }
    }

    select {
        position: relative;
        margin: 4px 0 0;
        width: 100%;
        padding: 0 6px;
        font-size: 1em;
        background-color: #FFFFFF;
        appearance: none;
        color: #333333;
        border: 1px solid #E9E9E9;
        border-radius: 3px;
        height: 36px;
        background-image: url(${arrowImage});
        background-size: 10px 10px;
        background-position: top 50% right 9px;
        background-repeat: no-repeat;
    }

    select.custom-select {
        padding: 0 6px 0 20px;
    }

    label[for="importance"]:after {
        content: "";
        position: absolute;
        left: 8px;
        top: 36px;
        width: 8px;
        height: 8px;
        border-radius: 100%;
    }

    label[for="importance"].High:after {
        background-color: #FF3B30;
    }

    label[for="importance"].Medium:after {
        background-color: #F2911B;
    }

    label[for="importance"].Low:after {
        background-color: #FFD700;
    }

    input {
        display: block;
        margin: 4px 0 0;
        width: 100%;
        font-size: 1.2em;
        font-weight: 400;
        padding: 0 6px;
        background-color: #FCFCFC;
        border: 1px solid #E9E9E9;
        border-radius: 3px;
        height: 36px;
    }
`

export default SelectStyles;