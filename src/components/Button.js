import "../styles/components/Button.css";

import { Link } from "react-router-dom";

export default function Button(props) {

    return (

        <>

            <Link to="/reservas">

                <button className={`${"button"} ${props.color}`}>{props.text}</button>

            </Link>

        </>

    );

}