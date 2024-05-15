import { Fade } from 'react-awesome-reveal'
import styled from 'styled-components'

const Box = styled.section`
    width: 80vw;
    height: 70vh;
    background-color: #424769;
    box-shadow: 0 0 10px #00000029;
    border-radius: .5rem;
    margin: auto;
    margin-top: 5%;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
    overflow-y: scroll;

    &::-webkit-scrollbar{
      width: 0;
    }
`

const Container = ({ children }) => {
  return (
    <Box>
      <Fade cascade damping={.1} direction={"up"} triggerOnce="true">
        {children}
      </Fade>
    </Box>
  )
}

export default Container