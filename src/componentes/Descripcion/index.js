import './Descripcion.css';
import foto from './Yusle.jpg';

function Descripcion() {
    return (
        <section className="section_descripcion">
            <img src={foto} alt="Foto" className="foto" loading="lazy" />
            <div className="text-container">
                <h3 className="descrip">
                    Soy estudiante, especializándome en desarrollo web frontend y desarrollo de aplicaciones iOS.
                    Actualmente estoy participando en el proyecto Oracle ONE en Alura Latam.
                </h3>
                <div className="icon-container">
                    <a href="https://github.com/YurleidisLF" target="_blank" rel="noopener noreferrer">
                        <img src="./iconos/github-icon-1.svg" alt="Github" className="icono" loading="lazy" />
                    </a>
                    <a href="https://www.instagram.com/fuentesyurleidys/" target="_blank" rel="noopener noreferrer">
                        <img src="./iconos/insta.png" alt="Instagram" className="icono" loading="lazy" />
                    </a>
                    <a href="https://www.linkedin.com/in/yurleidis-l%C3%B3pez-fuentes-543282314/" target="_blank" rel="noopener noreferrer">
                        <img src="./iconos/linkedin.png" alt="Linkedin" className="icono" loading="lazy" />
                    </a>
                    <a href="iconos/cv.pdf" target="_blank" rel="noopener noreferrer">
                        <img src="./iconos/cv.png" alt="Hoja de vida" className="icono" loading="lazy" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Descripcion;
