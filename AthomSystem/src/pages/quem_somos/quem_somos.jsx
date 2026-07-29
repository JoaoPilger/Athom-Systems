import { useState, useEffect, useRef } from 'react';
import Header from '../../components/header/header'
import Footer from '../../components/footer/footer'
import './quem_somos.css';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return (
    <nav className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <a href="#" className="nav__logo">
        <img src="/logo.png" alt="Athom Systems" />
      </a>
      <ul className="nav__links">
        <li><a href="#sobre">Quem somos</a></li>
        <li className="nav__dropdown">
          <a href="#produtos">Produtos <span>›</span></a>
        </li>
        <li><a href="#contato" className="nav__cta">Contato</a></li>
      </ul>
    </nav>
  );
};

const Particles = () => {
  const canvasRef = useRef(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let raf;
    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);
    const dots = Array.from({ length: 120 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2.5 + 1,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      alpha: Math.random() * 0.5 + 0.2,
    }));
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      dots.forEach((d) => {
        d.x += d.vx;
        d.y += d.vy;
        if (d.x < 0 || d.x > canvas.width) d.vx *= -1;
        if (d.y < 0 || d.y > canvas.height) d.vy *= -1;
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(70, 130, 200, ${d.alpha})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);
  return <canvas className="particles" ref={canvasRef} />;
};

const Hero = () => (
  <section className="hero">
    <Particles />
    <div className="hero__content">
      <h1 className="hero__title">Athom Systems</h1>
      <p className="hero__subtitle">O NÚCLEO DA SUA INOVAÇÃO.</p>
      <p className="hero__body">
        Somos uma equipe de profissionais dedicados a{" "}
        <strong>transformar ideias em soluções tecnológicas de alto impacto</strong>.
        Com expertise técnica e foco em <strong>resultados</strong>, desenvolvemos
        software que une <strong>eficiência, confiabilidade e inovação</strong>.
        Entendemos que cada negócio tem desafios únicos, por isso trabalhamos de
        forma <strong>próxima e comprometida</strong> com cada cliente, porque para
        nós, cada projeto importa e cada entrega precisa ser <strong>excelente</strong>.
      </p>
      <a href="#pmv" className="hero__link">A opção certa para você ↓</a>
    </div>
  </section>
);

const cards = [
  {
    title: "Propósito",
    text: "Existimos para transformar a forma como empresas utilizam a tecnologia. Acreditamos que soluções bem desenvolvidas geram impacto real, duradouro e constroem um futuro mais eficiente para os negócios.",
    delay: 0,
  },
  {
    title: "Missão",
    text: "Nossa missão é desenvolver software de alta qualidade que simplifique processos e impulsione resultados. Trabalhamos com rigor técnico e dedicação para superar as expectativas dos nossos clientes em cada projeto.",
    delay: 100,
  },
  {
    title: "Valores",
    text: "Inovação, confiabilidade e compromisso guiam cada decisão que tomamos. Acreditamos que tecnologia séria, aliada a uma equipe comprometida, é o que realmente faz a diferença para os nossos clientes.",
    delay: 200,
  },
];

const PMV = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.2 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="pmv" id="pmv" ref={sectionRef}>
      <div className="pmv__header">
        <h2 className="pmv__heading">Propósito, Missão e Valores</h2>
        <p className="pmv__subheading">
          Apoiamos quantitativamente a tomada de decisões em casos reais na cadeia de suprimentos.
        </p>
      </div>
      <div className="pmv__grid">
        {cards.map((card, i) => (
          <article
            key={i}
            className={`pmv__card ${visible ? "pmv__card--visible" : ""}`}
            style={{ animationDelay: `${card.delay}ms` }}
          >
            <div className="pmv__card-image" aria-hidden="true">
              <div className="pmv__card-dots">
                {Array.from({ length: 30 }).map((_, j) => (
                  <span
                    key={j}
                    className="pmv__dot"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      width: `${Math.random() * 4 + 2}px`,
                      height: `${Math.random() * 4 + 2}px`,
                      opacity: Math.random() * 0.6 + 0.2,
                    }}
                  />
                ))}
              </div>
            </div>
            <div className="pmv__card-body">
              <h3 className="pmv__card-title">{card.title}</h3>
              <p className="pmv__card-text">{card.text}</p>
            </div>
          </article>
        ))}
      </div>
      
    </section>
  );
};

function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <PMV />
    </div>
  );
}


const members = [
  {
    nome: "Murilo Jochkeck",
    foto: "/public/murilo.png",
    descricao:
      "Lindo, tesão, bonito e gostosão",
  },
  {
    nome: "João Pilger",
    foto: "/public/pilger.png",
    descricao:
      "Gay",
  },
  {
    nome: "Yuri Tedesco Germano",
    foto: "/public/yuri.png",
    descricao:
      "Co-Fundador do NEGES",
  },
  {
    nome: "Ezequiel Chitolina",
    foto: "/public/ezequiel.png",
    descricao:
      "Homossexual",
  },
  {
    nome: "Thiago Balbinot",
    foto: "/public/thiago.png",
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
    <div className="app">
      <Header></Header>
      <Hero />
      <PMV />
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
      <Footer></Footer>
    </div>
  );
}