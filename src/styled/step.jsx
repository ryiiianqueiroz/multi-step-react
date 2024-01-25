import styled from 'styled-components';

const Title = styled.h1`
    color: #070747;
    font-size: 28px;
    margin-top: 35px;
    margin-bottom: 15px;

    @media screen and (max-width: 768px) {
        margin-top: 0px;
        margin-bottom: 10px;
    }

    @media screen and (max-width: 425px) {
        margin-top: 10px;
    }

    @media screen and (max-width: 320px) {
        font-size: 25px;
        margin-bottom: 5px;
    }
`;

const SubTitle = styled.p`
    color: gray;
    font-size: 15px;
    font-weight: 400;
    margin-bottom: 30px;

    @media screen and (max-width: 768px) {
        font-size: 16px;
        margin-bottom: 20px;
    }

    @media screen and (max-width: 320px) {
        font-size: 13px;
        margin-bottom: 15px;
    }
`;

const Button = styled.button`
    padding: 15px;
    padding-left: 19px;
    padding-right: 19px;
    font-size: 14.8px;
    background-color: #010161;
    color: white;
    border-radius: 10px;
    border: none;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        padding: 12px;
        font-size: 12px;
    }

    @media screen and (max-width: 320px) {
        padding: 12px;
        font-size: 11px;
    }
`;

const GoBack = styled.button`
    background: none;
    border: none;
    font-size: 15px;
    color: gray;
    cursor: pointer;

    @media screen and (max-width: 768px) {
        font-size: 12px;
    }

    @media screen and (max-width: 320px) {
        font-size: 11px;
    }
`

export { Title, SubTitle, Button, GoBack };