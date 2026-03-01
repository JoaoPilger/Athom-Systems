import { useState, useEffect} from 'react';
import './quem_somos.css';

const members = [
  {
    nome: "Murilo Jochkeck",
    foto: "/public/teste.jpg",
    descricao:
      "Lindo, tesão, bonito e gostosão",
  },
  {
    nome: "João Pilger",
    foto: "/public/pilger.jpg",
    descricao:
      "Gay",
  },
  {
    nome: "Yuri Tedesco Germano da Silva Santos Oliveira",
    foto: "/public/yuri.jpg",
    descricao:
      "Co-Fundador do NEGES",
  },
  {
    nome: "Ezequiel Chitortinha",
    foto: "/public/ezequiel.jpg",
    descricao:
      "Homossexual",
  },
  {
    nome: "Thiago Balbinot",
    foto: "/public/thiago.jpg",
    descricao:
      "Membro do NEGES",
  },
];

const TOTAL = members.length;
const infiniteMembers = [...members, ...members, ...members];

function TeamCarousel() {
  const [current, setCurrent] = useState(TOTAL);
  const [transitioning, setTransitioning] = useState(true);

  const goTo = (index) => {
    setTransitioning(true);
    setCurrent(index);
  };

  useEffect(() => {
    if (!transitioning) return;
    const id = setTimeout(() => {
      if (current <= 0) {
        setTransitioning(false);
        setCurrent(TOTAL);
      } else if (current >= TOTAL * 2) {
        setTransitioning(false);
        setCurrent(TOTAL);
      }
    }, 500);
    return () => clearTimeout(id);
  }, [current, transitioning]);

  const getCardStyle = (i) => {
    const diff = i - current;
    if (diff === 0)
      return { zIndex: 5, transform: "translateX(0) scale(1)", opacity: 1 };
    if (diff === -1)
      return { zIndex: 3, transform: "translateX(-54%) scale(0.82)", opacity: 0.6 };
    if (diff === 1)
      return { zIndex: 3, transform: "translateX(54%) scale(0.82)", opacity: 0.6 };
    if (diff === -2)
      return { zIndex: 1, transform: "translateX(-96%) scale(0.68)", opacity: 0.3 };
    if (diff === 2)
      return { zIndex: 1, transform: "translateX(96%) scale(0.68)", opacity: 0.3 };
    return { zIndex: 0, transform: "translateX(0) scale(0.6)", opacity: 0 };
  };

  return (
    <div className="carousel_wrapper">
      <p className="carousel_titulo">As pessoas por trás da ideia</p>

      <div className="carousel_stage">
        {infiniteMembers.map((member, i) => {
          const diff = i - current;
          if (Math.abs(diff) > 2) return null;
          const style = getCardStyle(i);
          return (
            <div
              key={`${member.nome}-${i}`}
              className={`carousel_card ${diff === 0 ? "active" : ""}`}
              style={{
                ...style,
                transition: transitioning
                  ? "transform 0.5s cubic-bezier(0.25,0.46,0.45,0.94), opacity 0.5s ease"
                  : "none",
              }}
              onClick={() => diff !== 0 && goTo(i)}
            >
              <div className="card_foto">
                {member.foto
                  ? <img src={member.foto} alt={member.nome} />
                  : null
                }
              </div>
              <div className="card_carousel_body">
                <h3 className="card_member_nome">{member.nome}</h3>
                <p className="card_member_descricao">{member.descricao}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

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

      <TeamCarousel />

    </section>
  );
}