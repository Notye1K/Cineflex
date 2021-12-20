import { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"
import style from './style.js'

const [Container, Image] = style

export default function Movies() {
    const [data, setData] = useState(null)

    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v4/cineflex/movies')
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
        <Container>
            {data.map(i => <Link key={i.id} to={`/filme/${i.id}`}><Movie {...i} /></Link>)}
        </Container>
    )
}

function Movie({ posterURL, title }) {
    return (
        <Image>
            <img src={posterURL} alt={title}></img>
        </Image>
    )
}