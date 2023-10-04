import React from 'react'
import '../components/landing.css'

const Landing = () => {
    return (
        <>
     <div className="fondo d-flex justify-content-center align-items-center">
      <div className="covertext text-center">
        <div className="col-lg-12">
          <h1 className="title">educARse</h1>
          <h3 className="subtitle">Somos una plataforma destinada a los estudiantes y profesionales de la educación.</h3>
        </div>
        <div className="col-xs-12 explore">
          <a href="/register"><button type="button" className="btn btn-lg unete">ÚNETE</button></a>
        </div>
      </div>
    </div>

    <div className='banda'>
    <div className="cinta">
      <div className="rounded text-center col-12 col-md-12 p-3 mb-3">
        <h4 className="font-weight-bold text-white">CURSOS RECOMENDADOS</h4>
      </div>
      {/* Agrega aquí el contenido adicional si es necesario */}
    </div>
    </div>


    <div className='banda'>
    <div className="cinta">
      <div className="rounded text-center col-12 col-md-12 p-3 mb-3">
        <h4 className="font-weight-bold text-white">PROFESORES RECOMENDADOS</h4>
      </div>
      {/* Agrega aquí el contenido adicional si es necesario */}
    </div>
    </div>
        </>
    )
}

export default Landing