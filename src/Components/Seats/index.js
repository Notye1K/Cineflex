import { useEffect, useState } from "react"
import axios from 'axios'
import { useParams, Link } from 'react-router-dom'
import H1 from '../H1'
import styled from 'styled-components'

export default function Seats({ personName, cpf, setPersonName, setCpf, setMovie, setDate, setMovieHour, setSeat } ) {
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
                Carregando
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

            <Questions question='Nome do comprador' personName={personName} setPersonName={setPersonName} chairs={chairs} setFreeToGo={setFreeToGo}/>
            <Questions question='CPF do comprador' cpf={cpf} setCpf={setCpf} chairs={chairs} setFreeToGo={setFreeToGo}/>

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

function verify(setFreeToGo, cpf, personName, chairs) {
    if (cpf === '' || personName === '' || chairs.length === 0) {
        setFreeToGo(false)
    }
    else {
        setFreeToGo(true)
    }
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
            if(chairs[i] === chairs[j]) counter++
        }
        if (counter % 2 !== 0 && !newArray.includes(chairs[i])) {
            newArray.push(chairs[i])
            counter = 0
        }
    }
    for (let i = 0; i < chairsName.length; i++) {
        for (let j = 0; j < chairsName.length; j++) {
            if(chairsName[i] === chairsName[j]) counter++
        }
        if (counter % 2 !== 0 && !newArrayName.includes(chairsName[i])) {
            newArrayName.push(chairsName[i])
            counter = 0
        }
    }

    // console.log(`nome = ${personName} ---- cpf = ${cpf}`);
    const post = { ids: newArray, name:personName, cpf }
    // console.log(post);
    setSeat(newArrayName)
    // console.log(newArrayName);

    const promisse = axios.post('https://mock-api.driven.com.br/api/v4/cineflex/seats/book-many', post)
    promisse.then( )
    promisse.catch(() => {
        alert('algo deu errado')
        window.location.reload()
    })
}

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
    margin-bottom: 30px;

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
`