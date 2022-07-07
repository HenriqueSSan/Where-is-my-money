import styled from "styled-components"
import { darken } from "polished"
import { transparentize } from "polished"
export const Container = styled.form`
  h2{
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
  }
  input{
    width: 100%;
    padding: 0 1.5rem;
    height: 4rem;
    border-radius: .25rem;
    border: 2px solid #d7d7d7;
    background: #e7e9ee;
    font-weight: 400;

    font-size: 1rem;
    font-weight: 500;

    &::placeholder{
      color: var(--text-body);
    }

    & + input{
      margin-top: 1rem;
    }
  }

  button[type="submit"]{
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    background: var(--green);
    color: #fff;
    border-radius: .25rem;
    border: none;
    margin-top: 1.5rem;
    font-weight: 600;
    transition: filter .4s ease-in-out;

    &:hover{
      filter: brightness(0.8);
    }
  }
`



export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: .5rem;

`

const colorsRadioBox ={
  green: "#33cc95",
  red:"#e52e4d"
}

interface RadioBoxProps {
  isActive: boolean
  activeColor: "green" | "red"
}

export const RadioBox = styled.button<RadioBoxProps>`
  height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: .25rem;
    background-color: ${(props) => props.isActive ?  transparentize(0.8,colorsRadioBox[props.activeColor]) : "transparent"};
    display: flex;
    align-items: center;
    justify-content: center;
    transition: cubic-bezier(1, 3, 3, 1);

    &:hover{
      border-color: ${darken(0.1, "#d7d7d7")};
    }

    img{
      width: 20px;
      height: 20px;
    }
    span{
      display: inline-flex;
      margin-left: 1rem;
      font-size: 1rem;
      color: var(--text-title);
    }

`