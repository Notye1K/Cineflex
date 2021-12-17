import './css/reset.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './Components/MainPage'
import Hours from './Components/Hours'

export default function App(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<MainPage/>} ></Route>
                <Route path='/filme/:id' element={<Hours/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}