import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";
import styled from "styled-components";
import dayjs from "dayjs";

import locale from "dayjs/locale/pt-br";

import ApplicationContext from "../contexts/ApplicationContext";

import Loader from '../components/Loader';

dayjs.locale(locale);

export default function EntryScreen({ type }) {
    const [isLoadig, setIsLoading] = React.useState(false);
    const [amount, setAmount] = React.useState("");
    const [description, setDescription] = React.useState("");
    const navigate = useNavigate();
    const { BASE_URL, token, setToken } = React.useContext(ApplicationContext);
    let text;

    if (type === "credit") {
        text = "entrada";
    } else if (type === "debit") {
        text = "saída";
    }

    React.useEffect(() => {
        if (token === null) {
            navigate("/login");
        } else {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            const promise = axios.get(BASE_URL + "/entries", config);
            promise
                .catch(error => {
                    alert(error.response.data);
                    localStorage.clear();
                    setToken(null);
                    navigate("/login");
                });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function sendEntry(event) {
        event.preventDefault();
        setIsLoading(true);

        const entry = {
            date: dayjs().format("DD/MM"),
            description,
            amount: Number(amount.replace(',', '.')),
            type,
        };
        
        const config = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        };

        const promise = axios.post(BASE_URL + "/entries", entry, config);
        promise
            .then(() => {
                setIsLoading(false);
                navigate("/");
            })
            .catch(error => {
                alert(error.response.data);
                setIsLoading(false);
            });
    }

    return (
        <Container>
            <h3>Nova {text}</h3>
            <form onSubmit={sendEntry}>
                <input
                    type="text"
                    id="amount"
                    placeholder="Valor"
                    value={amount}
                    onChange={e => setAmount(e.target.value)}
                    disabled={isLoadig}
                    pattern="\d+,\d{2}"
                    required
                />
                <input
                    type="text"
                    id="description"
                    placeholder="Descrição"
                    value={description}
                    onChange={e => setDescription(e.target.value)}
                    disabled={isLoadig}
                    required
                />
                <button type="submit" disabled={isLoadig}>
                    {isLoadig? <Loader />: "Entrar"}
                </button>
            </form>
        </Container>
    );
};

const Container = styled.div`
    width: 100%;
    max-width: 326px;
`;