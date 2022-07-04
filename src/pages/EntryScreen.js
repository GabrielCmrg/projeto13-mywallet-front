import { useNavigate } from "react-router-dom";
import React from "react";
import axios from "axios";

import ApplicationContext from "../contexts/ApplicationContext";

export default function EntryScreen({ type }) {
    const navigate = useNavigate();
    const { BASE_URL, token, setToken } = React.useContext(ApplicationContext);

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

    return (
        <></>
    );
};