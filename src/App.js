import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';

import Home from './components/pages/Home'
import Contato from './components/pages/Contato'
import Sobre from './components/pages/Sobre'
import Produto from './components/pages/Produto'
import Entrar from './components/pages/Entra';
import CriarConta from './components/pages/CriarConta';
import Pessoal from './components/register/Pessoal';
import Form from './components/register/Form';

// import Container from './components/layout/Container';
import NavBar from './layout/NavBar';
import Container from './layout/Container';
import Footer from './layout/Footer';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Container customClass="min-height">
          <Routes>
            <Route exact path="/" element={<Home />}>Home</Route>
            <Route exact path="/contato" element={<Contato />}>Contato</Route>
            <Route exact path="/sobre" element={<Sobre />}>Sobre Nós</Route>
            <Route exact path="/produto" element={<Produto />}>Produto</Route>
            <Route exact path="/entrar" element={<Entrar />}>Entrar</Route>
            <Route exact path="/criarConta" element={<Form />}>Criar Conta</Route>
            <Route exact path="/pessoal" element={<Pessoal />}>Pessoal</Route>
          </Routes>
        </Container>
        <Footer />


      </Router>
    </div>
  );
}

export default App;
