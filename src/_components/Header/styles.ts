import styled from 'styled-components';

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 100%;
  margin: 0 auto;
  padding: 2rem 1rem 12rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width:1023px){
    max-width: 1120px;
  }

  button {
    font-size: 1rem;
    color: #fff;
    background: var(--blue-light);
    padding: 0 2rem;
    border: 0;
    border-radius: 0.25rem;
    height: 3rem;
    transition: filter 0.3s ease-in;

    &:hover {
      filter: brightness(0.6);
    }
  }
  @media screen and (max-width:768px){
    img{
      width: 45%;
    }
  }

`;
