import React from "react";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const SidebarContainer = () => {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            <Link to={"/Home"} className="brand-link">
                <img src="../../dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" style={{ opacity: '.8' }} />
                <span className="brand-text font-weight-light">Mi Dulce Online</span>
            </Link>
            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="info">
                        &nbsp;
                    </div>
                    <div className="info">
                        &nbsp;
                    </div>
                    <div className="info">
                        <Link to = {"/Home"} className="d-block">Menú Principal</Link>
                    </div>
                </div>
                <Menu></Menu>
            </div>
        </aside>

    );
}

export default SidebarContainer;