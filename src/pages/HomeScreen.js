import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import React from "react";

import ApplicationContext from "../contexts/ApplicationContext";

import Loader from "../components/Loader";
import styled from "styled-components";

export default function HomeScreen() {
    const [name, setName] = React.useState("");
    const [entries, setEntries] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const navigate = useNavigate();
    const { BASE_URL, token, setToken } = React.useContext(ApplicationContext);

    React.useEffect(() => {
        if (token === null) {
            navigate("/login");
        } else {
            setIsLoading(true);
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };

            const promise = axios.get(BASE_URL + "/entries", config);
            promise
                .then(response => {
                    setName(response.data.name);
                    setEntries(response.data.entries);
                    setIsLoading(false);
                })
                .catch(error => {
                    alert(error.response.data);
                    localStorage.clear();
                    setToken(null);
                    setIsLoading(false);
                    navigate("/login");
                });
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    function showEntries() {
        if (entries.length > 0) {
            entries.map(entry => <div>{entry.description}</div>)
        } else {
            return (
                <NoEntries>
                    <span>Não há registros de entrada ou saída</span>
                </NoEntries>
            );
        }
    };
    
    return (
        <Container>
            <h2>Olá, {isLoading? <Loader />: name}<ion-icon name="exit-outline"></ion-icon></h2>
            <Entries>
                { showEntries() }
            </Entries>
            <Grid>
                <Link to="/new-credit">
                    <Button>
                        <ion-icon name="add-circle-outline"></ion-icon>
                        <span>Nova entrada</span>
                    </Button>
                </Link>
                <Link to="/new-debit">
                    <Button>
                        <ion-icon name="remove-circle-outline"></ion-icon>
                        <span>Nova saída</span>
                    </Button>
                </Link>
            </Grid>
        </Container>
    );
};

const Button = styled.button`
    background-color: #A328D6;
    border: none;
    border-radius: 5px;
    color: white;
    font-size: 17px;
    font-weight: 700;
    width: 100%;
    aspect-ratio: 1.36;
    margin-top: 15px;
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    padding: 10px;

    ion-icon {
        font-size: 25px;
    }

    span {
        width: 80px;
        text-align: left;
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 15px;
`;

const Container = styled.div`
    width: 100%;
    max-width: 326px;
`;

const Entries = styled.div`
    width: 100%;
    height: 446px;
    background-color: white;
    border-radius: 5px;
`;

const NoEntries = styled.div`
    display: flex;
    height: 100%;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    color: #868686;
    text-align: center;

    span {
        width: 200px;
    }
`;