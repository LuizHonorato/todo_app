import React from 'react'
import PageHeader from '../template/pageHeader'

export default props => (
    <div>
        <PageHeader name='Sobre' small='o app'></PageHeader>

        <h2>Finalidade</h2>
            <p>Esse aplicativo tem a finalidade de cadastrar e gerenciar tarefas.</p>
        
        <h2>Sobre o build</h2>
            <p>O app foi criado com a utilização das seguintes ferramentas:</p>
            <ul>
                <li>Bootstrap</li>
                <li>React</li>
                <li>Redux</li>
                <li>Webpack</li>
            </ul>
        <h2>Versão</h2>
            <p>1.0</p>
    </div>
)