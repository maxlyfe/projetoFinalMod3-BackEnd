import React, { useEffect, useState } from "react";
import { Api } from '../../api/api';

const TarefEdit = (props) => {
    const id = props.match.params.id;
    const [fields, setFields] = useState({});

    useEffect(() => {
        getTarefById();
    }, [])

    const getTarefById = async () => {
        const response = await Api.fetchGetById(id);
        const data = await response.json();
        setFields(data);
    }

    const handleFieldsChange = (evento) =>{
        const auxFields = { ...fields };
        auxFields[evento.target.name] = evento.target.value;
        setFields(auxFields);
    }

    const handleSubmit = async (evento) => {
        evento.preventDefault();
        const dados = { ...fields };
        dados.duracao = parseFloat(dados.duracao);
        const result = await Api.fetchPut(dados, id);
        const response = await result.json();
        console.log(response);
      }

    return (
        <section className="add">
            <h1>Editar - Titulo</h1>
            <form className="add-form" onSubmit={handleSubmit}>
                <div className="add-form-group">
                <label htmlFor="titulo" className="add-form-group-label">
                    Titulo
                </label>
                <input
                    type="text"
                    id="titulo"
                    name="titulo"
                    value={fields.titulo}
                    onChange={handleFieldsChange}
                    className="add-form-group-input"
                />
                </div>
                <div className="add-form-group">
                <label htmlFor="descricao" className="add-form-group-label">
                    Descrição
                </label>
                <input
                    type="text"
                    id="descricao"
                    name="descricao"
                    value={fields.descricao}
                    onChange={handleFieldsChange}
                    className="add-form-group-input"
                />
                </div>
            </form>
        </section>
    )
}

export default TarefEdit;