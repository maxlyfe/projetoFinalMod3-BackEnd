import React from 'react';
import './TarefAdd.scss';
import { Api } from '../../api/api'

const TarefAdd = (props) => {
    const handleSubimit = async (evento) => {
        evento.preventDefault();
        const titulo = evento.target.titulo.value;
        const descricao = evento.target.descricao.value;

        const Tarefa = {
            titulo: titulo,
            descricao: descricao,
        }

        try {
            const response = await Api.fetchPost(Tarefa);
            const data = await response;
            props.history.push('/');
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <section className="add">
            <from className="add-from" onSubimit={handleSubimit}>
                <div className="add-from-group">
                    <label htmlFor="titulo" className="add-rom-group-label">titulo</label>
                    <input type="text" id="nome" name="nome" className="add-from-group-input"/>
                </div>
                <div className="add-from-group">
                    <label htmlFor="descricao" className="add-from-group-label">descricao</label>
                </div>
            </from>
        </section>
    )
}

export default TarefAdd