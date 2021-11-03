import styled from "styled-components"


export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  flex-direction: column
`

export const Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2.5rem;
  padding: 2.5rem;
  grid-auto-flow: dense;
  align-items: stretch;
  width: 100%;

  img {
    border-radius: .2rem;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const Error = styled.div`
  background: lightsalmon;
  padding: 1rem;
  border-radius: .4rem;
  border: .1rem solid tomato;
`

export const Image = styled.div`
    
`