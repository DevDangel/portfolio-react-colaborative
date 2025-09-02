import '../styles/about.css';
import foto1 from '../imgs/foto1.jpg';
import skills1 from '../imgs/skills.jpg';

export function About(): string {
    // ...existing code...
    setTimeout(() => {
        document.querySelectorAll('.img-skills-group').forEach(img => {
            img.addEventListener('mouseenter', () => {
                (img as HTMLImageElement).src = 'src/imgs/hover-img.jpeg';
            });
            img.addEventListener('mouseleave', () => {
                (img as HTMLImageElement).src = skills1;
            });
        });
    }, 0);
    return `
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
                    <img class="img-skills-group" src="${skills1}" alt="Skills">
                    <p class="p-skills-group">Titulos</p>
               </div>
               <div class="skills-group">
                    <img class="img-skills-group" src="${skills1}" alt="Skills">
                    <p class="p-skills-group">Proyectos</p>
               </div>
               <div class="skills-group">
                    <img class="img-skills-group" src="${skills1}" alt="Skills">
                    <p class="p-skills-group">Experiencia</p>
               </div>
            </div>
        </div>
    </div>
    `;
}