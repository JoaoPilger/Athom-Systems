import { useState, useEffect, useRef, useCallback } from "react";

const PRODUCTS = [
  {
    id: 1,
    name: "Athom ERP",
    description: "Sistema de gestão empresarial completo.",
    status: "Em Desenvolvimento",
    badge: "Lançamento em breve",
    tags: ["Gestão", "Finanças", "RH"],
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
        <rect x="8" y="18" width="50" height="38" rx="4" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1.5"/>
        <rect x="14" y="24" width="38" height="26" rx="2" fill="white"/>
        <rect x="18" y="28" width="12" height="2" rx="1" fill="#60a5fa"/>
        <rect x="18" y="32" width="20" height="2" rx="1" fill="#bfdbfe"/>
        <rect x="18" y="36" width="16" height="2" rx="1" fill="#bfdbfe"/>
        <rect x="32" y="28" width="14" height="16" rx="1" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1"/>
        <rect x="34" y="34" width="3" height="8" rx="1" fill="#3b82f6"/>
        <rect x="38" y="31" width="3" height="11" rx="1" fill="#60a5fa"/>
        <rect x="42" y="33" width="3" height="9" rx="1" fill="#93c5fd"/>
        <circle cx="58" cy="48" r="14" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1.5"/>
        <path d="M58 42v6l4 2" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="58" cy="48" r="3" fill="#3b82f6"/>
        <path d="M58 36v3M58 57v3M70 48h-3M49 48h-3" stroke="#93c5fd" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 2,
    name: "Athom Analytics",
    description: "Plataforma inteligente de análise de dados.",
    status: "Em Desenvolvimento",
    badge: null,
    tags: ["Dados", "Relatórios", "Avaliação"],
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
        <rect x="10" y="20" width="48" height="32" rx="3" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1.5"/>
        <rect x="14" y="24" width="40" height="24" rx="2" fill="white"/>
        <rect x="17" y="27" width="16" height="1.5" rx="0.75" fill="#93c5fd"/>
        <rect x="17" y="30" width="22" height="1.5" rx="0.75" fill="#bfdbfe"/>
        <rect x="17" y="33" width="18" height="1.5" rx="0.75" fill="#bfdbfe"/>
        <rect x="35" y="26" width="16" height="14" rx="1.5" fill="#eff6ff" stroke="#93c5fd" strokeWidth="1"/>
        <rect x="37" y="33" width="2.5" height="6" rx="1" fill="#3b82f6"/>
        <rect x="40.5" y="30" width="2.5" height="9" rx="1" fill="#60a5fa"/>
        <rect x="44" y="32" width="2.5" height="7" rx="1" fill="#93c5fd"/>
        <rect x="47.5" y="31" width="2" height="8" rx="1" fill="#bfdbfe"/>
        <rect x="22" y="54" width="24" height="3" rx="1.5" fill="#dbeafe"/>
        <rect x="33" y="57" width="2" height="4" rx="1" fill="#93c5fd"/>
        <rect x="8" y="62" width="52" height="2" rx="1" fill="#e0f2fe"/>
        <rect x="48" y="40" width="28" height="20" rx="3" fill="white" stroke="#bfdbfe" strokeWidth="1.5"/>
        <rect x="51" y="43" width="22" height="1.5" rx="0.75" fill="#93c5fd"/>
        <rect x="51" y="46" width="18" height="1.5" rx="0.75" fill="#bfdbfe"/>
        <rect x="51" y="49" width="20" height="1.5" rx="0.75" fill="#bfdbfe"/>
        <rect x="51" y="52" width="14" height="1.5" rx="0.75" fill="#dbeafe"/>
        <rect x="51" y="55" width="16" height="1.5" rx="0.75" fill="#dbeafe"/>
        <rect x="12" y="42" width="14" height="10" rx="2" fill="white" stroke="#bfdbfe" strokeWidth="1"/>
        <circle cx="19" cy="45" r="2.5" fill="#3b82f6" fillOpacity="0.2"/>
        <circle cx="19" cy="45" r="1.2" fill="#3b82f6"/>
        <rect x="13.5" y="49" width="11" height="1.5" rx="0.75" fill="#bfdbfe"/>
      </svg>
    ),
  },
  {
    id: 3,
    name: "Athom Secure",
    description: "Soluções de segurança e controle de acesso.",
    status: "Em Desenvolvimento",
    badge: null,
    tags: ["Segurança", "Acesso", "Controle"],
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
        <path d="M40 12L20 20v20c0 13 9 24 20 28 11-4 20-15 20-28V20L40 12z" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1.5"/>
        <path d="M40 18L24 25v15c0 9.5 7 17.5 16 21 9-3.5 16-11.5 16-21V25L40 18z" fill="white"/>
        <rect x="34" y="32" width="12" height="10" rx="2" fill="#3b82f6" fillOpacity="0.15" stroke="#3b82f6" strokeWidth="1.5"/>
        <path d="M36 32v-3a4 4 0 018 0v3" stroke="#3b82f6" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="40" cy="38" r="2" fill="#3b82f6"/>
        <rect x="39.5" y="38" width="1" height="3" rx="0.5" fill="#3b82f6"/>
      </svg>
    ),
  },
  {
    id: 4,
    name: "Athom Connect",
    description: "Integração e comunicação entre sistemas.",
    status: "Em Breve",
    badge: null,
    tags: ["API", "Integrações", "Sync"],
    icon: (
      <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:"100%",height:"100%"}}>
        <circle cx="40" cy="40" r="22" fill="#dbeafe" stroke="#93c5fd" strokeWidth="1.5"/>
        <circle cx="40" cy="40" r="14" fill="white"/>
        <circle cx="40" cy="26" r="4" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="1.5"/>
        <circle cx="54" cy="49" r="4" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="1.5"/>
        <circle cx="26" cy="49" r="4" fill="#3b82f6" fillOpacity="0.2" stroke="#3b82f6" strokeWidth="1.5"/>
        <line x1="40" y1="30" x2="40" y2="40" stroke="#93c5fd" strokeWidth="1.5"/>
        <line x1="40" y1="40" x2="51" y2="46" stroke="#93c5fd" strokeWidth="1.5"/>
        <line x1="40" y1="40" x2="29" y2="46" stroke="#93c5fd" strokeWidth="1.5"/>
        <circle cx="40" cy="40" r="3" fill="#3b82f6"/>
      </svg>
    ),
  },
];

