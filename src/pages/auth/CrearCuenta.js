import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";

const CrearCuenta = () =>{

    const alerta = (mensaje, tipo, titulo) => {
        swal({
            title: titulo,
            text: mensaje,
            icon: tipo,
            buttons: {
                confirm: {
                    text: "Aceptar",
                    value: true,
                    visible: true,
                    className: "btn btn-info",
                    closeModal: true
                }
            }
        });
    }

    const [usuario, setUsuario] = useState({
        nombre:"",
        email:"",
        contra:""
    });

    const {nombre, email, contra} = usuario;

    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        document.getElementById("nombre").focus();
    },[]);

    const crearCuenta = async() =>{
        const data = {
            nombre: usuario.nombre,
            email: usuario.email,
            contra: usuario.contra
        }
        const response = await APIInvoke.invokePOST(
                "/usuarios/new", data);
        //console.log(response);
        
        const respuesta = response.mensaje;

        let msg, titulo, tipo;
        if (respuesta === "Usuario Existente"){
            msg = "El usuario ya existe en BD";
            titulo = "Error en creación de usuario";
            tipo = "error";
            alerta(msg, tipo,titulo);
        }
        else if (respuesta === "Usuario Creado"){
            msg = "Usuario creado!";
            titulo = "Procedimiento correcto";
            tipo = "success";
            alerta(msg, tipo,titulo);
        }

        setUsuario({
            nombre: "",
            email: "",
            contra: ""
        });
    }

    const onSubmit = (e) => {
        e.preventDefault();
        crearCuenta();
    }

    return(
        <div className="container">
            <div className="row mt-5">
                <div className="col"></div>
                <div className="col-5">
                    <div className="card text-center">
                        <div className="card-header">
                            Crear Cuenta de usuario
                        </div>
                        <div className="card-body">
                            <form onSubmit={onSubmit}>
                                <div>
                                    <div className="form-floating mb-3">
                                        <input 
                                            type="text" 
                                            className="form-control" 
                                            placeholder="Nombre"
                                            id="nombre"
                                            name="nombre"
                                            value={nombre}
                                            onChange={onChange}
                                            required
                                        />
                                        <label htmlFor="floatingInput">Nombre</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input 
                                            type="email" 
                                            className="form-control" 
                                            placeholder="name@example.com"
                                            id="email"
                                            name="email"
                                            value={email}
                                            onChange={onChange}
                                            required
                                        />
                                        <label htmlFor="floatingInput">Email</label>
                                    </div>
                                    <div className="form-floating">
                                        <input 
                                            type="password" 
                                            className="form-control"
                                            placeholder="Password" 
                                            id="contra" 
                                            name="contra"
                                            value={contra}
                                            onChange={onChange}
                                            required
                                        />
                                        <label htmlFor="floatingPassword">Password</label>
                                    </div>
                                </div>
                                <div className="container mt-4">
                                <button type="submit" className="btn btn-primary my-2">Crear Cuenta</button>
                                <Link to={"/"} className="btn btn-secondary mx-2">Iniciar Sesión</Link>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer text-muted">
                            Todos los campos son requeridos
                        </div>
                    </div>
                </div>
                <div className="col">

                </div>
            </div>
        </div>
    );
}

export default CrearCuenta;