import React, {useRef } from "react";
import "./sobre_nos.css";
import { Link } from "react-router-dom";

const SobreNos = () => {
  const sectionRef = useRef(null);
  
  return (
    <section className="sobre-nos" ref={sectionRef}>
      <div className="sobre-nos_container">
    
        <h2 className="sobre-nos_titulo">
          Sobre <span className="sobre-nos_titulo">nós</span>
        </h2>

        <p className="sobre-nos_texto">
          A <strong>Athom System</strong> nasceu da união entre{" "}
          <strong>tecnologia</strong> e <strong>propósito</strong>. Somos uma
          empresa de desenvolvimento de software comprometida em entregar
          soluções <strong>inovadoras</strong>, <strong>confiáveis</strong> e{" "}
          <strong>eficientes</strong> para negócios que buscam <strong>evoluir</strong>.
          Nossa missão é simples: <strong>transformar desafios</strong> em
          <strong>resultados</strong> através da <strong>tecnologia certa</strong>.
        </p>

        <a href="/pages/quem_somos" className="sobre-nos_botao" target="_blank">
          Conheça a Athom System
        </a>
      </div>
    </section>
  );
};

export default SobreNos;