import React from "react";
import ContentHeader from "../../components/ContentHeader";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SidebarContainer from "../../components/SidebarContainer";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";

const CrearProductos = () => {

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

    const navegate = useNavigate();

    const [prod, setProducto] = useState({
        codigo:"",
        producto:"",
        presentacion:"",
        inventario:"",
        valor_unitario:""
    });

    const { codigo, producto, presentacion, inventario, valor_unitario } = prod;

    const onChange = (e) =>{
        setProducto({
            ...prod,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        document.getElementById("codigo").focus();
    }, []);

    const crearProducto = async() =>{
        const data = {
            codigo: prod.codigo,
            producto: prod.producto,
            presentacion: prod.presentacion,
            inventario: prod.inventario,
            valor_unitario: prod.valor_unitario 
        }

        const response = await APIInvoke.invokePOST(
                "/productos/new", data);
        //console.log(response);
        const respuesta = response.mensaje;

        let msg, titulo, tipo;
        if (respuesta === "Producto correctamente guardado"){
            msg = "Producto creado correctamente!";
            titulo = "Procedimiento correcto";
            tipo = "success";
            alerta(msg, tipo,titulo);

            setProducto({
                codigo: "",
                producto: "",
                presentacion: "",
                inventario: "",
                valor_unitario:""
            })
        } else{
            msg = "El producto no se pudo crear";
            titulo = "Error en creación de producto";
            tipo = "error";
            alerta(msg, tipo,titulo);
    
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();
        crearProducto();
    }

    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">
                <ContentHeader
                    titulo={"Creación de Producto"}
                    breadCrum1={"Listado de productos"}
                    breadCrum2={"Creación"}
                    ruta1={"/Productos"}
                />
                <section className="content">
                    <div className="row">
                        <div className="card">
                            <div className="card-header">
                                <div className="card-tools">
                                    <button type="button" className="btn btn-tool" data-card-widget="collapse">
                                        <i className="fas fa-minus" />
                                    </button>
                                    <button type="button" className="btn btn-tool" data-card-widget="remove">
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            </div>
                            <div className="card-body">
                                <form onSubmit={onSubmit}>
                                    <div className="card-body">
                                        <div className="form-group">
                                            <label htmlFor="floatingInput">Código Producto</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Código del producto"
                                                id="codigo"
                                                name="codigo"
                                                value={codigo}
                                                onChange={onChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="floatingInput">Producto</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Producto"
                                                id="producto"
                                                name="producto"
                                                value={producto}
                                                onChange={onChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="floatingInput">Presentación</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Presentación"
                                                id="presentacion"
                                                name="presentacion"
                                                value={presentacion}
                                                onChange={onChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="floatingInput">Inventario</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Inventario"
                                                id="inventario"
                                                name="inventario"
                                                value={inventario}
                                                onChange={onChange}
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="floatingInput">Valor unitario</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Valor unitario"
                                                id="valor_unitario"
                                                name="valor_unitario"
                                                value={valor_unitario}
                                                onChange={onChange}
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="card-footer">
                                        <button type="submit" className="btn btn-primary">Guardar</button>
                                    </div>
                                </form>

                            </div>
                        </div>

                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
    );
}


export default CrearProductos;