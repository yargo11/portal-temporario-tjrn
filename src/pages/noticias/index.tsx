import { NewsList } from '../../components/News/NewsList';
import styles from './styles.module.scss';

export default function noticias() {
    return (
        <>
            <div className={styles.Container}>
                <h1>TJRN aprova resolução que cria seu Laboratório de Inovação </h1>
                <p>O Pleno do Tribunal de Justiça aprovou na sessão desta quarta-feira (5) resolução que institui a criação
                de um Laboratório de Inovação no âmbito do Poder Judiciário do Rio Grande do Norte, no prazo de 60 dias.
                </p>

                <p>
                    O Laboratório de Inovação é destinado à criação e desenvolvimento de projetos inovadores e à
                    disseminação da cultura da inovação. Ele terá como objetivo promover o constante aprimoramento da
                    prestação jurisdicional seguindo os avanços tecnológicos, acadêmicos e sociais, utilizando métodos que
                    permitam a interação, a cocriação, a empatia, a troca de conhecimento e a prototipagem, com envolvimento
                    de atores internos e externos da Justiça.
                </p>
            </div>
        <NewsList/>
        </>
    )
}