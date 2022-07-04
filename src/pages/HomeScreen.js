import { useNavigate } from "react-router-dom";
import React from "react";

export default function HomeScreen() {
    const navigate = useNavigate();
    React.useEffect(() => {
        const token = localStorage.getItem("token");
        if (token === null) {
            navigate("/login");
        }
    })
    return (
        <>home with entries history</>
    );
};