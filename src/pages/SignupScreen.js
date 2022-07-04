import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

import ApplicationContext from "../contexts/ApplicationContext";

import Loader from "../components/Loader";

export default function SignupScreen() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [checkPassword, setCheckPassword] = React.useState("");
    const [isLoadig, setIsLoading] = React.useState(false);
    const navigate = useNavigate();
    const { BASE_URL } = React.useContext(ApplicationContext);

    function signup(event) {
        event.preventDefault();
        setIsLoading(true);

        const signupInfo = {
            name,
            email,
            password,
            checkPassword,
        };

        const promise = axios.post(BASE_URL + "/sign-up", signupInfo);
        promise
            .then(() => {
                setIsLoading(false);
                navigate("/login");
            })
            .catch(error => {
                alert(error.response.data);
                setIsLoading(false);
            });
    };
    return (
        <>
        <h1>MyWallet</h1>
        <form onSubmit={signup}>
            <input
                type="text"
                id="name"
                placeholder="Nome"
                value={name}
                onChange={e => setName(e.target.value)}
                disabled={isLoadig}
                required
            />
            <input
                type="email"
                id="email"
                placeholder="E-mail"
                value={email}
                onChange={e => setEmail(e.target.value)}
                disabled={isLoadig}
                required
            />
            <input
                type="password"
                id="password"
                placeholder="Senha"
                value={password}
                onChange={e => setPassword(e.target.value)}
                disabled={isLoadig}
                required
            />
            <input
                type="password"
                id="password"
                placeholder="Confirme a senha"
                value={checkPassword}
                onChange={e => setCheckPassword(e.target.value)}
                disabled={isLoadig}
                required
            />
            <button type="submit" disabled={isLoadig}>
                {isLoadig? <Loader />: "Cadastrar"}
            </button>
        </form>
        <Link to="/login">
            Já tem uma conta? Entre agora!
        </Link>
        </>
    );
};