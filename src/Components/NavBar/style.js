import styled from 'styled-components'

const Header = styled.header`
    width: 100%;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 34px;
    line-height: 40px;
    color: #E8833A;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;

`
const Container = styled.div`
    width: 100%;
    height: 67px;

    background: #C3CFD9;

    display: flex;
    align-items: center;

    position: fixed;
    top: 0;
    left: 0;
`
const Button = styled.button`
    height: 40px;

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

    display: ${props => props.local ? 'none' : 'flex'};
    align-items: center;
    justify-content: center;
`
const arr = [Header, Container, Button]

export default arr