import styles from './styles.module.scss';

export function News() {
    return (
        <div className={styles.Content + ' ' + 'container'}>
            <div className={'row'}>

                <div className={'col-12 ' + styles.Titulo}>
                    <h1>Notícias do Judiciário</h1>
                    <span>
                        <a href="#">Ver todas as notícias</a>
                    </span>
                </div>

                <div className={'col-12'}>
                    <div className='Border-bottom-line'/>
                </div>
                <div className={styles.NoticiaItem + ' ' + 'col-6 mt-5'}>
                    <a href="#">
                        <p>
                            Esmarn: diligências eletrônicas na atuação do Oficial de Justiça é tema de curso;
                            inscrições
                            até 21 de maio
                        </p>
                        <span>
                            10 Mai 2021
                         </span>
                        <p>
                            A Coordenação de Cursos de Formação Continuada de Servidores da Escola da Magistratura
                            do RN
                            (Esmarn) comunica a oferta de 50 vagas para ...
                        </p>
                    </a>
                    <div className='Border-bottom-line margin-top-24'/>
                </div>

                <div className={styles.NoticiaItem + ' ' + 'col-6 mt-5'}>
                    <a href="#">
                        <p>
                            Fornecedores de serviços são condenados por demora na entrega e falhas em móveis
                        </p>
                        <span>
                            10 Mai 2021
                         </span>
                        <p>
                            A Coordenação de Cursos de Formação Continuada de Servidores da Escola da Magistratura do RN (Esmarn) comunica a oferta de 50 vagas para ...
                        </p>
                    </a>
                    <div className='Border-bottom-line margin-top-24'/>
                </div>

                <div className={styles.NoticiaItem + ' ' + 'col-6'}>
                    <a href="#">
                        <p>
                            Juizados: novas Turmas Temporárias são instaladas a partir desta segunda-feira (10)
                        </p>
                        <span>
                            10 Mai 2021
                         </span>
                        <p>
                            A Coordenação de Cursos de Formação Continuada de Servidores da Escola da Magistratura do RN (Esmarn) comunica a oferta de 50 vagas para ...
                        </p>
                    </a>
                    <div className='Border-bottom-line margin-top-24'/>
                </div>

                <div className={styles.NoticiaItem + ' ' + 'col-6'}>
                    <a href="#">
                        <p>
                            Violência contra a mulher: Formulário Nacional de Avaliação de Risco agora é lei
                        </p>
                        <span>
                            10 Mai 2021
                         </span>
                        <p>
                            A Coordenação de Cursos de Formação Continuada de Servidores da Escola da Magistratura do RN (Esmarn) comunica a oferta de 50 vagas para ...
                        </p>
                    </a>
                    <div className='Border-bottom-line margin-top-24'/>
                </div>

                <div className={styles.NoticiaItem + ' ' + 'col-6'}>
                    <a href="#">
                        <p>
                            Esmarn: diligências eletrônicas na atuação do Oficial de Justiça é tema de curso;
                            inscrições
                            até 21 de maio
                        </p>
                        <span>
                            10 Mai 2021
                         </span>
                        <p>
                            A Coordenação de Cursos de Formação Continuada de Servidores da Escola da Magistratura
                            do RN
                            (Esmarn) comunica a oferta de 50 vagas para ...
                        </p>
                    </a>
                    <div className='Border-bottom-line margin-top-24'/>
                </div>

                <div className={styles.NoticiaItem + ' ' + 'col-6'}>
                    <a href="#">
                        <p>
                            Esmarn: diligências eletrônicas na atuação do Oficial de Justiça é tema de curso;
                            inscrições
                            até 21 de maio
                        </p>
                        <span>
                            10 Mai 2021
                         </span>
                        <p>
                            A Coordenação de Cursos de Formação Continuada de Servidores da Escola da Magistratura
                            do RN (Esmarn) comunica a oferta de 50 vagas para ...
                        </p>
                    </a>
                    <div className='Border-bottom-line margin-top-24'/>
                </div>


            </div>
        </div>
    )
}