import '../styles/about.css';
import foto1 from '../imgs/foto1.jpg';
import estudios from '../imgs/estudios.jpg';
import proyectos from '../imgs/proyectos.jpg';
import experiencias from '../imgs/experiencias.png';
import hoverImg from '../imgs/estudios-hover.jpeg';
import proyectosHover from '../imgs/proyectos-hover.jpg';
import experienciasHover from '../imgs/experiencias-hover.jpg';
import video from '../imgs/background.mp4'


export function About(): string {

        setTimeout(() => {
            // arrego hover○
            const hoverImages: string[] = [
                hoverImg,
                proyectosHover,
                experienciasHover
            ];
            // arreglo original
            const originalImages: string[]= [estudios, proyectos, experiencias];
            // foreach con document query
            document.querySelectorAll('.img-skills-group').forEach((img, i) => {
                img.addEventListener('mouseenter', () => {
                    (img as HTMLImageElement).src = hoverImages[i];
                });
                img.addEventListener('mouseleave', () => {
                    (img as HTMLImageElement).src = originalImages[i];
                });
            });
        },0);
    return `
    <div class="about-container">
        <!-- Video de fondo -->
        <video class="video-background" autoplay muted loop playsinline>
            <source src="${video}" type="video/mp4">
            Tu navegador no soporta videos en HTML5.
        </video>
        <div class="main">
            <div class="profile">
                <img src="${foto1}" alt="Profile Photo">
            </div>
            <div class="bio">
                <div class="description">
                    <h1> Descripción </h1>
                    <p>Desarrollador Full Stack con experiencia en el diseño, desarrollo y despliegue de aplicaciones web modernas. Especializado en tecnologías frontend como React, TypeScript y Vite, así como en backend con Node.js y bases de datos relacionales y no relacionales. Apasionado por crear soluciones eficientes, escalables y con una excelente experiencia de usuario. Comprometido con el aprendizaje continuo y el trabajo colaborativo en equipos multidisciplinarios.</p>
                </div>
                <div class="skills">
                <div class="skills-group">
                        <img class="img-skills-group" src="${estudios}" alt="Skills">
                        <p class="p-skills-group">Titulos</p>
                </div>
                <div class="skills-group">
                        <img class="img-skills-group" src="${proyectos}" alt="Skills">
                        <p class="p-skills-group">Proyectos</p>
                </div>
                <div class="skills-group">
                        <img class="img-skills-group" src="${experiencias}" alt="Skills">
                        <p class="p-skills-group">Experiencia</p>
                </div>
                </div>
            </div>
        </div>
    </div>
    `;
}