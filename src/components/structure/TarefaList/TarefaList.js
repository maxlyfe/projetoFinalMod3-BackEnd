import React, { useEffect, useState } from 'react';
import TarefaCard from '../TarefaCard/TarefaCard';
import './TarefaList.scss';
import { Api } from '../../../api/api';

const TarefList = () => {
    const [tarefas, setTarefas] = useState([]);

    useEffect(() =>{
        getTaref();
    }, [])

    const getTaref = async () => {
        const response = await Api.fetchGet();
        const data = await response.json();
        setTarefas(data);
    }

    return (
        <div className="list">
            {tarefas.map((tarefa, index) => {
                <TarefaCard tarefa={tarefa} key={tarefa._id}/>
            })}
        </div>
    )
}

export default TarefList