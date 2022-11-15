import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ContentHeader from "../../components/ContentHeader";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SidebarContainer from "../../components/SidebarContainer";
import APIInvoke from "../../utils/APIInvoke";
import swal from "sweetalert";

const ListarProductos = () => {

    const [productos, setProductos] = useState([]);

    const cargarProductos = async () => {
        const response = await APIInvoke.invokeGET("/productos/list");
        console.log(response);
        setProductos(response);
    }

    useEffect(() => {
        cargarProductos();
    }, [])

    const eliminarProducto = async (e, id) => {
        e.preventDefault();

        const response = await APIInvoke.invokeDELETE(`/productos/delete/${id}`);

        if (response.msg === 'Producto eliminado correctamente') {
            const msg = "El producto fue borrado";
            swal({
                title: 'Información',
                text: msg,
                icon: 'success',
                buttons: {
                    confirm: {
                        text: 'Ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-primary',
                        closeModal: true
                    }
                }
            });
            cargarProductos();
        } else {
            const msg = "El productp no se pudo borrar";
            swal({
                title: 'Error',
                text: msg,
                icon: 'error',
                buttons: {
                    confirm: {
                        text: 'Ok',
                        value: true,
                        visible: true,
                        className: 'btn btn-danger',
                        closeModal: true
                    }
                }
            });
        }
    }

    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">
                <ContentHeader
                    titulo={"Listado de Productos"}
                    breadCrum1={"Inicio"}
                    breadCrum2={"Productos"}
                    ruta1={"/Home"}
                />
                <section className="content">
                    <div className="card">
                        <div className="card-header">
                            <h3 className="card-title"><Link to={"/crearProductos"}>Crear Producto</Link></h3>
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
                            <table className="table table-striped table-hover">
                                <thead className="table-dark">
                                    <tr>
                                        <th style={{ width: '10%' }}>Id</th>
                                        <th style={{ width: '5%' }}>codigo</th>
                                        <th style={{ width: '20%' }}>Producto</th>
                                        <th style={{ width: '20%' }}>Presentacion</th>
                                        <th style={{ width: '15%' }}>Inventario</th>
                                        <th style={{ width: '10%' }}>Valor</th>
                                        <th style={{ width: '10%' }}>Opciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        productos.map(
                                            item =>
                                                <tr key={item._id}>
                                                    <td>{item._id}</td>
                                                    <td>{item.codigo}</td>
                                                    <td>{item.producto}</td>
                                                    <td>{item.presentacion}</td>
                                                    <td>{item.inventario}</td>
                                                    <td>{item.valor_unitario}</td>
                                                    <td>
                                                        <Link to={`/editarProducto/${item._id}@${item.codigo}@${item.producto}@${item.presentacion}@${item.inventario}@${item.valor_unitario}`}
                                                            className="btn btn-sm btn-primary">
                                                            Editar
                                                        </Link>
                                                        <button
                                                            onClick={(e) => eliminarProducto(e, item._id)}
                                                            className="btn btn-sm btn-danger">
                                                            Borrar
                                                        </button>
                                                    </td>
                                                </tr>
                                        )
                                    }

                                </tbody>

                            </table>

                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default ListarProductos;