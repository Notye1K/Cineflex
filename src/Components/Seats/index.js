import { useEffect, useState } from "react"
import axios from 'axios'
import { useParams } from 'react-router-dom'
import H1 from '../H1'

export default function Seats() {
    const [data, setData] = useState(null)
    const { idSessao } = useParams()

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessao}/seats`)
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
            <H1 title='Selecione o(s) assento(s)' />
            {data.seats.map(i => <Seat key={i.id} {...i} />)}
            <div> 3 bolinhas</div>
            <Questions question='Nome do comprador' />
            <Questions question='CPF do comprador' />
            <button>Reservar assento(s)</button>
            <footer>
                <img src={data.movie.posterURL} alt={data.movie.title} />
                <div>
                    <p>{data.movie.title}</p>
                    <p>{data.day.weekday} - {data.name}</p>
                </div>
            </footer>
        </>
    )
}

function Seat({ name }) {
    return (
        <>
            {name} -
        </>
    )
}

function Questions({ question }) {
    return (
        <>
            <p>{question}:</p>
            <input type="text" placeholder={`${question}...`} />
        </>
    )
}