import { useEffect, useState } from "react"
import axios from 'axios'
import { useParams, Link } from "react-router-dom"
import H1 from '../H1'

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
                Carregando
            </>
        )
    }

    return (
        <>
            <H1 title='Selecione o horário'></H1>
            {data.days.map(i => <Section key={i.id} {...i} />)}
            <div>
                <img src={data.posterURL} alt={data.title}></img>
                <span>{data.title}</span>
            </div>
        </>
    )
}

function Section({ weekday, date, showtimes }) {
    return (
        <>
            <div> {weekday} - {date}</div>
            {showtimes.map(i => <Link key={i.id} to={`/assentos/${i.id}`}><ShowTimes {...i} /></Link>)}
        </>
    )
}

function ShowTimes({ name }) {
    return (
        <div>{name}</div>
    )
}