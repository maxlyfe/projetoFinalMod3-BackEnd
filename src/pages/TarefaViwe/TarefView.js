import React, { useEffect, useState } from 'react'
import './TarefView.scss';
import { Api } from '../../api/api'
import { Link } from 'react-router-dom';
import 'react-responsive-modal/styles.css';
import { Modal } from 'react-responsive-modal';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'

const TarefView = (props) => {
    const [tarefa, setTarefa] = useState({});
    const [open, setOpen] = useState(false);

    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    useEffect(() => {
        getTarefById();
    }, [])

    const id = props.match.params.id;

    const getTarefById = async () => {
        const response = await Api.fetchGetById(id);
        const data = await response.json();
        setTarefa(data);
    }

    const handleDelete = async (evento) => {
        evento.preventDefault();
        const resposta = await Api.fetchDelete(id);
        const result = await resposta;
        props.history.push("/");
    
    }

    return (
        <section className="view">
            <div className="view-info">
                <p className="view-info-text"><b>Titulo:</b> {tarefa.titulo}</p>
                <p className="view-info-text"><b>Descricao:</b> {tarefa.descricao}</p>
                <Link to={`/edit/${tarefa._id}`}>
                    <button className="btn btn-success">Editar</button>
                </Link>
                <button className="btn btn-danger" onClick={onOpenModal}>Excluir</button>
            </div>
            <Modal open={open} onClose={onCloseModal} center
                className={{
                    overlayAnimationIn: 'custumEnterOverLayAnimation',
                    overlayAnimationOut: 'customLeaveOverlayAnimation',
                    modalAnimationIn: 'customEnterModalAnimation',
                    modalAnimationOut: 'customLeaveModalAnimation',
                }}
            >
                <h2>Se excluir já era!</h2>
                <button onClick={handleDelete} className="bottons">Eu Sei</button>
                <button onClick={onCloseModal} className="buttons">Melhor Não</button>
            </Modal>
        </section>
    )
}

export default TarefView