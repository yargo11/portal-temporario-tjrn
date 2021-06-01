import Banner from '../../../../components/PageMenu/Banner';
import styles from './styles.module.scss';

export default function enviodememorial() {
    return (
        <>
            <Banner title="Envio de Memorial" />
            <div className={styles.Content}>
                <iframe
                    src="http://www.tjrn.jus.br/memorial/formulario.php"
                    allowFullScreen={true}
                    width="1320px"
                    height="820px"
                />
            </div>
        </>
    )
}