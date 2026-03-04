import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        
        <div className="hero-text">
          <h1>
            ATHOM <br />
            <span>SYSTEM</span>
          </h1>

          <p>
            <strong>Athom System Inovação</strong> que move negócios,
            <strong> Tecnologia</strong> que constrói o futuro.
          </p>

          <button className="hero-btn">Saiba mais</button>
        </div>
        <img src="/imagemhero.png" alt="Dashboard" className="imagemhero"/>

      </div>
    </section>
  );
}

export default Hero;