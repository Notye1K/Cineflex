import styled from 'styled-components'

const P = styled.p`
    margin-left: 24px;
    margin-bottom: 22px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 23px;
    letter-spacing: 0.02em;

    color: #293845;
`

const Container = styled.div`
    margin-left: 23px;
    margin-bottom: 23px;

    display: flex;
    gap: 8px;
`

const Hour = styled.div`
    width: 83px;
    height: 43px;

    background: #E8833A;
    border-radius: 3px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    letter-spacing: 0.02em;
    color: #FFFFFF;
    
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`

const Footer = styled.footer`
    width: 100%;
    height: 117px;

    background: #DFE6ED;
    border: 1px solid #9EADBA;

    display: flex;
    align-items: center;

    position: fixed;
    left: 0;
    bottom: 0;

    & img{
        width: 64px;
        height: 89px;
        padding: 8px;
        margin-left: 10px;
        margin-right: 14px;
        
        background-color: white;
    }

    & span{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 30px;

    color: #293845;
    }
`

const AllSection = styled.div`
    margin-bottom: 140px;
`
const arr = [P, Container, Hour, Footer, AllSection]

export default arr