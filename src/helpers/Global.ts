import { createGlobalStyle } from "styled-components";


export const GlobalStyled = createGlobalStyle`
  :root{
    --background: #f0f2f5;
    --red:#e52e4d;
    --blue:#5429cc;
    --green: #33cc95;
    --blue-light:#6933ff;
    --text-title:#363f5f;
    --text-body:#969cb3;
    --shape:#fff
  }
  
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
  }
  html{
    @media screen and (max-width:1080px){
      font-size:93.75%;
    }
    @media screen and (max-width:720px){
      font-size:85.75%;
    }
  }

  body{
    background-color: var(--background);
    -webkit-font-smoothing: antialiased;
  }
  body,input,textarea,button{
    font-family: "Poppins",sans-serif;
    font-weight: 400;
  }

  h1,h2,h3,h4,h5,h6,strong{
    font-weight: 600;
  }

  button{
    cursor:pointer;
  }
  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

  .ReactModal__Overlay {
    opacity: 0;
    transition: all 2s ease-in-out;
  }

  .ReactModal__Overlay--after-open{
      opacity: 1;
  }


  .react-modal-overlay{
    background: rgba(0,0,0,.5) ;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items:center;
    justify-content: center;
    transition: all .3s;
  }


  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius:.25rem;
    transition: all .3s;
  }
  .react-close-modal{
    position:absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background-color: transparent;

    transition: filter .2s ease-in;

    &:hover{
      filter: brightness(0.8)
    }
  }

`