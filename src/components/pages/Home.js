import { Link } from 'react-router-dom';

import Button from '../layouts/Button';
import Menu from '../layouts/Menu';
import '../../styles/pages/Home.css';

import logoHome from '../../assets/logo.svg';
import Cta from '../layouts/Cta';
import About from '../layouts/About';
import Events from '../layouts/Events';

export default function Home() {

    return(

        <div>

            <header  className='container header-home' >

                <div className='header-text'>

                    <Link to='/'>
                        <img src={logoHome} alt='logo'/>
                    </Link>

                    <h1>Banquetes requintados desde 1989</h1>

                    <p>Experimente nosso menu sazonal em belos cenários campestres. Coma os produtos mais frescos preparados por chefs renomados.</p>

                </div>

                <div className='btn-header'>

                    <Button text='Reserve uma mesa' color='btn-header_home' />

                </div>
                        
            </header>

            <main>

                <About/>

                <Menu/>

                <Events/>

                <Cta/>

            </main>

        </div>

    )

}