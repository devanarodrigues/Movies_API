import styled from 'styled-components'
import { AiOutlineClose } from "react-icons/ai";
import { Fade } from "react-awesome-reveal";

const Box = styled.section`
        width: 80vw;
        box-shadow: 0 0 10px #00000029;
        height: 70vh; 
        background-color: #424769;
        position: absolute;
        z-index: 999;
        top: 1vh;
        left: 9vw;
        border-radius: .5rem;
        display: flex;
        flex-direction: column;
        padding: 1rem;
        align-items: center;
        gap: 1rem;
        color: #EEEEEE;
        overflow: scroll;

        .box{
            width: 80vw;
            height: 70vh; 
            position: absolute;
            z-index: 999;
            top: 1vh;
            left: 9vw;
            overflow: scroll;
        }
        .row{
            display: flex;
            align-items: center;
            width: 100%;
            justify-content: space-between;
            gap: 1rem;
        }
        .overview{
            width: 50%;
            display: flex;
            flex-direction: column;

            gap: 1rem;
        }

        &::-webkit-scrollbar{
            width: 0;
        }

        img{
            width: 100%;
            box-shadow: 0 0 10px #00000063;
            margin-top: 3%;
            border-radius: .3rem;
    }
    `
const MovieDetails = ({ votos, title, backdrop, overview, fechar }) => {

    return (
        <Box>
            <h2>{title}</h2>
            <div className='row'>
                <Fade style={{ width: "50%" }} direction='left'>
                    <img src={backdrop} alt={title} />
                </Fade>
                <div className="overview">
                    <Fade style={{ width: "auto" }} direction='right'>
                        <p><b>Sinopse:</b></p>
                        <p>{overview}</p>
                        <p><b>Votos:</b> <span>{votos}</span></p>
                    </Fade>
                </div>
            </div>
            <span onClick={fechar}><AiOutlineClose style={{ cursor: "pointer" }} size={"2rem"} /></span>
        </Box>
    )
}

export default MovieDetails