import './produtos.css';

/* Canvas de partículas conectadas no fundo */
function useParticleCanvas(canvasRef, sectionRef) {
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let W, H;

    const resize = () => {
      const r = sectionRef.current?.getBoundingClientRect();
      W = canvas.width  = r?.width  || window.innerWidth;
      H = canvas.height = r?.height || window.innerHeight;
      particles.forEach(p => { p.x = Math.random() * W; p.y = Math.random() * H; });
    };

    const NUM = 55;
    const particles = Array.from({ length: NUM }, () => ({
      x: Math.random() * (window.innerWidth),
      y: Math.random() * (window.innerHeight),
      vx: (Math.random() - 0.5) * 0.35,
      vy: (Math.random() - 0.5) * 0.35,
      r: Math.random() * 2.2 + 1,
      alpha: Math.random() * 0.4 + 0.15,
    }));

    let mouse = { x: -9999, y: -9999 };
    const onMove = (e) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (rect) { mouse.x = e.clientX - rect.left; mouse.y = e.clientY - rect.top; }
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('resize', resize);
    resize();

    const CONNECT_DIST = 110;
    const MOUSE_DIST   = 90;

    const draw = () => {
      ctx.clearRect(0, 0, W, H);

      for (const p of particles) {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0) p.x = W; if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H; if (p.y > H) p.y = 0;

        const dx = p.x - mouse.x, dy = p.y - mouse.y;
        const dist = Math.sqrt(dx*dx + dy*dy);
        if (dist < MOUSE_DIST) {
          const force = (MOUSE_DIST - dist) / MOUSE_DIST * 0.4;
          p.vx += (dx / dist) * force * 0.08;
          p.vy += (dy / dist) * force * 0.08;
        }

        p.vx *= 0.995; p.vy *= 0.995;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(59,130,246,${p.alpha})`;
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i], b = particles[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const d = Math.sqrt(dx*dx + dy*dy);
          if (d < CONNECT_DIST) {
            const alpha = (1 - d / CONNECT_DIST) * 0.18;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.strokeStyle = `rgba(59,130,246,${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
        const p = particles[i];
        const dx = p.x - mouse.x, dy = p.y - mouse.y;
        const d = Math.sqrt(dx*dx + dy*dy);
        if (d < MOUSE_DIST * 1.5) {
          const alpha = (1 - d / (MOUSE_DIST * 1.5)) * 0.3;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(mouse.x, mouse.y);
          ctx.strokeStyle = `rgba(59,130,246,${alpha})`;
          ctx.lineWidth = 0.9;
          ctx.stroke();
        }
      }

      raf = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('resize', resize);
    };
  }, [canvasRef, sectionRef]);
}

