import foto1 from '../imgs/estudios-hover.jpeg';
import foto2 from '../imgs/estudios.jpg';
import foto3 from '../imgs/estudios-hover.jpeg';

export function About(): string{

    // setTimeOut
    setTimeout(()=>{

        // arreglo de hover
        const imgHover: string[] = [foto1,foto2,foto3];
        const imgOriginal: string[] = [foto1,foto2,foto3];
        document.querySelectorAll('.skill-group-img').forEach((img,indice)=>{

            // primer envento
            img.addEventListener('mouseenter',()=>{
                (img as HTMLImageElement).src = imgHover[indice];
            });
            //segundo evento
            img.addEventListener('mouseleave',()=>{
                (img as HTMLImageElement).src = imgOriginal[indice]
            })
        })
    },0) ;
    return `
    
    `;
}