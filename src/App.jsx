import './App.css'
import perfil from './assets/85.jpg';
import fastlibery from './assets/fastdelivery.png';
import texder from './assets/texder.png';
import gamesvibes from './assets/gamesvibes.png';
import github from './assets/github.png';
import link from './assets/link.png';
function App() {

  return (
    <>
      <div className="container">
        <div className="header">
          <img src={perfil} alt="" />
          <p>Juan Cruz Infante</p>
        </div>
        <h1>Sobre mi</h1>
        <div className="info">
          <p>
          Hola! Soy Programador Full Stack MERN Jr</p><p> Apasionado por la creación de aplicaciones web. Tengo experiencia trabajando tanto en el frontend como en el backend, utilizando tecnologías como React, Next.js, Node.js, PHP, MongoDB y MysSQL.
          </p>
          <p>
💡        Siempre estoy buscando oportunidades para aprender y crecer en este apasionante mundo tecnológico. Creo en la mejora continua y en estar al tanto de las últimas tendencias y avances en el desarrollo de software.
          </p>
          <p className='links'>
            <a href=''>Github</a>
            <span>·</span>
            <a href=''>Linkedin</a>
          </p>
        </div>
        <h1>Proyectos</h1>
        <div className="proyectos">
          <div className="proyecto">
            <img src={fastlibery} alt="" />
            <h3>FastLibery <span>2023</span></h3>
            <p>Aplicación para que los clientes elijan entre distintos menús del restaurante
              y puedan hacer su pedido.</p>
            <div className="iconos">
              <div className="icono">
                <p>React js</p>
              </div>
              <div className="icono">
                <p>MongoDB</p>
              </div>
              <div className="icono">
                <p>Express</p>
              </div>
              <div className="icono">
                <p>Node js</p>
              </div>
              <div className="icono">
                <p>JWT</p>
              </div>
            </div>
            <div className="links2">
              <div className="links2-inner">
              <img src={github} alt="" />
              <p><a href="https://github.com/juancinfante/Proyecto-Modulo-2-RC45i-">Github</a></p>
              </div>
              <div className="links2-inner">
              <img src={link} alt="" />
              <p><a href="https://fastlibery.netlify.app/">Live</a></p>
              </div>
            </div>
          </div>
          <div className="proyecto">
            <img src={texder} alt="" />
            <h3>Texder <span>2023</span></h3>
            <p>Tienda de Zapatillas, manejando una base de datos de usuarios de manera local utlizando localstorage.</p>
            <div className="iconos">
              <div className="icono">
                <p>HTML5</p>
              </div>
              <div className="icono">
                <p>Boostrap 5</p>
              </div>
              <div className="icono">
                <p>Javascript</p>
              </div>
              <div className="icono">
                <p>CSS</p>
              </div>
            </div>
            <div className="links2">
              <div className="links2-inner">
              <img src={github} alt="" />
              <p><a href="https://github.com/juancinfante/Backend_ProyectoFinal_RC">Github</a></p>
              </div>
              <div className="links2-inner">
              <img src={link} alt="" />
              <p><a href="https://texder.netlify.app/">Live</a></p>
              </div>
            </div>
          </div>
          <div className="proyecto">
            <img src={gamesvibes} alt="" />
            <h3>Games Vibes <span>2023</span></h3>
            <p>
              Blog de noticias sobre video juegos desarrollada con bootstrap</p>
            <div className="iconos">
            <div className="icono">
                <p>HTML5</p>
              </div>
              <div className="icono">
                <p>Boostrap 5</p>
              </div>
              <div className="icono">
                <p>Javascript</p>
              </div>
              <div className="icono">
                <p>CSS</p>
              </div>
            </div>
            <div className="links2">
              <div className="links2-inner">
              <img src={github} alt="" />
              <p><a href="https://github.com/juancinfante/Proyecto-Modulo-1-RC45i">Github</a></p>
              </div>
              <div className="links2-inner">
              <img src={link} alt="" />
              <p><a href="https://game-vibes-st.netlify.app/">Live</a></p>
              </div>
            </div>
          </div>
          
          
        </div>
      </div>
    </>
  )
}

export default App
