import axios from "axios";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

import ApplicationContext from "../contexts/ApplicationContext";

import Loader from "../components/Loader";

export default function LoginScreen() {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [isLoadig, setIsLoading] = React.useState(false);
    const navigate = useNavigate();
    const { BASE_URL, token, setToken } = React.useContext(ApplicationContext);

    React.useEffect(() => {
        if (token !== null) {
            navigate("/");
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function login(event) {
        event.preventDefault();
        setIsLoading(true);

        const credentials = {
            email,
            password,
        };

        const promise = axios.post(BASE_URL + "/login", credentials);
        promise
            .then(response => {
                const receivedToken = response.data.token;
                localStorage.setItem("token", receivedToken);
                setToken(receivedToken);
                setIsLoading(false);
                navigate("/");
            })
            .catch(error => {
                alert(error.response.data);
                setIsLoading(false);
            });
    };

    return (
        <>
        <h1>MyWallet</h1>
        <form onSubmit={login}>
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
            <button type="submit" disabled={isLoadig}>
                {isLoadig? <Loader />: "Entrar"}
            </button>
        </form>
        <Link to="/sign-up">
            Primeira vez? Cadastre-se!
        </Link>
        </>
    );
};