import { useEffect, useState } from "react"
import axios from 'axios'
import { useParams } from "react-router-dom"

export default function Hours() {
    const [data, setData] = useState(null)
    const {id} = useParams()

    useEffect (() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/movies/${id}/showtimes`)
        promise.then (answer => setData(answer.data))
    },[])

    if(data === null) {
        return (
            <>
                Carregando
            </>
        )
    }

    return (
        <>
            {data.title}
        </>
    )
}