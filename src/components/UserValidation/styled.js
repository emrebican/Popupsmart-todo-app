import styled from 'styled-components';

const FormWrapper = styled.form`
    margin-top: 12rem;
    padding: 3px;
    width: 30%;
    display: flex;
    border-radius: 50px;
    overflow: hidden;
    background-color: ${(props) => props.themeProp ? "#fafafa" : "#212121"};
    transition: all ease .4s;

    @media (max-width: 1200px) {
        width: 50%;
    }
    @media (max-width: 700px) {
        width: 70%;
    }
`;

const Input = styled.input`
    flex-basis: 85%;
    outline: none;
    border: none;
    padding: 0 20px;
    font-size: 1rem;
    font-weight: 700;
    font-family: "Raleway", sans-serif;
    letter-spacing: 1.2px;
    background-color: transparent;
    color: ${(props) => props.themeProp ? "#212121" : "#fafafa"};
`;

const Button = styled.button`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    font-family: "Raleway", sans-serif;
    font-size: 1.2rem;
    font-weight: 700;
    border: none;
    color: ${(props) => props.themeProp ? "#fafafa" : "#212121"};
    background-color: ${(props) => props.themeProp ? "#212121" : "#fafafa"};
    cursor: pointer;
    transition: all ease .5s;
`;

const Title = styled.h2`
    position: absolute;
    top: 4rem;
    font-family: "Raleway", sans-serif;
    font-size: 2rem;
    font-weight: 500;
    color: ${(props) => props.themeProp ? "#fafafa" : "#212121"};
`;

export { FormWrapper, Input, Button, Title };