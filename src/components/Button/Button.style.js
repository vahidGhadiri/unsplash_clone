import styled from "styled-components";


export const Container = styled.button`
  all: unset;
  width: 10rem;
  background: #5d78ee;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1.5rem;
  border-radius: .5rem;
  white-space: nowrap;
  color: #fff;
  font-size: 1.2rem;
  transition: all .2s ease;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;

  &:hover {
    background: #4c6aca;
  }

  &:active {
    box-shadow: unset;
  }
`
