import './css/reset.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './Components/MainPage'
import Hours from './Components/Hours'
import Seats from './Components/Seats'

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage />} ></Route>
                <Route path='/filme/:idFilme' element={<Hours />}></Route>
                <Route path='/assentos/:idSessao' element={<Seats />}></Route>
            </Routes>
        </BrowserRouter>
    )
}