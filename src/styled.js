import styled from 'styled-components';

const AppWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    background-color: ${(props) => props.themeProp ? "#212121" : "#eee"};
`;
const Button = styled.button`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 50%;
    color: ${(props) => props.themeProp ? "#ff6f00" : "#fafafa"};
    background-color: ${(props) => props.themeProp ? "#fafafa" : "#212121"};
    box-shadow: 0px 0px 10px black;
    font-size: 1.6rem;
    top: 2rem;
    left: 2rem;
    width: 40px;
    height: 40px;
    transition: all ease .2s;
    cursor: pointer;

    &:hover {
        transform: scale(1.1);
    }
`;

const ContentWrapper = styled.div`
    width: 70%;
    padding: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h2`
    color: ${(props) => props.themeProp ? "#fafafa" : "#212121"};
    text-transform: capitalize;
`;

export { AppWrapper, Button, ContentWrapper, Title }
