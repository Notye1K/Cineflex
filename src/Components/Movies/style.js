import styled from 'styled-components'

const Container = styled.div` 
    /* margin-left: 38px; */


    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

const Image = styled.div`
    /* margin-right: 38px; */
    margin-bottom: 27px; 

    & img{
        width: 129px;
        height: 193px;

        overflow: hidden;
    }
`
const arr = [Container, Image]
export default arr