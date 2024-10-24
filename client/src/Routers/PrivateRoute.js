import React from "react";
import Swal from "sweetalert2";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const token = localStorage.getItem("token");

    if (!token) {
        Swal.fire({
            title: "Endereço inválido!",
            text: "Faça login para ter acesso a plataforma.",
            icon: "error",
            confirmButtonColor: "#00968F"
        });

        return <Navigate to="/" state={{ showLoginModal: true }} />;
    }

    return children;
}

export default PrivateRoute;