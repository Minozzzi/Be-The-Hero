import React, {useState,useEffect} from 'react';
import { FiPower, FiTrash2 } from "react-icons/fi";
import api from '../../services/api';
import logoImg from '../../Assets/logo.svg';
import { Link, useHistory } from "react-router-dom";
import "./styles.css";
export default function Profile(){
    const ongId = localStorage.getItem('ongId');
    const ongName = localStorage.getItem('ongName');
    const [incidents, setIncidents] = useState([]);
    const history = useHistory();
    useEffect(() =>{
        api.get('profile', {
            headers:{
                authorization: ongId,
            }
        }).then(response => {
                setIncidents(response.data);
        })
    }, [ongId]);

    async function handleDeleteIncident(id){
        try {
            
            await api.delete(`incidents/${id}`, {
                headers:{
                    authorization: ongId,
                }
            });

            setIncidents(incidents.filter(incident => incident.id !== id));
        } catch (err) {
            alert('Erro ao deleter o caso, tente novamente')
        }
    }

    async function handleLogout(){
        localStorage.clear();
        history.push('/');
    }

    return (
        <div className="profile-contaier">
            <header>
                <img src={logoImg} alt="Be The Hero" />
                <span>Bem vinda, {ongName}</span>

                <Link to="incident/new" className="button">Cadastrar novo caso</Link>
                <button onClick={handleLogout} type="buton">
                    <FiPower size={18} color="#E02041" />
                </button>
            </header>

            <h1>Casos cadastrados</h1>
                <ul>
                   {incidents.map(incident =>(
                        <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>
                        <strong>DESCRIÇÃO</strong>
                        <p>{incident.description}</p>
                        <strong>VALOR:</strong>
                        <p>{Intl.NumberFormat('pt-BR',{style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

                        <button onClick={() => handleDeleteIncident(incident.id)} type="button">
                            <FiTrash2 size={20} color="#a8a8b3" />
                        </button>
                    </li> 
                   ))}
                   
                </ul>
            
        </div>
    );
}