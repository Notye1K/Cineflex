import styled from 'styled-components'

const Container = styled.div`
    margin-left: 24px;
    margin-right: 16px;

    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
`

const Circle = styled.div`
    width: 26px;
    height: 26px;
    margin-bottom: 26px;
    margin-right: 7px;

    background: ${props => props.isAvailable ? '#C3CFD9' : '#FBE192'}; 
    border: 1px solid ${props => props.isAvailable ? '#808F9D' : '#F7C52B'};
    border-radius: 12px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 11px;
    line-height: 13px;
    letter-spacing: 0.04em;
    color: #000000;

    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;

    &.clicked{
        background: #8DD7CF;
        border: 1px solid #1AAE9E;
    }
    &:hover{
        cursor: pointer;
    }
`

const ThreeCircles = styled.div`
    margin-bottom: 42px;

    display: flex;
    justify-content: space-evenly;

    & div{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 13px;
        line-height: 15px;
        letter-spacing: -0.013em;
        color: #4E5A65;

        div{
            width: 25px;
            height: 25px;
            margin-bottom: 10px;

            background: #8DD7CF;
            border: 1px solid #1AAE9E;
            box-sizing: border-box;
            border-radius: 17px;
        }
        .middle {
            background: #C3CFD9;
            border: 1px solid #7B8B99;
        }
        .last {
            background: #FBE192;
            border: 1px solid #F7C52B;
        }
    }
`

const QuestionContainer = styled.div`
    margin-left: 24px;
    margin-bottom: 7px;

    & p{
        font-family: Roboto;
        font-style: normal;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: #293845;
    }

    & input {
        width: 327px;
        height: 51px;
        padding-left: 18px;


        background: #FFFFFF;
        border: 1px solid #D5D5D5;
        border-radius: 3px;

        font-family: Roboto;
        font-style: italic;
        font-weight: normal;
        font-size: 18px;
        line-height: 21px;
        color: black;
    }

    & input::placeholder{
            color: #AFAFAF;
        }
`

const Button = styled.button`
    width: 225px;
    height: 42px;
    margin: 0 auto;
    margin-top: 50px;
    margin-bottom: 147px;

    background: #E8833A;
    border: none;
    border-radius: 3px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 21px;
    text-align: center;
    letter-spacing: 0.04em;
    color: #FFFFFF;
`

const Footer = styled.footer`
    width: 100%;
    height: 117px;

    background: #DFE6ED;
    border: 1px solid #9EADBA;

    display: flex;
    align-items: center;

    & img{
        width: 64px;
        height: 89px;
        padding: 8px;
        margin-left: 10px;
        margin-right: 14px;
        
        background-color: white;
    }

    & div{
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 26px;
    line-height: 30px;

    color: #293845;
    }

    position: fixed;
    bottom: 0;
    left: 0;
`
const arr = [Container, Circle, ThreeCircles, QuestionContainer, Button, Footer]

export default arr