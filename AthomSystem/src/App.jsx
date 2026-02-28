import { useState } from 'react'
import Produtos from './components/produtos/produtos'
import Valores from './components/valores/valores' 
import SobreNos from './components/sobre_nos/sobre_nos';

function App() {
  return(
    <>
      <Valores/>
      <Produtos/>
      <SobreNos/>
    </>
  )
}

export default App;
