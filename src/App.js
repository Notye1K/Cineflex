import './css/reset.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './Components/MainPage'
import Hours from './Components/Hours'
import Seats from './Components/Seats'
import styled from 'styled-components'

export default function App() {
    return (
        <BrowserRouter>
            <Header> CINEFLEX </Header>
            <Routes>
                <Route path='/' element={<MainPage />} ></Route>
                <Route path='/filme/:idFilme' element={<Hours />}></Route>
                <Route path='/assentos/:idSessao' element={<Seats />}></Route>
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