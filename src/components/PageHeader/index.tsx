import React from 'react';

import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css'

/* Conceito do typescript pra fazer a tipagem de um objeto
as propriedades que eu recebo são objetos, pra podermos dar nomes pras propriedades desse objeto
daria pra ser por exemplo array mas dai n teria a vibes discionario da coisa
Para ser o opcional é colocar desse forma "title?" e colocar um valor default ou então não mostar nada
*/
interface PageHeaderProps {
    title: string;
}
/* "PageHeader é do tipo React Funcional Component" */
const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar"/>
                </Link>
                <img src={logoImg} alt="Proffy"/>
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                
                {props.children}
            </div>
        </header>
    );
}

export default PageHeader;