import React from "react";
import ContentHeader from "../components/ContentHeader";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SidebarContainer from "../components/SidebarContainer";
import { Link } from "react-router-dom";


const Home = () => {
    const idUsuario = localStorage.getItem("user");
    if (idUsuario === null) {
        window.location.href = "/";
    }

    return (
        <div className="wrapper">
            <Navbar></Navbar>
            <SidebarContainer></SidebarContainer>
            <div className="content-wrapper">
                <ContentHeader
                    titulo={"Dashboard"}
                    breadCrum1={"Inicio"}
                    breadCrum2={"Dashboard"}
                    ruta1={"/Home"}
                />
                <section className="content">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg3 col-6">
                                <div className="small-box bg-info">
                                    <div className="inner">
                                        <h3>Productos</h3>
                                        <p>&nbsp;</p>
                                    </div>
                                    <div className="icon">
                                        <i className="fa fa-edit"/>
                                    </div>
                                    <Link to = {"/Productos"} className="small-box-footer">Ver productos<i className="fas fa-arrow-circle-right" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer></Footer>
        </div>
    );
}

export default Home;