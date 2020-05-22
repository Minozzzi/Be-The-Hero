import React from 'react';
import './styles.css';
import logoImg from '../../Assets/logo.svg';
import {Link} from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";
export default function NewIncident(){
    return (
        <div className="new-incident-container">
        <div className="content">
            <section>
                <img src={logoImg} alt="Be The Hero"/>
                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um herói para ressolver isso.</p>
                <Link to="/profile" className="back-link" to="/profile">
                    <FiArrowLeft size={16} color="#E02041" />
                    Voltar para home
                </Link>
            </section>
            <form >
                <input placeholder="Título do caso"/>
                <textarea placeholder="Descrição"/>
                <input placeholder="Valor em reais"/>
            </form>
        </div>
    </div>
    );
}