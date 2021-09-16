import React from 'react';
import { Link } from 'react-routers';
import './TarefasCard.scss';

const TarefasCard = (props) => {
    const tarefa = props.tarefa;

    return (
        <Link to={`/view/${tarefa._id}`} className="card">
            <div>
                <p className="card-text">{tarefa.titulo}</p>
                <span className="card-info">{tarefa.descriao}</span>
            </div>
        </Link>
    )
}

export default TarefasCard