import { useEffect, useState } from "react"
import axios from 'axios'
import { Link } from "react-router-dom"
import styled from 'styled-components'



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

const Container = styled.div` 
    /* margin-left: 38px; */


    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

const Image = styled.div`
    /* margin-right: 38px; */
    margin-bottom: 27px; 

    & img{
        width: 129px;
        height: 193px;

        overflow: hidden;
    }
`