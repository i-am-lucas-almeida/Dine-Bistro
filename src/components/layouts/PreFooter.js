import Button from '../layouts/Button';
import '../../styles/layouts/PreFooter.css';

export default function PreFooter() {

    return(

        <>
        
            <div className='preFooter-c'>

                <div className='container'>

                    <h1>Pronto para fazer uma reserva?</h1>

                    <Button text='Reserve uma mesa' color='btn-preFooter' />

                </div>

            </div>

        </>

    )

}