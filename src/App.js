import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

import GlobalStyle from "./themes/GlobalStyle";

import ApplicationContext from "./contexts/ApplicationContext";

import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";

export default function App() {
    const [token, setToken] = React.useState(localStorage.getItem("token"));
    const contextValue = { token, setToken };

    return (
        <ApplicationContext.Provider value={contextValue}>
            <GlobalStyle />
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<HomeScreen />} />
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="/sign-up" element={<SignupScreen />} />
                    <Route path="/new-credit" element={<EntryScreen type="credit" />} />
                    <Route path="/new-debit" element={<EntryScreen type="debit" />} />
                </Routes>
            </BrowserRouter>
        </ApplicationContext.Provider>
    );
};