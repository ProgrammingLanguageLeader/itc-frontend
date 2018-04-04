import styled from 'styled-components';

const LeadHeader = styled.span`
    font-family: "Pacifico", cursive;
`;

const LeadHeader1 = LeadHeader.extend`
    font-size: 77.32px;
    text-align: left;
    letter-spacing: 2.97px;
    color: #fff;
    margin-top: 96px;
    margin-left: 200px;
    
    @media (max-width: 1200px) {
        display: block;
        width: 100%;
        margin-left: 0;
        text-align: center;
        line-height: 84px;
        font-size: 60px;
    }
`;

const LeadHeader2 = LeadHeader.extend`
    font-size: 182.75px;
    text-align: left;
    line-height: 37px;
    letter-spacing: 6.49px;
    color: #b7e611;
    margin-left: 260px;

    @media (max-width: 1200px) {
        display: block;
        width: 100%;
        margin-left: 0;
        text-align: center;
        line-height: 84px;
        font-size: 100px;
    }
`;

export { LeadHeader, LeadHeader1, LeadHeader2 };