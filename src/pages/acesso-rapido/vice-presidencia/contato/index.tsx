import Banner from '../../../../components/PageMenu/Banner'
import styles from './styles.module.scss';



export default function contatoVicePresidencia() {
    return (
        <>
            <Banner title="Vice-Presidência - Contato" />
            <div className={styles.ContactOptions}>
                <h1>Endereço</h1>
                <p id={styles.pHeader}>
                    Praça 7 de Setembro, S/N<br />
                    Natal/RN<br />
                    Rio Grande do Norte<br />
                    59025-300<br />
                    Brasil<br />
                    (84) 3616-6505
                </p>

                <h1>Outras Informações</h1>
                <p id={styles.pHeader}>
                    Os canais de comunicação com a CSI são:<br /><br />

                    HERMES (Comissão de Segurança Institucional - CSI - Vice-Presidência);<br />
                    e-mail (comissaodesegurança@tjrn.jus.br);<br />
                    Fone: 84-3616-6505.<br />
                    Caso o assunto a ser tratado tenha conteúdo reservado, deverá este alerta constar no encaminhamento
                    para que o tratamento se dê com o sigilo necessário.
                </p>
                <p id={styles.pHeader}>
                    As solicitações perante a CSI devem ser feitas por escrito, preferencialmente, sem prejuízo do
                    pronto contato pessoal para tomada de decisões urgentes a serem adotadas no âmbito do Gabinete de
                    Segurança Institucional do Tribunal de Justiça do Rio Grande do Norte, ao qual cabem as ações
                    operacionais
                </p>
            </div>
        </>
    )
}