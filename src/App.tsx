import React, { useState } from 'react';
import Modal from 'react-modal';
import { Header } from './_components/Header/index';
import { Dashboard } from './_features/Dashboard/index';
import { NewTransactionModal } from './_components/NewTransactionModal/index';

import { TransactionProvider } from './_constants/Hooks/TransactionsContext';

import { GlobalStyled } from './helpers/Global';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModal, setIsNewTransactionModal] = useState(false);

  function handleOpenNewTransacticonModal() {
    setIsNewTransactionModal(true);
  }
  function handleCloseNewTransacticonModal() {
    setIsNewTransactionModal(false);
  }

  return (
    <>
      <TransactionProvider>
        <GlobalStyled />
        <Header onOpenNewTransactionModal={handleOpenNewTransacticonModal} />
        <NewTransactionModal
          isOpen={isNewTransactionModal}
          onRequestClose={handleCloseNewTransacticonModal}
        />
        <Dashboard />
      </TransactionProvider>
    </>
  );
}
