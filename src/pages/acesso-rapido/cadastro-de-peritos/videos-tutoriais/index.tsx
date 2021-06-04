import Banner from '../../../../components/PageMenu/Banner';
import MenuCards from '../../../../components/PageMenu/MenuCards';
import styles from './styles.module.scss';

export default function videostutoriais() {
    return (
        <>
            <Banner title="Vídeos Tutoriais" />
            <div className={styles.ContactOptions}>

                <p id={styles.pHeader}>Acesso ao sistema e alteração da senha</p>

                <iframe
                    width="380"
                    height="300"
                    src="https://www.youtube.com/embed/YO3sDGBUVig"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>

                <p id={styles.pHeader}>Adquirir credenciais de acesso ao sistema</p>
                <iframe
                    width="380"
                    height="300"
                    src="https://www.youtube.com/embed/jb16Itd-uuU"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>

                <p id={styles.pHeader}>Cadastro parte-01</p>
                <iframe
                    width="380"
                    height="300"
                    src="https://www.youtube.com/embed/v3ueZC-Zv9E"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>

                <p id={styles.pHeader}>Cadastro parte-02</p>
                <iframe
                    width="380"
                    height="300"
                    src="https://www.youtube.com/embed/ULeSEFg4iNE"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>

                <p id={styles.pHeader}>Recuperar senha</p>
                <iframe
                    width="380"
                    height="300"
                    src="https://www.youtube.com/embed/gsU09MohzSE"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen></iframe>

            </div>
        </>
    )
}