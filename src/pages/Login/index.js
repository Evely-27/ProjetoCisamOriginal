// import React, { useState } from 'react'
import './login.css';
import { MdOutlinePersonOutline, MdLockOutline } from "react-icons/md";
import Logo from '../../assets/logo-cisam.jpg';
import { Container } from '../../shared/layout/EstilosGerais';
import { useNavigate } from 'react-router-dom';
// import { HiEye,HiEyeOff } from "react-icons/hi";

export const Login = () => {
    // const [cpf, setCPF] = useState("");
    // const [senha,setSenha] = useState("");
    // const [show,setShow] = useState(false);



    const navigate = useNavigate();

    const handleClick = () =>{
        navigate('/consultas-geral');
    }

    return (
    <Container>
        <section className='ImgLogo'>
            <img src={Logo} alt="imagem da logo do cisam" />
        </section> 

        <section className="Right">
            
            <form className='FormLogin'>
                <div className='InputCPF'>
                    <MdOutlinePersonOutline />
                <input 
                type="text" 
                placeholder='CPF'
                // value={cpf}
                // onChange={e => setCPF(e.target.value)}
                
                />
                </div>

                <div className='InputSenha'>
                    <MdLockOutline />
                <input 
                // neste type estamos perguntando se show é true ou false, que irá mostrar a senha ou não.
                type="text"
                placeholder='SENHA'
                // value={senha}
                // onChange={e => setSenha(e.target.value)}
                 
                 />
                </div>
            </form>
                <button type='submit' onClick={handleClick}>
                    Entrar
                </button>

            <h4>Esqueceu a senha?</h4>
        </section>
    </Container>
    )
};