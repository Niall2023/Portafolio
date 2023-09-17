import React from 'react'
import imagen1 from  '../assets/imagen1.jpg'
import imagen2 from  '../assets/imagen2.png'
import imagen3 from  '../assets/imagen3.png'
import imagen4 from  '../assets/imagen4.png'




const Trabajos = () => {
  return (
    <section className='trabajos'>
    <h2 className='titulo'>Mi portafolio</h2>
    <span className='WordkDesc'>Bienvenido a mi mundo de líneas de código y soluciones creativas! Soy Sergio Quintero, un apasionado desarrollador de software con una sólida trayectoria en la creación de aplicaciones y sistemas que marcan la diferencia. A lo largo de mi carrera, he tenido el privilegio de trabajar en una variedad de proyectos emocionantes y desafiantes, y me complace compartir algunos de ellos contigo en este portafolio.</span>
    <div className='Trabajosimg'>
        <img src={imagen1} alt="" className="Trabajosimg"/>
        <img src={imagen2} alt="" className="Trabajosimg"/>
        <img src={imagen3} alt="" className="Trabajosimg"/>
        <img src={imagen4} alt="" className="Trabajosimg"/>
        
    </div>

    </section>
  );
}

export default Trabajos
