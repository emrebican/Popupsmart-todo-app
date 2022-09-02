import styled from 'styled-components';

const FormWrapper = styled.form`
    display: flex;
    width: 600px;
    height: 45px;
    transition: all ease .4s;

    @media (max-width: 900px) {
        width: 400px;
    }
`;

const Button = styled.button`
    flex-basis: 20%;
    border: none;
    border-left: ${(props) => props.themeProp && "3px solid #212121"};
    background-color: ${(props) => props.themeProp ? "#ddd" : "#212121"};
    color: ${(props) => props.themeProp ? "#212121" : "#ddd"};
    font-size: 1.2rem;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    cursor: pointer;
    transition: all ease .1s;

    &:active {
        transform: scale(1.2);
    }

    &:hover {
        font-size: 1.4rem;
    }
`;

const Input = styled.input`
    flex-basis: 80%;
    padding: 0.5rem 1.2rem;
    font-family: 'Raleway', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    background-color: #fff;
    color: #212121;
    outline: none;
    border: none;

    ::placeholder { 
        color: #bdbdbd;
    }

    @media (max-width: 1200px) {
        width: 80%;
    }
`;

export { FormWrapper, Button, Input };