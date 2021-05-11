import styles from './styles.module.scss';

export function Banner() {
    return (
        <div className={styles.Container}>
            <div className={styles.Content}>
                <h1>Bem vindo ao site temporário do TJRN</h1>
                <p>
                    Lacus proin volutpat varius ut id nisl mauris blandit faucibus egestas risus ipsum senectus nunc,
                    volutpat gravida purus condimentum nulla cursus velit at amet non elementum et sed ligula
                </p>
                <span>
                    <a href="">
                        Clique para mais informações
                    </a>
                </span>

            </div>
        </div>
    )
}