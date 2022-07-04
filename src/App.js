import { BrowserRouter, Route, Routes } from "react-router-dom";

import GlobalStyle from "./themes/GlobalStyle";

import HomeScreen from "./pages/HomeScreen";
import LoginScreen from "./pages/LoginScreen";

export default function App() {
    return (
        <>
        <GlobalStyle />
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeScreen />} />
                <Route path="/login" element={<LoginScreen />} />
            </Routes>
        </BrowserRouter>
        </>
    );
};