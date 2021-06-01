import styles from './styles.module.scss';

export function Banner() {
    return (
        <div className={styles.Container}>
            <div className={styles.Content + ' ' + 'container'}>
                <div className={'row'}>
                    <div className={'col-12'}>

                        <h1 className={'mb-3'}>Bem vindo ao novo site do TJRN</h1>
                        <p className={'mb-4'}>
                            Acesse nossos canais de atendimento através da página:
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