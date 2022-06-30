import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    align-items: stretch;
`;

export const Input = styled.input`
    border: 1px solid #937dc2;
    border-radius: 4px 0 0 4px;
    padding-left: 20px;
    padding-right: 20px;
    height: 2.5rem;

    &:focus,
    &:focus + button {
        outline: none;
        box-shadow: 0 0 0 2px #937dc2;
    }

    &::placeholder {
        font-size: 1rem;
        color: #888;
    }
`;

export const Button = styled.button`
    background-color: #937dc2;
    border: 0;
    border-radius: 0 4px 4px 0;
    height: 2.5rem;
    padding-left: 20px;
    padding-right: 20px;
`;

