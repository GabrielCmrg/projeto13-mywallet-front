import { useNavigate } from "react-router-dom";
import React from "react";

export default function SignupScreen() {
    const navigate = useNavigate();
    React.useEffect(() => {
        const token = localStorage.getItem("token");
        if (token === null) {
            navigate("/login");
        }
    });

    return (
        <></>
    );
};