/* Card com inclinação 3D ao passar o mouse */
function TiltCard({ children, active, className, onClick }) {
  const ref = useRef(null);
  const raf = useRef();

  const handleMove = useCallback((e) => {
    if (!active || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const cx = rect.left + rect.width  / 2;
    const cy = rect.top  + rect.height / 2;
    const rx = (e.clientY - cy) / (rect.height / 2) * -10;
    const ry = (e.clientX - cx) / (rect.width  / 2) *  10;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      if (ref.current) {
        ref.current.style.transform =
          `translateY(-12px) scale(1.05) rotateX(${rx}deg) rotateY(${ry}deg)`;
        ref.current.style.boxShadow =
          `${-ry * 1.2}px ${rx * 1.2 + 24}px 64px rgba(59,130,246,0.2), 0 8px 24px rgba(59,130,246,0.1)`;
      }
    });
  }, [active]);

  const handleLeave = useCallback(() => {
    if (!active || !ref.current) return;
    cancelAnimationFrame(raf.current);
    ref.current.style.transform  = '';
    ref.current.style.boxShadow  = '';
    ref.current.style.transition = 'transform 0.5s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.4s ease, opacity 0.5s, border-color 0.4s';
    setTimeout(() => { if (ref.current) ref.current.style.transition = ''; }, 500);
  }, [active]);

  return (
    <div
      ref={ref}
      className={className}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
}

/* Botão com efeito ripple no clique */
function RippleBtn({ onClick, children, ...rest }) {
  const handleClick = (e) => {
    const btn = e.currentTarget;
    const rect = btn.getBoundingClientRect();
    const r = document.createElement('span');
    const size = Math.max(rect.width, rect.height);
    r.className = 'ripple';
    r.style.cssText = `width:${size}px;height:${size}px;left:${e.clientX-rect.left-size/2}px;top:${e.clientY-rect.top-size/2}px`;
    btn.appendChild(r);
    r.addEventListener('animationend', () => r.remove());
    onClick?.();
  };
  return <button {...rest} onClick={handleClick}>{children}</button>;
}

/* Componente principal - Carrossel de produtos */
export default function ProductsCarousel() {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const canvasRef  = useRef(null);
  const sectionRef = useRef(null);
  const total = PRODUCTS.length;

  useParticleCanvas(canvasRef, sectionRef);

  const goTo = (newIndex) => {
    if (isAnimating || newIndex === activeIndex) return;
    setIsAnimating(true);
    setActiveIndex(newIndex);
    setTimeout(() => setIsAnimating(false), 500);
  };

  const prev = () => goTo((activeIndex - 1 + total) % total);
  const next = () => goTo((activeIndex + 1) % total);

  const leftIdx   = (activeIndex - 1 + total) % total;
  const rightIdx  = (activeIndex + 1) % total;
  const visible   = [leftIdx, activeIndex, rightIdx];

  const getCardClass = (idx) => {
    if (idx === activeIndex) return 'card active';
    return `card side side-${idx === leftIdx ? 'left' : 'right'}`;
  };

  return (
    <div className="products">

      <section className="products-section" ref={sectionRef}>
        <canvas className="products-canvas" ref={canvasRef} aria-hidden="true" />

        <div className="products-tech-bg" aria-hidden="true">
          <span className="products-tech-line" />
          <span className="products-tech-line" />
          <span className="products-tech-line" />
        </div>

        <h2 className="products-title">Produtos</h2>

        <div className="carousel-wrapper">
          <RippleBtn className="nav-btn" onClick={prev} aria-label="Anterior">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </RippleBtn>

          <div className="cards-viewport">
            {visible.map((pIdx, position) => {
              const product = PRODUCTS[pIdx];
              const isActive = pIdx === activeIndex;
              return (
                <TiltCard
                  key={product.id}
                  active={isActive}
                  className={getCardClass(pIdx)}
                  onClick={() => {
                    if (position === 0) prev();
                    if (position === 2) next();
                  }}
                >
                  <div className="card-icon">{product.icon}</div>
                  <div className="card-name">{product.name}</div>
                  <div className="card-description">{product.description}</div>
                  <div className="card-status">
                    <span className="status-dot" />
                    {product.status}
                  </div>
                  {product.badge && (
                    <div className="card-badge">{product.badge}</div>
                  )}
                  {isActive && product.tags && (
                    <div className="card-tags">
                      {product.tags.map(t => (
                        <span key={t} className="card-tag">{t}</span>
                      ))}
                    </div>
                  )}
                </TiltCard>
              );
            })}
          </div>

          <RippleBtn className="nav-btn" onClick={next} aria-label="Próximo">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </RippleBtn>
        </div>

        <div className="dots">
          {PRODUCTS.map((_, i) => (
            <button
              key={i}
              className={`dot ${i === activeIndex ? 'active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Produto ${i + 1}`}
            />
          ))}
        </div>

        <button className="more-link">Mais produtos</button>
      </section>
    </div>
  );
}
