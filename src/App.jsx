import './App.css';
import React, { useState } from 'react';
import { Route, Routes } from 'react-router';
import { Modal } from './components/Modal/Modal';
import { LoginForm } from "./components/Auth/Login/Login";
import { RegisterForm } from "./components/Auth/Register/Register";
import { Header } from './components/Header/Header';


function App() {

  const [modalActive, setModalActive] = useState(true);

  return (
    <>
      <Header modalActive={modalActive} setModalActive={setModalActive} />
      <main>
        <Routes>
          <Route path="/" />
          <Route path="/register" element={
            <Modal modalActive={modalActive} setModalActive={setModalActive} >
              <RegisterForm />
            </Modal>} />
          <Route path="/login" element={
            <Modal modalActive={modalActive} setModalActive={setModalActive} >
              <LoginForm />
            </Modal>} />
        </Routes>
      </main>
    </>
  );
}

export default App;