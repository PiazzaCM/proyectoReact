import React from 'react'
import './navbar.css'

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid colornav">
                    <img src="img/icon.png" height="50px" alt="Logo" />
                    <a className="navbar-brand" href="#">
                        <strong>educARse</strong>
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo02"
                        aria-controls="navbarTogglerDemo02"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">
                                    Explorar
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Ayuda
                                </a>
                            </li>
                        </ul>
                        <div className="container-fluid">
                            <div className="row">
                                <div className="col-4 mb-2 mb-lg-0">
                                    <form className="d-flex" role="search">
                                        <input
                                            className="form-control"
                                            type="search"
                                            placeholder="Search"
                                            aria-label="Search"
                                        />
                                    </form>
                                </div>

                                <div className="col-8 mb-3 mb-lg-0 text-end">
                                    <div className="button-area">
                                        <a href="" className="btn boton1">
                                            Iniciar sesión
                                        </a>
                                        {" "}
                                        <a href="" className="btn boton2">
                                            Regístrate
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar