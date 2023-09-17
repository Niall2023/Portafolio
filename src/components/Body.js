import React from 'react'
import empresa1 from  '../assets/empresa1.jpg'
import empresa2 from  '../assets/empresa2.jpg'
import empresa3 from  '../assets/empresa3.jpg'
import empresa4 from  '../assets/empresa4.avif'
import empresa5 from  '../assets/empresa5.png'
import empresa6 from  '../assets/empresa6.jpg'

const Body = () => {
  return (
    <div className='body-div'>
        <h1 className='TituloF'>Expectativas</h1>

        <p className='textF'>En mi plan para mejorar mis cosas y las actividad que deseo desempeñar quiero poner mas en practica lo enseñado, poner mas empeño sobre las cosas que hago y no hago, y poner empeño en mis proyectos como programador y este inicio, mi idea como programador y en este portafolio es mostrar mi proceso en el transcurrir de el tiempo que voy a llevar como estudiante hasta mi vida laboral en la programacion, espero muchas expectativas sobre este y un mundo de conocimientos, muchas gracias por ver mi portafolio y con el pasar del tiempo se ira mejorando y montando los proyectos.</p>

        <h5 className='aspiraciones'>Aspiraciones</h5>


        <div className="image-gallery">
        <img src={empresa1} alt="" className="image-gallery"/>
        <img src={empresa2} alt="" className="image-gallery"/>
        <img src={empresa3} alt="" className="image-gallery"/>
        <img src={empresa4} alt="" className="image-gallery"/>
        <img src={empresa5} alt="" className="image-gallery"/>
        <img src={empresa6} alt="" className="image-gallery"/>
      
    </div>


    <div className='Boody-div'>
    <div className="social-icons">
        <a href="#" className="social-icon">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-linkedin"></i>
        </a>
      </div>
      <div className="footer-text">
      
      </div>
      <div className="divider"></div>

    </div>



      
    </div>
  )
}

export default Body;
