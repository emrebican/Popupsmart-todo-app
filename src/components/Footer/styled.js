import styled from 'styled-components';

const Footer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
    font-family: "Raleway", sans-serif;
    font-size: .9rem;
    color: ${(props) => props.themeProp ? "#aaa" : "#212121"};
    line-height: 20px;

    a {
        display: flex;
        justify-content: center;
        text-decoration: none;
        gap: 1rem;
        color: ${(props) => props.themeProp ? "#aaa" : "#212121"};

        svg {
            font-size: 1.2rem;
        }
    }
`;

export { Footer };