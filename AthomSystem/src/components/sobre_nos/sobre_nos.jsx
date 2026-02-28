import React, { useEffect, useRef } from "react";
import "./sobre_nos.css";

const SobreNos = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = sectionRef.current?.querySelectorAll(".animate");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

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

        <a href="#" className="sobre-nos_botao">
          Conheça a Athom System
        </a>
      </div>
    </section>
  );
};

export default SobreNos;