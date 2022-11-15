import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
    return (
        <nav className="mt-2">
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li className="nav-item">
                    <Link to = {"/Home"} className="nav-link">
                        <i className="nav-icon fas fa-th" />
                        <p>
                            Inicio
                            <span className="right badge badge-danger">--</span>
                        </p>
                    </Link>
                </li>
            </ul>
            <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                <li className="nav-item">
                    <Link to = {"/Productos"} className="nav-link">
                        <i className="nav-icon fas fa-th" />
                        <p>
                            Productos
                            <span className="right badge badge-danger">--</span>
                        </p>
                    </Link>
                </li>
            </ul>            
        </nav>

    );
}

export default Menu;