import './valores.css'
import { useEffect, useRef } from "react";
import VanillaTilt from "vanilla-tilt";

export default function Valores(){

    const tiltRef = useRef(null);

    useEffect(() => {
        const cards = document.querySelectorAll(".card")
        VanillaTilt.init(cards, {
        max: 15,
        speed: 300
        });
    }, []);

    return(
        <section className="valores">
            <div className="card" ref={tiltRef}>
                <img src="/security.png" alt=""/>
                <div className="text">
                    <h2>Confiabilidade</h2>
                    <p>Software sólido e estável, construído para funcionar quando você mais precisa, com consistência e segurança em cada operação.</p>
                </div>
            </div>

            <div className="card" ref={tiltRef}>
                <img src="/raio.png" alt=""/>
                <div className="text">
                    <h2>Eficiência</h2>
                    <p>Soluções que otimizam processos e maximizam resultados, tecnologia que trabalha a favor do seu negócio.</p>
                </div>
            </div>
                
            <div className="card" ref={tiltRef}>
                <img src="/foguete.png" alt=""/>
                <div className="text">
                    <h2>Inovação</h2>
                    <p> Sempre à frente, aplicando as mais recentes tecnologias para criar soluções que evoluem junto com o mercado.</p>
                </div>
            </div>
        </section>
    )
}