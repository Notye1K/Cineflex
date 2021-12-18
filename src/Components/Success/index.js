import { Link } from "react-router-dom"

export default function Success({ name, cpf, movie, date, movieHour, seat, setCpf, setName }) {
    return (
        <>
            <p>nome {name}</p>
            <p>cpf {cpf}</p>
            <p>filme {movie}</p>
            <p>data { date}</p>
            <p>hora { movieHour}</p>
            {seat.map(i => <p> cadeira {i} </p>)}
            
            <Link to='/' onClick={() => {
                setName('')
                setCpf('')
            }}><button>home </button></Link>
        </>
    )
}