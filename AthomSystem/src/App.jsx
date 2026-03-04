import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/header';
import Produtos from './components/produtos/produtos'
import Valores from './components/valores/valores' 
import SobreNos from './components/sobre_nos/sobre_nos';
import QuemSomos from './pages/quem_somos/quem_somos';
import Hero from './components/hero/hero';

function Home() {
  return(
    <>
      <Hero/>
      <Valores/>
      <Produtos/>
      <SobreNos/>
    </>
  )
}

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pages/quem_somos" element={<QuemSomos />} />
      </Routes>
    </>
  )
}

export default App;
