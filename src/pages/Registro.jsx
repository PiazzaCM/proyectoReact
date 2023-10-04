import React from "react";
import '../components/registro.css'

const Registro = () => { 
    <>
    <div className="container d-flex justify-content-center align-items-center">

    <div className="col-md-6 row form-container">
      <div className="header col-md-12">
        <h2 className="mb-5 text-center">Registro</h2>
      </div>
      <form className="registro-container ">
        <div className="form-row">
          <div className="form-group col-md-6">
            <input type="text" className="form-control" placeholder="Nombre" id="nombre"/>
          </div>
          <div className="form-group col-md-6">
            <input type="text" className="form-control" placeholder="Apellido" id="apellido"/>
          </div>
          <div className="form-group col-md-12">
            <input type="email" className="form-control" placeholder="Correo Electrónico" id="email"/>
          </div>
          <div class="form-group col-md-6">
            <input type="password" className="form-control" placeholder="Contraseña" id="contraseña"/>
          </div>
          <div class="form-group col-md-6">
            <input type="password" className="form-control" placeholder="Confirmar Contraseña" id="recontraseña"/>
          </div>
        </div>
        <div className="form-group">
          <div className="row">
            <div className="col-md-6">
              <div className="form-check">
                <input type="radio" className="form-check-input" name="tipo" id="profesional" value="profesional"/>
                <label className="form-check-label" for="profesional">Profesional</label>
              </div>
            </div>
            <div className="col-md-6">
              <div className="form-check">
                <input type="radio" className="form-check-input" name="tipo" id="estudiante" value="estudiante"/>
                <label className="form-check-label" for="estudiante">Estudiante</label>
              </div>
            </div>
          </div>
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="policyCheck"/>
          <label class="form-check-label" for="policyCheck">Acepto las políticas</label>
        </div>
        <button type="button" class="btn btn-primary custom-btn" onclick="registrarUsuario()">Registrarse</button>
      </form>
    </div>
  </div>
  </>
}
export default Registro