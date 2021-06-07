import Banner from '../../../components/PageMenu/Banner';
import styles from './styles.module.scss';

export default function plantaodojudiciario() {
    return (
        <>
            <Banner title="Plantão do Judiciário" />
            <div className={styles.ContactOptions}>
                <h1>Plantões do 1º grau</h1>
                <p id={styles.pHeader}><a href="http://corregedoria.tjrn.jus.br/index.php/judicial/plantoes" target="_blank">Clique Aqui</a></p>

                <h1>Plantões do 2º grau</h1>

                <p id={styles.pHeader}>HORÁRIO:</p>

                <p id={styles.pDescription}>
                    <span>• Plantão Diurno (Medidas de Urgência):</span><br />
                    8:00 às 18:00 horas (Sábados, Domingos, Feriados e horários em que não haja expediente)<br />
                    <br />
                    <span>• Plantão Noturno (Medidas de Urgência em caso de extrema necessidade)</span><br />
                    18:00 às 8:00 horas (Todas as noites, inclusive final de semana)<br />
                </p>

                <hr />
                <p id={styles.pDescription}>
                    <span>O que é o Plantão Judiciário?</span><br />
                    É um Plantão Permanente da Justiça Estadual, com Juízes e Servidores preparados para apreciar
                    medidas de urgência requeridas fora do horário normal de expediente.<br />
                    <br />
                    <span>É possível procurar a Justiça para resolver qualquer problema?</span><br />
                    Não. O Plantão é tão somente para medidas de urgência.<br />
                    <br />
                    <span>Quais são as medidas de urgência que podem ser apreciadas no Plantão?</span><br />
                    Somente as medidas estabelecidas pelo CNJ e que estão no art. 5º da Resolução nº 26/2012-TJ. São
                    elas:<br />
                    <br />
                    <span>I</span> – habeas-corpus e mandados de segurança;<br />
                    <span>II</span> - prisão em flagrante e liberdade provisória.<br />
                    <span>III</span> - decretação de prisão preventiva ou temporária.<br />
                    <span>IV</span> - busca e apreensão de pessoas, bens ou valores.<br />
                    <span>V</span> – medida cautelar ou antecipatória, cível ou criminal, que não possam ser realizadas no horário
                    normal de expediente.<br />
                    <span>VI</span> – medidas urgentes, cíveis ou criminais, da competência dos Juizados Especiais.<br />
                    <span>VII</span> – medidas de urgência do Estatuto da Criança e do Adolescente.<br />
                    <span>VIII</span> – outras medidas de extrema urgência, se o Juiz entender que seja imprescindível e inadiável a
                    apreciação durante o plantão.<br />
                    <br />
                    <span>Onde se deve procurar o Plantão Judiciário durante o dia?</span><br />
                    Os Juízes e Servidores estarão de Plantão em todas a regiões do Estado. Basta olhar na tabela de
                    Plantão, divulgada pela Corregedoria, que constará a cidade onde se realiza. Em Natal, o Plantão
                    ocorrerá sempre no anexo do Fórum Miguel Seabra Fagundes.<br />
                </p>

                <p id={styles.pHeader}>PLANTÃO NOTURNO:</p>

                <p id={styles.pDescription}>
                    <span>Se houver necessidade é possível solicitar estas medidas mesmo durante o período noturno?</span><br />
                    Sim, mas no Plantão Noturno (das 18:00 às 8:00 horas) os Juízes e Servidores não ficam no local, mas
                     de sobreaviso. Haverá pessoas no local mas os Juízes e servidores somente atendem em CASOS
                     EXCEPCIONAIS.<br />
                    <br />
                    <span>E o que é um caso EXCEPCIONAL que justifica o atendimento durante a noite?</span><br />
                    São aquelas medidas de urgência em que sejam demonstradas 03 condições:<br />
                    <br />
                    <span>I</span> – que o pedido não poderia ter sido feito durante o expediente normal ou o plantão diurno.<br />
                    <span>II</span> – que não pode esperar o dia seguinte.<br />
                    <span>III</span> – que possa, acaso deferida, ser imediatamente cumprida.<br />
                    <br />
                    Basta faltar uma destas condições para o Juiz sequer examinar o pedido.<br />
                    <br />
                    <span>Onde se deve procurar o Plantão Judiciário no período da noite?</span><br />
                    O Plantão Noturno ocorrerá, inicialmente, centralizado em Natal e o interessado deverá se dirigir ao
                     prédio do Tribunal de Justiça, na praça 7 de setembro, Centro.<br />
                    <br />
                    <span>E se a necessidade durante a noite for proveniente do interior do Estado?</span><br />
                    Nesta hipótese, o local é o mesmo e o Juiz que irá decidir é o de Natal, mas é possível, em casos de
                     extrema necessidade, ser feita solicitação através de e-mail, que estará sujeita a algumas medidas
                     de confirmação e segurança.<br />
                </p>

                {/* <p id={styles.pHeader}>[ VEJA A ESCALA DE PLANTÃO (Não implementado ainda: http://www.tjrn.jus.br/index.php/judicial/plantao-do-judiciario/2012-09-09-17-44-17)]:</p> */}

                <p id={styles.pHeader}>CONTATOS:</p>

                <p id={styles.pDescription}>
                    Telefones: (84) 3616-6200<br />
                    E-mail: plantao@tjrn.jus.br
                </p>
            </div>
        </>
    )
}