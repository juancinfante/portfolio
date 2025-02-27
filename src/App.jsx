import './App.css'
import perfil from './assets/perfil.jpg';
import fastlibery from './assets/fastdelivery.png';
import texder from './assets/texder.png';
import gamesvibes from './assets/gamesvibes.png';
import portfolio from './assets/portafolio.png';
import unamerienda from './assets/unameriendaespecial.png';
import cuandojuega from './assets/cuandojuega.png';
import github from './assets/github.png';
import mongodb from './assets/mongodb.png';
import react from './assets/react.png';
import express from './assets/express.png';
import nextjs from './assets/nextjs.png';
import nextauth from './assets/nextauth.png';
import node from './assets/node.png';
import jwt from './assets/jwt2.png';
import html5 from './assets/html5.png';
import bs5 from './assets/bootstrap.png';
import vyom from './assets/vyom.png';
import css from './assets/css.png';
import javascript from './assets/javascript.png';
import link from './assets/link.png';
import terraviva from './assets/terraviva.png';
import promptopia from './assets/promptopia.jpg';
import terravivaback from './assets/terraviva-back.png';
import mercadopago from './assets/mercadopago.png';
import clubcyt from './assets/clubcyt.png';
import day from './assets/day.png';
import night from './assets/night.png';
import Card from './components/Card';
import Form from './components/Form';
import { useState } from 'react';
import Toggle from './components/Toggle';


function App() {
  const [isDark, setIsDark] = useState(true);
  return (
    <>
    <div data-theme={isDark ? "dark" : "light"}>
      <div className="container">
        <div className="header">
          <div className="perfil">
            
          <img src={perfil} alt="" />
          <p>Juan Cruz Infante</p>
          </div>
          <Toggle
          isDarkImage={isDark ? night : day}  
          isChecked={isDark}
           handleChange={() => setIsDark(!isDark)} />
        </div>
        <h1 className='titulo'>Sobre mi</h1>
        <div className="info">
          <p>
          Hola! Soy Programador Full Stack</p><p> Apasionado por la creación de aplicaciones web. Tengo experiencia trabajando tanto en el frontend como en el backend, utilizando tecnologías como React, Next.js, Node.js, PHP, MongoDB y MySQL.
          </p>
          <p>
💡        Siempre estoy buscando oportunidades para aprender y crecer en este apasionante mundo tecnológico. Creo en la mejora continua y en estar al tanto de las últimas tendencias y avances en el desarrollo de software.
          </p>
          <p className='links'>
            <a data-theme={isDark ? "color-withe" :""} href="https://github.com/juancinfante" target="_blank" rel="noreferrer">Github</a>
            <span>·</span>
            <a data-theme={isDark ? "color-withe" :""} href="https://www.linkedin.com/in/juan-cruz-infante/"  target="_blank" rel="noreferrer">Linkedin</a>
          </p>
        </div>
        <h1 className='titulo'>Proyectos</h1>
        <div className="proyectos">


          
          <Card
          portada={clubcyt}
          titulo="Clubcyt"
          año="2025"
          descripcion="Plataforma de membresía"
          images={[nextjs, nextauth,node,mongodb,express,mercadopago,jwt]}
          logos={[github, link]}
          nets={["Github", "Live"]}
          links={["https://github.com/juancinfante","https://clubcyt.com/"]}
          />
          <Card
          portada={terraviva}
          titulo="Terraviva"
          año="2024"
          descripcion="Diario digital"
          images={[react,node,mongodb,express,jwt]}
          logos={[github, link]}
          nets={["Github", "Live"]}
          links={["https://github.com/juancinfante/terraviva-front","https://terraviva.com.ar/"]}
          />
          <Card
          portada={terravivaback}
          titulo="Terraviva API"
          año="2024"
          descripcion="Diario digital"
          images={[react,node,mongodb,express,jwt]}
          logos={[github, link]}
          nets={["Github", "Live"]}
          links={["https://github.com/juancinfante/terraviva-api","https://terrraviva.vercel.app/admin"]}
          />
          <Card
          portada={vyom}
          titulo="VYOM movement"
          año="2024"
          descripcion=""
          images={[html5,bs5,css,react]}
          logos={[github, link]}
          nets={["Github", "Live"]}
          links={["https://github.com/juancinfante/vyom-movement","https://vyom-movement.vercel.app/"]}
          />
          <Card
          portada={promptopia}
          titulo="Promptopia"
          año="2024"
          descripcion="Blog"
          images={[nextjs, nextauth, mongodb,jwt]}
          logos={[github, link]}
          nets={["Github", "Live"]}
          links={["https://github.com/juancinfante/nextjs-shareprompts","https://shareprompts-mf1f4lqzh-juancinfantes-projects.vercel.app/"]}
          />
          <Card
          portada={fastlibery}
          titulo="FastLibery"
          año="2023"
          descripcion="Web para los clientes elijan entre distintos menús del restaurante
          y puedan hacer su pedido."
          images={[react,node,mongodb,express,jwt]}
          logos={[github, link]}
          nets={["Github", "Live"]}
          links={["https://github.com/juancinfante/Backend_ProyectoFinal_RC","https://fastlibery.netlify.app/"]}
          />
          <Card
          portada={texder}
          titulo="Texder"
          año="2023"
          descripcion="Tienda de Zapatillas, manejando una base de datos de usuarios de manera local utlizando localstorage."
          images={[html5,bs5,css,javascript]}
          logos={[github, link]}
          nets={["Github", "Live"]}
          links={["https://github.com/juancinfante/Proyecto-Modulo-2-RC45i-","https://texder.netlify.app/"]}
          />
          <Card
          portada={gamesvibes}
          titulo="Games Vibes"
          año="2023"
          descripcion="Blog de noticias sobre video juegos desarrollada con bootstrap y javascript"
          images={[html5,bs5,css,javascript]}
          logos={[github, link]}
          nets={["Github", "Live"]}
          links={["https://github.com/juancinfante/Proyecto-Modulo-1-RC45i","https://game-vibes-st.netlify.app/"]}
          />         
          <Card
          portada={cuandojuega}
          titulo="Cuando Juega"
          año="2023"
          descripcion="Web que te muestrar los ultimos 10 partidos de un equipo. Consumiendo api."
          images={[html5,css,javascript]}
          logos={[github, link]}
          nets={["Github", "Live"]}
          links={["https://github.com/juancinfante/cuando-juega","https://cuandojuega.netlify.app/"]}
          />         
          <Card
          portada={unamerienda}
          titulo="Una Merienda Especial"
          año="2023"
          descripcion="Landing Page"
          images={[react]}
          logos={[github, link]}
          nets={["Github", "Live"]}
          links={["https://github.com/juancinfante/unameriendaespecial","https://unameriendaespecial.vercel.app/"]}
          />         
          <Card
          portada={portfolio}
          titulo="Portfolio"
          año="2020"
          descripcion="Landing Page"
          images={[html5,bs5,css,javascript]}
          logos={[github, link]}
          nets={["Github", "Live"]}
          links={["https://github.com/juancinfante/landing_page_mia","https://juancinfante.github.io/landing_page_mia/"]}
          /> 
      </div>
          <div className="row">
            <div className="col-12">
              
          </div>
          <h1 className='titulo'>Contacto</h1>
          <Form isDark= {isDark} />        
        </div>
            </div>
        <div className="footer">
          <p>Desarrollado con ❤️ por <a href="https://github.com/juancinfante/" target="_blank" rel="noreferrer">@juancinfante</a></p>
        </div>
      </div>
    </>
  )
}

export default App
