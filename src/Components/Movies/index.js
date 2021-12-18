import { useEffect, useState } from "react"
import axios from 'axios'
import Movie from "../Movie"
import { Link } from "react-router-dom"



export default function Movies() {
    const [data, setData] = useState(null)

    useEffect(() => {
        const promise = axios.get('https://mock-api.driven.com.br/api/v4/cineflex/movies')
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
            {data.map(i => <Link key={i.id} to={`/filme/${i.id}`}><Movie {...i} /></Link>)}
        </>
    )
}