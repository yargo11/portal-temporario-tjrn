import styles from './styles.module.scss';

export function Banner() {
    return (
        <div className={styles.Container}>
            <div className={styles.Content + ' ' + 'container'}>
                <div className={'row'}>
                    <div className={'col-12'}>

                        <h1 className={'mb-3'}>Bem vindo ao site temporário do TJRN</h1>
                        <p className={'mb-4'}>
                            Lacus proin volutpat varius ut id nisl mauris blandit faucibus egestas risus ipsum senectus
                            nunc,
                            volutpat gravida purus condimentum nulla cursus velit at amet non elementum et sed ligula
                        </p>
                        <span>
                            <a href="">
                                Clique para mais informações
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}