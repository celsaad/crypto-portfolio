import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import MainContent from './components/layout/MainContent';
import NewTransaction from './pages/NewTransaction';
import Overview from './pages/Overview';
import Transactions from './pages/Transactions';

function App() {
  return (
    <>
      <BrowserRouter>
      <Header />
        <MainContent>
          <Routes>
            <Route path='/' element={<Overview />} />
            <Route path='/transactions' element={<Transactions />} />
            <Route path='/new-transaction' element={<NewTransaction />} />
          </Routes>
        </MainContent>
      </BrowserRouter>
    </>
  );
}

export default App;
