import './css/reset.css'
import {useState} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './Components/MainPage'
import Hours from './Components/Hours'
import Seats from './Components/Seats'
import Success from './Components/Success'
import styled from 'styled-components'

export default function App() {
    const [personName, setPersonName] = useState('')
    const [cpf, setCpf] = useState('')
    const [movie, setMovie] = useState('')
    const [date, setDate] = useState('')
    const [movieHour, setMovieHour] = useState('')
    const [seat, setSeat] = useState([])

    return (
        <BrowserRouter>
            <Header> CINEFLEX </Header>
            <Routes>
                <Route path='/' element={<MainPage />} ></Route>
                <Route path='/filme/:idFilme' element={<Hours />}></Route>
                <Route path='/assentos/:idSessao' element={<Seats personName={personName} setPersonName={setPersonName}
                    cpf={cpf} setCpf={setCpf} setMovie={setMovie} setDate={setDate} setMovieHour={setMovieHour}
                    setSeat={setSeat}/>}></Route>
                <Route path='/sucesso' element={<Success movie={movie} date={date} movieHour={movieHour} seat={seat}
                    personName={personName} cpf={cpf} setCpf={setCpf} setPersonName={setPersonName} />}></Route>
            </Routes>
        </BrowserRouter>
    )
}

const Header = styled.header`
    width: 100%;
    height: 67px;

    background: #C3CFD9;

    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 34px;
    line-height: 40px;
    color: #E8833A;

    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
`