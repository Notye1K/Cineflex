import { Link } from "react-router-dom"
import style from './style.js'

const [SubHeader, Container, Button] = style

export default function Success({ personName, cpf, movie, date, movieHour, seat, setCpf, setPersonName }) {
    seat = orderNumber(seat)
    return (
        <>
            <SubHeader>
                Pedido feito <br />
                com sucesso!
            </SubHeader>

            <Container>
                <div>Filme e sessão</div>
                <p>{movie}</p>
                <p>{date} {movieHour}</p>
                <div>Ingressos</div>
                {seat.map(i => <p key={i}>Assento {i} </p>)}
                <div>Comprador</div>
                <p>Nome {personName} </p>
                <p>CPF: {cpf}</p>
            </Container>

            <Link to='/' onClick={() => {
                setPersonName('')
                setCpf('')
            }}><Button>home </Button></Link>
        </>
    )
}

function orderNumber(number) {
    for (let i = 0; i < number.length; i++) {
        number[i] = parseInt(number[i])
    }
    for (let i = 0; i < number.length; i++) {
        let lesser = i
        for (let j = i + 1; j < number.length; j++) {
            if (number[j] < number[lesser]) {

                lesser = j
            }
        }
        let aux = number[lesser]
        number[lesser] = number[i]
        number[i] = aux
    }
    return number
}