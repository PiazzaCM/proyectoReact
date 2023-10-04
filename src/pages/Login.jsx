import React from 'react'
import '../components/login.css'

const Login = () => {
    return (
        <>
            <div className="container d-flex justify-content-center align-items-center">

                <div className="col-md-6 row form-container">
                    <div className="header col-12">
                        <h2 className="mb-5 text-center">Login</h2>
                    </div>
                    <form className="registro-container col-12">
                        <div className="form-row">

                            <div className="form-group col-md-12">
                                <label for="email">Correo electronico:</label>
                                <input type="email" id="correo" className="form-control" placeholder="Ingrese su correo"/>
                            </div>

                            <div className="form-group col-md-12">
                                <label for="password">Contraseña:</label>
                                <input type="password" id="contraseña" className="form-control" placeholder="Ingrese su contraseña"/>
                            </div>
                        </div>

                        <button type="button" className="btn btn-primary custom-btn" onclick="loginUsuario()">Ingresar</button>
                    </form>
                </div>
            </div>
        </>
    )


}
export default Login