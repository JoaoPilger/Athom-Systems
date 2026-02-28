import './quem_somos.css';

export default function QuemSomos() {

  return (
    <section className="quem_somos_section">

      <div className="quem_somos">
        <div className="card_qs">
          <img src="/security.png" alt="" />
          <div className="text">
            <h2>Confiabilidade</h2>
            <p>Sistemas seguros, estáveis e feitos para funcionar sempre.</p>
          </div>
        </div>

        <div className="card_qs">
          <img src="/raio.png" alt="" />
          <div className="text">
            <h2>Eficiência</h2>
            <p>Tecnologia que simplifica processos e gera resultados.</p>
          </div>
        </div>

        <div className="card_qs">
          <img src="/foguete.png" alt="" />
          <div className="text">
            <h2>Inovação</h2>
            <p>Soluções modernas que antecipam o futuro.</p>
          </div>
        </div>
      </div>

    </section>
  );


}