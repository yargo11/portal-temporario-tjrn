import React, { useEffect } from "react";
import * as ReactGA from 'react-ga';
// reactstrap components
import { Modal } from "reactstrap";

import styles from './styles.module.scss';

export function CookiesButton() {
    const [modalOpen, setModalOpen] = React.useState(true);
    const [cookieEnabled, setCookieEnabled] = React.useState('false');

    function toogleModal() {
        setModalOpen(!modalOpen);

        if (typeof window !== 'undefined') {
            localStorage.setItem('GA-tjrn', 'true');
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            setCookieEnabled(localStorage.getItem('GA-tjrn'));
        }
    }, [])

    if(typeof window !== 'undefined' && localStorage.getItem('GA-tjrn')) {
        ReactGA.initialize('UA-38668588-1');
        ReactGA.pageview(window.location.pathname + window.location.search);
    }
    return cookieEnabled ? (
        <></>
    ) : (
        <Modal
            modalClassName={'modalContainer'}
            toggle={() => setModalOpen(!modalOpen)}
            isOpen={modalOpen}
        >
            <div className={styles.Cookies}>
                <p>Os cookies nos permitem oferecer nossos serviços. Ao utilizá-los, você aceita o uso que fazemos dos cookies</p>
                <button type="button" onClick={toogleModal}> Aceito </button>
            </div>
        </Modal >
    )
}

