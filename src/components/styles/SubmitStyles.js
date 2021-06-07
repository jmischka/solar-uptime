import styled from 'styled-components';

const SubmitStyles = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 12px 25px 0;
    margin: 0;
    width: 100%;
    border-top: 1px solid #E9E9E9;

    button {
        display: inline-block;
        margin: 0;
        width: 62px;
        height: 36px;
        font-size: 1.4em;
        font-weight: 600;
        border: none;
        outline: none;
        cursor: pointer;
        color: #333333;
        border-radius: 3px;
        transition: .3s;
    }

    .cancel {
        margin: 0 12px 0;
        background-color: #FFFFFF;
        border: 1px solid #E9E9E9;
        &:hover {
            background-color: #E6E6E6;
        }
    }

    .save {
        background-color: #34C759;
        color: white;
        &:hover {
            background-color: #2DAD4D;
        }
    }
`

export default SubmitStyles;