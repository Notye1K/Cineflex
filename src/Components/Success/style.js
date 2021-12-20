import styled from 'styled-components'

const SubHeader = styled.div`
    width: 100%;
    height: 110px;
    margin-top: 67px;

    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 24px;
    line-height: 28px;
    text-align: center;
    letter-spacing: 0.04em;
    color: #247A6B;

    display: flex;
    align-items: center;
    justify-content: center;
`

const Container = styled.div`
    margin-left: 29px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;
    color: #293845;
    & div{
        font-weight: bold;
        margin-top: 50px;
        margin-bottom: 3px;
    }
`

const Button = styled.button`
    width: 225px;
    height: 42px;
    margin: 65px auto 10px auto;

    background: #E8833A;
    border: none;
    border-radius: 3px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.04em;
    color: #FFFFFF;

    display: flex;
    align-items: center;
    justify-content: center;
`
const arr = [SubHeader, Container, Button]

export default arr