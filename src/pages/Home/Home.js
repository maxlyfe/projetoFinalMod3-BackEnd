import React from 'react';
import TarefList from '../../components/structure/TarefaList/TarefaList';
import './Home.scss';

const Home = () =>{
    return (
        <section className="content">
            <h1 className="content-title">Suas Tarefas</h1>
            <div className="content-list">
                <h1>Tarefas</h1>
                <TarefList />
            </div>
        </section>
    )
}

export default Home