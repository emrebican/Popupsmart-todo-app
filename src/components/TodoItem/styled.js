import styled from 'styled-components';

const ItemWrapper = styled.div`
    width: 380px;
    display: flex;
    justify-content: space-between;
    padding: 20px;
    background-color: ${(props) => props.themeProp ? "#fafafa" : "#212121"};
    color: ${(props) => props.themeProp ? "#212121" : "#fafafa"};
    position: relative;
    box-shadow: 4px 4px 8px #111;
    border-radius: 3px;

    small {
        color: ${(props) => props.themeProp ? "#212121" : "#ccc"};
        font-size: .8rem;
        font-weight: 300;
        position: absolute;
        bottom: 10px;
        left: 10px;
    }
`;

const FormWrapper = styled.div`
    width: 80%;
`;

const Input = styled.textarea`
    width: 100%;
    padding: 5px 10px;
    font-size: 1rem;
    font-weight: 600;
    font-family: "Raleway", sans-serif;
    background-color: ${(props) => props.themeProp ? "#212121" : "#fafafa"};
    color: ${(props) => props.themeProp ? "#fafafa" : "#212121"};
    outline: none;
    border: none;
`;

const Title = styled.span`
    font-size: 1.2rem;
    font-family: "Raleway", sans-serif;
    font-weight: 600;
`;

const ButtonWrapper = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: center;
    gap: .7rem;
`;

const Button = styled.button`
    border: none;
    background-color: transparent;
    color: ${(props) => props.themeProp ? "#212121" : "#fafafa"};
    cursor: pointer;
    font-size: 1.2rem;
    transition: all ease .2s;

    &:hover {
        transform: scale(1.2);
    }
`;

export { ItemWrapper, ButtonWrapper, Button, Title, FormWrapper, Input }