import React from 'react';
import logoImg from '../../_assets/img/logo.svg';
import { Container, Content } from './styles';

interface HeaderProps{
  onOpenNewTransactionModal: () => void
}


export function Header({onOpenNewTransactionModal}:HeaderProps) {
  

  return (
    <>
      <Container>
        <Content>
          <img src={logoImg} alt="This is a logo brand from What's my money" />
          <button type="button" onClick={onOpenNewTransactionModal}>
            Nova transação
          </button>
          
        </Content>
      </Container>
    </>
  );
}
