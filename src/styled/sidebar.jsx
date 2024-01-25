import styled from 'styled-components';

const Step = styled.div`
    display: flex;
    padding: 8%;

    .s-tep{
        margin-left: 20px;

        p{
            color: #a3a3eb;
            font-weight: 400;
            font-size: 15px;
        }

        h3{
            color: white;
            font-weight: 700;
            margin-top: 5px;
            font-size: 17px;
        }
    }

    &:nth-child(1){
        margin-top: 20px;
    }

    @media screen and (max-width:1024px) {
        
        .s-tep{
            p{
                font-size: 13px;
            }

            h3{
                font-size: 15px;
            }
        }
    }

    @media screen and (max-width: 768px){
        padding: 4%;
        margin-top: -40px;

        .s-tep{

            p{
                display: none;
            }

            h3{
                display: none;
            }
        }
        
        &:nth-child(1){
            margin-top: -40px;
        }
    }
`;

const Steps = styled.div`
    width: 40px;
    height: 40px;
    background-color: none;
    border: 1px solid #d0d0ee;
    border-radius: 150px;
    text-align: center;

    h2{
        color: white;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
    }
`;

const StepsActive = styled.div`
    width: 40px;
    height: 40px;
    background-color: #8cf5c0dd;
    border-radius: 150px;
    text-align: center;

    h2{
        color: black;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 20px;
    }
`;


export { Step, Steps, StepsActive };