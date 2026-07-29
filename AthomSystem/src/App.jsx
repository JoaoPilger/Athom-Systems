import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Hero from './components/hero/hero'
import Footer from './components/footer/footer';
import Produtos from './components/produtos/produtos'
import Valores from './components/valores/valores' 
import SobreNos from './components/sobre_nos/sobre_nos';
import QuemSomos from './pages/quem_somos/quem_somos';
import Login from './pages/cadastro_login/login';
import Cadastro from './pages/cadastro_login/cadastro';

function Home() {
  return(
    <div className="home-page">
      <Header/>
      <Hero/>
      <Valores/>
      <Produtos/>
      <SobreNos/>
      <Footer/>
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pages/quem_somos" element={<QuemSomos />} />
      <Route path="/login" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
    </Routes>
  )
}

export default App;
