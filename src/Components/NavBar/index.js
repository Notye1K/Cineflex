import { useNavigate, useLocation } from 'react-router-dom'
import styles from './style.js'

const [Header, Container, Button] = styles

export default function NavBar() {
    const navigate = useNavigate()
    const location = useLocation()
    let local = false

    if (location.pathname === '/' || location.pathname === '/sucesso') {
        local = true
    }
    else {
        local = false
    }
    
    return (
        <Container>
            <Button local={local} onClick={() => navigate(-1)}>Voltar</Button>
            <Header> CINEFLEX </Header>
        </Container>)
}