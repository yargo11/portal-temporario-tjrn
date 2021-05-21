import Banner from '../../../../components/PageMenu/Banner';
import MenuCards from '../../../../components/PageMenu/MenuCards';
import styles from './styles.module.scss';

export default function videostutoriais() {
    return (
        <>
            <Banner title="Vídeos Tutoriais" />
            <div className={styles.ContactOptions}>
                <h1>Teste</h1>
                <iframe 
                width="300"
                height="250" 
                src="https://www.youtube.com/embed/YO3sDGBUVig" 
                title="YouTube video player" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
                    
                </iframe>

            </div>
        </>
    )
}