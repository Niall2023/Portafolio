import React from 'react'
import sql from  '../assets/sql.png'

import java from  '../assets/java.png'


const Contact = () => {
  return (
    <section className="contactpage"> 
    <div id="clientes">

        <h1 className="contacttitulo">Aprendizaje</h1>
        <p className="clienteDesc">
        En mi proceso como programador y analisis de datos ire mejorando mis proyectos y se iran subiendo por este mismo, soy sergio un joven amante a tecnologia que esta iniciando su proceso como programador en busca de innovar y aprender en esta industria, espero en el proceso mejorar y cambiar cosas sobre mis proyectos asi para ayudar a los demas y aprender con los demas como un equipo.
        </p>
        <div className="clientsimgs">
            <img src={sql} alt="Client" className="clientsimg"/>
            
            <img src={java} alt="Client" className="clientsimg"/>
            

        </div>


    </div>
    <div id="contacto">
        <h1 className="contactPagetitulo"> Contacto interno</h1>
        <span className="ContacDes">Contacto sobre mi experiencia y trabajo en mi recorrido de la programacion.</span>
        <form className='contactForm'>
            <input type="text" className='nombre' placeholder='Mi nombre' />
            <input type="email" className='email' placeholder='Mi email' />
            <textarea className="mensaje" name="mensaje" rows="5" placeholder='Mi mensaje'></textarea>
            <button type="submit" value="Send" className="submitBtn">Enviar</button>
            <div className="links">
                
                

            </div>
                

           
        </form>

    </div>

    </section>
    
  )
}

export default Contact;