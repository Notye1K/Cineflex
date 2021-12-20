import './css/reset.css'
import {useState} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './Components/MainPage'
import Hours from './Components/Hours'
import Seats from './Components/Seats'
import Success from './Components/Success'
import NavBar from './Components/NavBar'

export default function App() {
    const [personName, setPersonName] = useState('')
    const [cpf, setCpf] = useState('')
    const [movie, setMovie] = useState('')
    const [date, setDate] = useState('')
    const [movieHour, setMovieHour] = useState('')
    const [seat, setSeat] = useState([])

    return (
        <BrowserRouter>
            <NavBar/>
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

