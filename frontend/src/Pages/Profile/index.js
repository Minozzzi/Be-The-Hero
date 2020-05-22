import React from 'react';
import { FiPower, FiTrash2 } from "react-icons/fi";
import logoImg from '../../Assets/logo.svg';
import { Link } from "react-router-dom";
import "./styles.css";
export default function Profile(){
    return (
        <div className="profile-contaier">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem vinda, APAD</span>

                <Link to="incident/new" className="button">Cadastrar novo caso</Link>
                <button type="buton">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Casos cadastrados
                <ul>
                    <li>
                        <strong>CASO:</strong>
                        <p>Caso teste</p>
                        <strong>DESCRIÇÃO</strong>
                        <p>Descrição teste</p>
                        <strong>VALOR:</strong>
                        <p>R$ 120,00</p>

                        <button type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                    <li>
                        <strong>CASO:</strong>
                        <p>Caso teste</p>
                        <strong>DESCRIÇÃO</strong>
                        <p>Descrição teste</p>
                        <strong>VALOR:</strong>
                        <p>R$ 120,00</p>

                        <button type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                    <li>
                        <strong>CASO:</strong>
                        <p>Caso teste</p>
                        <strong>DESCRIÇÃO</strong>
                        <p>Descrição teste</p>
                        <strong>VALOR:</strong>
                        <p>R$ 120,00</p>

                        <button type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li>
                    <li>
                        <strong>CASO:</strong>
                        <p>Caso teste</p>
                        <strong>DESCRIÇÃO</strong>
                        <p>Descrição teste</p>
                        <strong>VALOR:</strong>
                        <p>R$ 120,00</p>

                        <button type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li> 
                </ul>
            </h1>
        </div>
    );
}