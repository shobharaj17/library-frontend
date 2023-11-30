import styled from "styled-components";
 

 
export const ContactContainer = styled.div`

    display: flex;

    flex-direction: column;

    justify-content: center;

    max-width: 1000px;

    margin: 0 auto;

    /* background: red; */
`;
 

export const Container  = styled.a`

    color: #fff;

    margin-bottom: 20px;

    font-size: 18px;

    text-decoration: none;
 

    &:hover {

        color: skyblue;

        transition: 200ms ease-in;

    }
`;
 
export const Heading = styled.p`

    font-size: 24px;

    color: #fff;

    margin-bottom: 40px;

    font-weight: bold;
`;
export const ContactLink = styled.a`

    color: #fff;

    margin-bottom: 20px;

    font-size: 18px;

    text-decoration: none;
 

    &:hover {

        color: skyblue;

        transition: 200ms ease-in;

    }
`;