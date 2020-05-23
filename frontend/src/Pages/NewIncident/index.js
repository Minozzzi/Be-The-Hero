import React, {useState} from 'react';
import './styles.css';
import logoImg from '../../Assets/logo.svg';
import {Link, useHistory} from 'react-router-dom';
import { FiArrowLeft } from "react-icons/fi";
import api from '../../services/api';
export default function NewIncident(){
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [value, setValue] = useState('');
    const history = useHistory();

    const ongId = localStorage.getItem('ongId');
    async function handleNewIncident(e){
        e.preventDefault();

        const data = {
            title,
            desc,
            value,
        };
        try {
            await api.post('incidents', data, {
                headers: {
                    autorizhation: ongId,
                }
            })
            history.push('/profile');
        } catch (error) {
            alert('Erro ao cadastrar caso, tente novamente')
        }
    }

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
            <form onSubmit={handleNewIncident}>
                <input 
                    placeholder ="Título do caso"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                />
                <textarea 
                    placeholder ="Descrição"
                    value={desc}
                    onChange={e => setDesc(e.target.value)}
                />
                <input 
                    placeholder ="Valor em reais"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button className="button" type="submit">Cadastrar</button>
            </form>
        </div>
    </div>
    );
}