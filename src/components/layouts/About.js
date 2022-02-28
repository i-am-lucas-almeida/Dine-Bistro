import '../../styles/layouts/About.css';

import PatternLine from '../../assets/patterns/pattern-divide.svg';

import AboutImage_Desktop_1 from '../../assets/homepage/enjoyable-place-desktop.jpg';
import AboutImage_Tablet_1 from '../../assets/homepage/enjoyable-place-tablet.jpg';
import AboutImage_Mobile_1 from '../../assets/homepage/enjoyable-place-mobile.jpg';

import AboutImage_Desktop_2 from '../../assets/homepage/locally-sourced-desktop.jpg';
import AboutImage_Tablet_2 from '../../assets/homepage/locally-sourced-tablet.jpg';
import AboutImage_Mobile_2 from '../../assets/homepage/locally-sourced-mobile.jpg';

import HeroBackgLeft from '../../assets/patterns/pattern-curve-top-right.svg';
import HeroBackgRight from '../../assets/patterns/pattern-curve-top-left.svg';

export default function About() {

    return(

        <div className='container about-c'>

            <img src={HeroBackgLeft} alt='' className='hero-bg_left' />

            <div className="box-home_top">

                <picture className='box-image box-image_top'>

                    <source media="(min-width: 1200px)"
                        srcSet={AboutImage_Desktop_1} />

                    <source media="(max-width: 600px)"
                        srcSet={AboutImage_Mobile_1} />

                    <img className="" src={AboutImage_Tablet_1} alt="Imagem localização do restaurante" />

                </picture>

                <div className='box-text'>

                    <img src={PatternLine} alt='' />

                    <h2 className='subtitle'>Lugar agradável para toda família</h2>

                    <p className='paragraph'>Nosso ambiente descontraído faz com que jantar conosco seja uma ótima experiência para todos. Podemos até organizar um passeio pela fazenda antes da sua refeição.</p>

                </div>

            </div>

            <div className="box-home_bottom">

                <div className='box-text box-text_bottom'>

                    <img src={PatternLine} alt='' />

                    <h2 className='subtitle'>Ingredientes locais e orgânicos</h2>

                    <p className='paragraph'>Todos os nossos ingredientes vêm diretamente de nossa fazenda ou pesca local. Assim, você pode ter certeza de que está comendo os alimentos mais frescos e sustentáveis.</p>

                </div>

                <picture className='box-image box-image_bottom'>

                    <source media="(min-width: 1200px)"
                        srcSet={AboutImage_Desktop_2} />
                    <source media="(max-width: 600px)"
                        srcSet={AboutImage_Mobile_2} />

                    <img className="" src={AboutImage_Tablet_2} alt="Imagem comida local e orgânica" />

                </picture>

            </div>

            <img src={HeroBackgRight} alt='' className='hero-bg_right' />

        </div>

    )

}