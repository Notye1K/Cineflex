import styled from 'styled-components'

export default function H1({ title }) {
    return (
        <Container>{title}</Container>
    )
}

const Container = styled.div`
    width: 100%;
    height: 110px;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 28px;
    letter-spacing: 0.04em;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`