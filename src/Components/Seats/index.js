import { useEffect, useState } from "react"
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import H1 from '../H1'
import style from './style.js'

const [Container, Circle, ThreeCircles, QuestionContainer, Button, Footer] = style

export default function Seats({ personName, cpf, setPersonName, setCpf, setMovie, setDate, setMovieHour, setSeat }) {
    const [data, setData] = useState(null)
    const { idSessao } = useParams()
    const [chairs, setChairs] = useState([])
    const [chairsName, setChairsName] = useState([])
    const [freeToGo, setFreeToGo] = useState(false)


    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v4/cineflex/showtimes/${idSessao}/seats`)
        promise.then(answer => {
            setData(answer.data)
            setMovieHour(answer.data.name)
            setDate(answer.data.day.date)
            setMovie(answer.data.movie.title)
        })
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
            <H1 title='Selecione o(s) assento(s)' />

            <Container>{data.seats.map(i => <Seat key={i.id} chairs={chairs} chairsName={chairsName}
                setChairsName={setChairsName} setChairs={setChairs} {...i} />)}</Container>

            <ThreeCircles>
                <div>
                    <div></div>
                    Selecionado
                </div>
                <div>
                    <div className="middle"></div>
                    Disponível
                </div>
                <div>
                    <div className='last'></div>
                    Indisponível
                </div>
            </ThreeCircles>

            <Questions question='Nome do comprador' personName={personName} setPersonName={setPersonName} chairs={chairs} setFreeToGo={setFreeToGo} />
            <Questions question='CPF do comprador' cpf={cpf} setCpf={setCpf} chairs={chairs} setFreeToGo={setFreeToGo} />

            <Link to={freeToGo && '/sucesso'}>
                <Button onClick={() => finishing(chairs, chairsName, cpf, personName, setSeat, setFreeToGo)}>Reservar assento(s)</Button>
            </Link>
            <Footer>
                <img src={data.movie.posterURL} alt={data.movie.title} />
                <div>
                    <p>{data.movie.title}</p>
                    <p>{data.day.weekday} - {data.name}</p>
                </div>
            </Footer>
        </>
    )
}

function Seat({ name, isAvailable, id, chairs, chairsName, setChairs, setChairsName }) {
    return (
        <>
            <Circle isAvailable={isAvailable} onClick={event => click(isAvailable, name, event.target,
                id, chairs, chairsName, setChairs, setChairsName)}>{name}</Circle>
        </>
    )
}

function Questions({ question, personName, cpf, setPersonName, setCpf }) {
    return (
        <QuestionContainer>
            <p>{question}:</p>
            <input type="text" placeholder={`${question}...`}
                value={question === 'Nome do comprador' ? personName : cpf}
                onChange={event => question === 'Nome do comprador' ? (
                    setPersonName(event.target.value)) : setCpf(event.target.value)} />
        </QuestionContainer>
    )
}

function click(isAvailable, name, element, id, chairs, chairsName, setChairs, setChairsName) {
    if (!isAvailable) return alert('Esse assento não está disponível')
    else {
        element.classList.toggle('clicked')
    }
    const array = [...chairs, id]
    const arrayName = [...chairsName, name]
    setChairs(array)
    setChairsName(arrayName)
}

function finishing(chairs, chairsName, cpf, personName, setSeat, setFreeToGo) {
    if (cpf === '' || personName === '' || chairs.length === 0) {
        setFreeToGo(false)
        alert('preecha nome e cpf e escolha uma cadeira')
        return
    }
    const newArray = []
    const newArrayName = []
    let counter = 0
    setFreeToGo(true)
    for (let i = 0; i < chairs.length; i++) {
        for (let j = 0; j < chairs.length; j++) {
            if (chairs[i] === chairs[j]) counter++
        }
        if (counter % 2 !== 0 && !newArray.includes(chairs[i])) {
            newArray.push(chairs[i])
            counter = 0
        }
    }
    for (let i = 0; i < chairsName.length; i++) {
        for (let j = 0; j < chairsName.length; j++) {
            if (chairsName[i] === chairsName[j]) counter++
        }
        if (counter % 2 !== 0 && !newArrayName.includes(chairsName[i])) {
            newArrayName.push(chairsName[i])
            counter = 0
        }
    }

    const post = { ids: newArray, name: personName, cpf }
    setSeat(newArrayName)

    const promisse = axios.post('https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many', post)
    promisse.then()
    promisse.catch(() => {
        alert('algo deu errado')
        window.location.reload()
    })
}