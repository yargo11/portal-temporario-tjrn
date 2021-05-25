import styles from './styles.module.scss';

import { FiFacebook, FiInstagram, FiTwitter, FiYoutube } from 'react-icons/fi'

export function Footer() {
    return (
        <div className={styles.Container}>
            <h3>
                Tribunal de Justiça do Estado do Rio Grande do Norte - Praça
                Sete de Setembro, nº 34, Cidade Alta, Natal/RN, CEP 59025-300 -
                (84) 3616-6200
            </h3>

            <div>
                < a href="https://www.facebook.com/tjrnoficial" className={styles.Facebook}><FiFacebook size={36} /></a>
                < a href="https://www.instagram.com/tjrnoficial/" className={styles.Instagram}><FiInstagram size={36} /></a>
                < a href="https://twitter.com/tjrnnoticias" className={styles.Twitter}><FiTwitter size={36} /></a>
                < a href="https://www.youtube.com/user/canaltjrn" className={styles.Youtube}><FiYoutube size={36} /></a>
            </div>
        </div>
    )
}