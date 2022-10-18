// rotas do sistema


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { FiltrosConsultas, Login } from '../../pages';


export const Rotas = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route  path="/" element={<Login />} />
            <Route  path="/consultas-geral" element={<FiltrosConsultas />} />

        </Routes>
        </BrowserRouter>
    );
}
