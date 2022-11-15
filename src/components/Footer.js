import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="main-footer">
            <div className="float-right d-none d-sm-block">
                <b>Version</b> 3.2.0
            </div>
            <strong>Mision TIC 2022 <Link to={"/Home"}>MisionTic</Link>.</strong> Componente de aprendizaje.
        </footer>

    );
}

export default Footer;