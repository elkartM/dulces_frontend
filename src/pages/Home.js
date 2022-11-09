import React from "react";



const Home = () => {
    const idUsuario = localStorage.getItem("user");
    if (idUsuario === null) {
        window.location.href = "/";
    }

    return (
        <div>
            <h1>Menú</h1>
        </div>
    );
}

export default Home;