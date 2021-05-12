import styles from './styles.module.scss';
import { FiChevronRight } from 'react-icons/fi';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import Button from 'react-bootstrap/Button';

export function Header() {
    return (
        <div className={styles.Container}>
            <img src="/images/logo.svg" />
            <div>
                <ul>
                    <a href="http://intranet.tjrn.jus.br/">
                        <li>
                            INTRANET <FiChevronRight />
                        </li>
                    </a>
                    <a href="http://webmail.tjrn.jus.br/">
                        <li>
                            WEBMAIL <FiChevronRight />
                        </li>
                    </a>
                    <a href="">
                        <li>
                            TRANSPARÊNCIA <FiChevronRight />
                        </li>
                    </a>
                </ul>
            </div>
        </div>
    )
}