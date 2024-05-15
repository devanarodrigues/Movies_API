import styled from 'styled-components'

const Box = styled.section`
    width: 170px;
    height: 250px;
    box-shadow: 0 0 10px #00000029;
    background-color: #eeeeee73;
    border-radius: .5rem;
    display: flex;
    flex-direction: column;
    overflow: hidden;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;

    img{
        width: 90%;
        height: 75%;
        margin-top: 3%;
        border-radius: .3rem;
    }
`
const Details = styled.div`
    background-color: #ffffff7f;
    width: 100%;
    min-height: 3rem;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Card = ({ img, nome, onclick }) => {
    return (
        <Box onClick={onclick}>
            <img src={img} alt={nome} />
            <Details>
                <h4>{nome}</h4>
            </Details>
        </Box>
    )
}

export default Card