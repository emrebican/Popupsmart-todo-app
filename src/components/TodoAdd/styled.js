import styled from 'styled-components';

const FormWrapper = styled.form`
    display: flex;
    width: 600px;
    background-color: red;
    
    input {
        flex-basis: 80%;
        padding: 0.5rem 1.2rem;
        font-family: 'Raleway', sans-serif;
        font-size: 1rem;
        font-weight: 500;
        background-color: #fafafa;
        color: #212121;
        outline: none;
        border: none;

        ::placeholder { 
            color: #bdbdbd;
        }
    }

    @media (max-width: 1200px) {
        width: 80%;
    }
`;

const Button = styled.button`
    flex-basis: 20%;
    border: none;
    background-color: ${(props) => props.themeProp ? "#ddd" : "#212121"};
    color: ${(props) => props.themeProp ? "#212121" : "#ddd"};
    font-size: 1.2rem;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
`;


export { FormWrapper, Button };