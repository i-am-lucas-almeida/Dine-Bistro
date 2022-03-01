import { Link } from "react-router-dom";
import '../../styles/layouts/Button.css';

export default function Button(props) {

    return(

        <>
    
            <Link to='/reservas'>

                <button className={`${'button'} ${props.color}`}>{props.text}</button>

            </Link>
        
        </>

    )

}