import { useEffect, useState } from "react"
import axios from 'axios'
import { useParams, Link } from "react-router-dom"
import H1 from '../H1'
import styled from "./style.js"

const [P, Container, Hour, Footer, AllSection] = styled

export default function Hours() {
    const [data, setData] = useState(null)
    const { idFilme } = useParams()

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${idFilme}/showtimes`)
        promise.then(answer => setData(answer.data))
    }, [])

    if (data === null) {
        return (
            <>
                Carregando ...
            </>
        )
    }

    return (
        <>
            <H1 title='Selecione o horário' />
            <AllSection>{data.days.map(i => <Section key={i.id} {...i} />)}</AllSection>
            <Footer>
                <img src={data.posterURL} alt={data.title}></img>
                <span>{data.title}</span>
            </Footer>
        </>
    )
}

function Section({ weekday, date, showtimes }) {
    return (
        <>
            <P> {weekday} - {date}</P>
            <Container>{showtimes.map(i => <Link key={i.id} to={`/assentos/${i.id}`}><ShowTimes {...i} /></Link>)}</Container>
        </>
    )
}

function ShowTimes({ name }) {
    return (
        <Hour>{name}</Hour>
    )
}

