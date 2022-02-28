import '../../styles/layouts/Form.css';

import {useState} from 'react';
import { Days, Minutes, Hours, Month } from '../layouts/Options';
import {FaCheckCircle} from 'react-icons/fa';
import validate from './FormValidation';
import useForm from './useForm';
 
import iconPlus from '../../assets/icons/icon-plus.svg';
import iconMinus from '../../assets/icons/icon-minus.svg';
import linesImage from '../../assets/patterns/pattern-lines.svg';

function Form() {

    const {
        values,
        errors,
        handleChange,
        handleSubmit,
        valid,
        isSubmitting,
    } = useForm(validate);

    const time = new Date();
    const actual_year = time.getFullYear();

    const [counter, setCounter] = useState(1);

    const counterPlus = () => {

        if(counter < 15) {
            setCounter(counter + 1);
        }

    }

    const counterMinus = () => {

        if(counter >= 2) {
            setCounter(counter - 1);
        }

    }

    let people = '';

    function person() {

        counter === 1 ? people = 'pessoa' : people = 'pessoas';

    }

    person();

    return(

        <div className='form-c'>

        {isSubmitting && valid ? 

                <div className='box-success animate__animated animate__slideInDown'>

                    <aside>

                        <FaCheckCircle className='icon' />

                        <h2>Sua reserva foi efetuada com sucesso!</h2>

                    </aside>

                    <p><b>Nome: </b>{values.name}</p>

                    <p><b>Reserva para: </b>{counter + ' ' + people}</p>

                    <p><b>Data da reserva: </b>{values.day} de {values.month} de {values.year}</p>

                    <p><b>Horário da reserva: </b>{values.hour}:{values.minutes} {values.period}</p>

                    <p className='footer'><b>Dica: </b>Para sua comodidade, evite atrasos. Tolerância de <b>30 minutos</b>. Após o horário da reserva, estará sujeito a espera.</p>
                     
                </div>

             : 

            <form onSubmit={handleSubmit} id="form" noValidate>

                <div>

                    <input type="text" name="name" id="name" placeholder="Nome" value={values.name} onChange={handleChange} className={errors.name ? 'error' : ''} />

                    {errors.name && <small className='error_message'>{errors.name}</small>}

                </div>

                <div>

                    <input type="email" name="email" id="email" placeholder="E-mail" value={values.email} onChange={handleChange} className={errors.email ? 'error' : ''} />

                    {errors.email && <small className='error_message'>{errors.email}</small>}

                </div>

                <div className="date-area">

                    <h4>Escolha uma data</h4>

                    <div>

                        <select name="day" id="day" value={values.day} onChange={handleChange} required>
                            
                            <Days />

                        </select>

                        <select name="month" id="month" value={values.month} onChange={handleChange} required>

                            <Month/>

                        </select>

                        <select name="year" id="year" value={values.year} onChange={handleChange} required>

                            <option value="">AA</option>
                            <option value="2022">{actual_year}</option>

                        </select>

                    </div>

                    {errors.date && <small className='error_message'>{errors.date}</small>}

                </div>

                <div className="time-area">

                    <h4>Escolha um horário</h4>

                    <div>

                        <select name="hour" id="hour" value={values.hour} onChange={handleChange}  required>

                            <Hours/>

                        </select>

                        <select name="minutes" id="minutes" value={values.minutes} onChange={handleChange} required>

                            <Minutes/>

                        </select>

                        <select name="period" id='period' value={values.period} onChange={handleChange}>

                            <option value="AM">AM</option>
                            <option value="PM">PM</option>

                        </select>

                    </div>

                    {errors.time && <small className='error_message'>{errors.time}</small>}

                </div>

                <div className="quant-peoples">

                    <img src={iconMinus} id="minus" alt='' onClick={counterMinus} />

                    <span className="people-num" id="peopleNum">{counter + ' ' + people}</span>

                    <img src={iconPlus} id="plus" alt='' onClick={counterPlus}  />

                </div>

                <input type="submit" value="Make Reservation" className="button-reservation" id="buttonReserv" />

            </form>

        }

            <img src={linesImage} alt='' className='fixed-image' />
        
        </div>

    )

}

export default Form;