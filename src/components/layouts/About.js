import { aboutAssets } from '../../assets/data';
import '../../styles/layouts/About.css';

import PatternLine from '../../assets/patterns/pattern-divide.svg';
import HeroBackgLeft from '../../assets/patterns/pattern-curve-top-right.svg';
import HeroBackgRight from '../../assets/patterns/pattern-curve-top-left.svg';

export default function About() {

    return(

        <div className='container about-c'>

            <img src={HeroBackgLeft} alt='' className='hero-bg_left' />

            <div className="box-home_top">

                <picture className='box-image box-image_top'>

                    <source media="(min-width: 1200px)"
                        srcSet={aboutAssets[0].images.desk} />

                    <source media="(max-width: 600px)"
                        srcSet={aboutAssets[0].images.mobile} />

                    <img src={aboutAssets[0].images.tablet} alt={aboutAssets[0].subtitle} />

                </picture>

                <div className='box-text'>

                    <img src={PatternLine} alt='' />

                    <h2 className='subtitle'>{aboutAssets[0].subtitle}</h2>

                    <p className='paragraph'>{aboutAssets[0].description}</p>

                </div>

            </div>

            <div className="box-home_bottom">

                <div className='box-text box-text_bottom'>

                    <img src={PatternLine} alt='' />

                    <h2 className='subtitle'>{aboutAssets[1].subtitle}</h2>

                    <p className='paragraph'>{aboutAssets[1].description}</p>

                </div>

                <picture className='box-image box-image_bottom'>

                    <source media="(min-width: 1200px)"
                        srcSet={aboutAssets[1].images.desk} />
                    <source media="(max-width: 600px)"
                        srcSet={aboutAssets[1].images.mobile} />

                    <img src={aboutAssets[1].images.tablet} alt={aboutAssets[1].subtitle} />

                </picture>

            </div>

            <img src={HeroBackgRight} alt='' className='hero-bg_right' />

        </div>

    )

}