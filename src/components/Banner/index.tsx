import styles from './styles.module.scss';

export function Banner() {
    return (
        <div className={styles.Container}>
            <div className={styles.Content + ' ' + 'container'}>
                <div className={'row'}>
                    <div className={'col-12'}>

                        {/* <h1 className={'mb-3'}>Bem vindo ao novo site do TJRN</h1> */}
                        <p className={'mb-4'}>
                            <a className={styles.LinkBanner} href="/acesso-rapido/consulta-processual/">
                                Consulta Processual
                            </a>
                        </p>
                        <p className={'mb-4'}>
                            <a className={styles.LinkBanner} href="/acesso-rapido/certidoes/">
                                Certidões
                            </a>
                        </p>
                        <p className={'mb-4'}>
                            <a className={styles.LinkBanner} href="http://www.tjrn.jus.br/canaisdeatendimento/">
                                Canais de Atendimento
                            </a>
                        </p>
                        {/* <span>
                            <a href="">
                                Clique para mais informações
                            </a>
                        </span> */}
                    </div>
                </div>
            </div>
        </div>
    )
}