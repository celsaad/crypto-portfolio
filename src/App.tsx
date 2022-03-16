import React, { Suspense } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css';
import Header from './components/layout/Header';
import MainContent from './components/layout/MainContent';
import Box from './components/UI/Box';
import Login from './pages/Login';
import NewTransaction from './pages/NewTransaction';
import Overview from './pages/Overview';
import Transactions from './pages/Transactions';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <MainContent>
          <Suspense fallback={<Box>Loading...</Box>}>
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/login" element={<Login />} />
              <Route path='/transactions' element={<Transactions />} />
              <Route path='/new-transaction' element={<NewTransaction />} />
              <Route path="*" element={<h1>Not Found</h1>} />
            </Routes>
          </Suspense>
        </MainContent>
      </BrowserRouter>
    </>
  );
}

export default App;
