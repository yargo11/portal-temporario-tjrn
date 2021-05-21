import styles from './styles.module.scss';

import Banner from '../../../components/PageMenu/Banner';
import MenuCards from '../../../components/PageMenu/MenuCards';

export default function leiloesjudiciais() {
    return (
        <>
            <Banner title="Cadastro de Peritos" />
            <div className={styles.ContactOptions}>
                <h1>Núcleo de Perícias</h1>
                <p id={styles.pHeader}>Sistema NUPEJ</p>

                <div className={styles.CardOptions}>
                    <MenuCards
                        title="Resoluções"
                        anchor="/acesso-rapido/cadastro-de-peritos/resolucoes"
                    />

                    <MenuCards
                        title="Edital de credenciamento"
                        anchor="/acesso-rapido/cadastro-de-peritos/edital-de-credenciamento"
                    />

                    <MenuCards
                        title="Lista de Peritos/Órgãos credenciados"
                        anchor="https://apps.tjrn.jus.br/nupej_public/f/pages/areapublica/areapublica.xhtml"
                    />

                    <MenuCards
                        title="Videos tutoriais"
                        anchor="/acesso-rapido/cadastro-de-peritos/videos-tutoriais"
                    />

                    <MenuCards
                        title="Acessar o Sistema"
                        anchor="https://apps.tjrn.jus.br/nupej_public/f/login.xhtml"
                        description="Se for o seu primeiro acesso veja os vídeos tutoriais."
                    />
                </div>

                <p id={styles.pDescription}>
                    <strong>Dúvidas</strong>: <br />
                    (84) 3616-9698 / 9696<br />
                    (84) 98726-2180 (whatsapp)
                </p>
            </div>
        </>
    )
}