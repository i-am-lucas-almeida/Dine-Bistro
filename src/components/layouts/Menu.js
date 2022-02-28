import menuImage_1 from '../../assets/homepage/salmon-desktop.jpg';
import menuImage_2 from '../../assets/homepage/beef-desktop.jpg';
import menuImage_3 from '../../assets/homepage/chocolate-desktop.jpg';
import patternLine from '../../assets/patterns/pattern-divide.svg';

import '../../styles/layouts/Menu.css';

export default function Menu() {

    return(

        <div className='container menu-c'>

            <div className='box-menu_left'>

                <img src={patternLine} alt='' />

                <h2>Alguns destaques do nosso cardápio</h2>

                <p>Atendemos a todas as necessidades dietéticas, mas aqui está um vislumbre de alguns pratos favoritos do nosso restaurante. Nosso cardápio é renovado a cada temporada.</p>

            </div>

            <div className='box-menu_right'>

                <aside>

                    <img src={menuImage_1} alt='Filé De Salmão Selado' />
                    <img src={patternLine} alt='' className='line' />

                    <article>

                        <h3>Filé De Salmão Selado</h3>

                        <p>Nosso salmão de origem local servido com uma refrescante salada de verão de trigo sarraceno.</p>

                    </article>

                </aside>

                <aside>

                    <img src={menuImage_2} alt='Lombo Com Alecrim' />
                    <img src={patternLine} alt='' className='line' />

                    <article>

                        <h3>Lombo Com Alecrim</h3>

                        <p>Nossa carne nobre servida ao seu gosto com uma deliciosa escolha de acompanhamentos sazonais.</p>

                    </article>

                </aside>

                <aside className='border-none'>

                    <img src={menuImage_3} alt='Mousse De Chocolate' />
                    <img src={patternLine} alt='' className='line' />

                    <article>

                        <h3>Mousse De Chocolate</h3>

                        <p>Nosso mousse de chocolate Belga combinado com frutas de verão e raspas de chocolate amargo.</p>

                    </article>

                </aside>

            </div>

        </div>

    )

}