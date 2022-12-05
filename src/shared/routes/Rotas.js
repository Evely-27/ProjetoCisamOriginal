// rotas do sistema


import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {ConfirmarConsulta, FiltrosConsultasTeste,  GerenciadorFiltroTeste, Login } from '../../pages';


export const Rotas = () => {
    return (
        <BrowserRouter>
        <Routes>
            <Route  path="/" element={<Login />} />
            <Route  path="/consultas-geral" element={<FiltrosConsultasTeste />} />
            <Route  path="/gerenciador-filtros" element={<GerenciadorFiltroTeste />} />
            <Route  path="/confirmar-consulta" element={<ConfirmarConsulta />} />


            {/* <Route  path="/consultas-geral" element={<FiltrosConsultas />} />
            <Route  path="/gerenciador-filtros" element={<GerenciadorFiltro />} /> */}
        </Routes>
        </BrowserRouter>
    );
}
