import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";

const Login = () => {

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

    const navegador = useNavigate();

    const [ usuario, setUsuario] = useState({
        email: "",
        contra: ""
    });

    const { email, contra } = usuario;

    const onChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        document.getElementById("email").focus();
    },[]);
    const onSubmit = (e) => {
        e.preventDefault();
        inicioSesion();
    }

    const inicioSesion = async () => {
        const data = {
            email: usuario.email,
            contra: usuario.contra
        }
        const response = await APIInvoke.invokePOST("/usuarios/login", data);
        //console.log(response.mensaje);
        const acceso = response.mensaje;
        let msg, titulo, tipo;
        if (acceso === "Ingreso"){
            msg = "Bienvenido!";
            titulo = "Ingreso exitoso!";
            tipo = "success";
            alerta("msg, tipo,titulo");
            localStorage.setItem("user", response.usuario);
            navegador("/Home");
        }
        else if (acceso === "Denegado"){
            msg = "Error al ingresar al sistema";
            titulo = "Acceso denegado";
            tipo = "error";
            alerta("msg, tipo,titulo");
        }
        setUsuario({
            email: "",
            contra: ""
        });
    }

    return(
        <div className="container">
            <div className="row mt-5">
                <div className="col"></div>
                <div className="col-5">
                    <div className="card text-center">
                        <div className="card-header">
                            Inicio de Sesión
                        </div>
                        <div className="card-body">
                            <form onSubmit={onSubmit}>
                                <div>
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
                                <button type="submit" className="btn btn-primary my-2">Acceder</button>
                                <Link to={"/CrearCuenta"} className="btn btn-secondary mx-2">Crear Cuenta</Link>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer text-muted">
                            Olvidaste tu contraseña?
                        </div>
                    </div>
                </div>
                <div className="col">

                </div>
            </div>
        </div>

    );
}

export default Login;