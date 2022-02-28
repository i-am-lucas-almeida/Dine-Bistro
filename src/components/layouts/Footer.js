import {Link} from 'react-router-dom';
import '../../styles/layouts/Footer.css';

import iconLogo from '../../assets/logo.svg';

export default function Footer() {

    return(

        <>
        
            <footer>

                <div className='container footer-c'>

                    <div className='box-footer_left'>

                        <Link to='/'>
                            <img src={iconLogo} alt='logo' />
                        </Link>

                    </div>

                    <div className='box-footer_right'>

                        <ul className='box-address'>

                            <li>Barão de Capanema</li>

                            <li>São Paulo</li>

                            <li><b>(11) 96918-9947</b></li>

                        </ul>

                        <ul className='box-hours'>

                            <li>Horário de Funcionamento</li>
                            <li>SEG - SEX: 9H00 - 22H00</li>
                            <li>SÁB - DOM: 9H00 - 23H30</li>

                        </ul>

                    </div>

                </div>

            </footer>

        </>

    )

}