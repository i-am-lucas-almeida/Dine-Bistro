import "../styles/pages/Reservations.css";

import { Link } from "react-router-dom";

import iconLogo from "../assets/logo.svg";
import bgImage from "../assets/patterns/pattern-curve-bottom-right.svg";

import Form from "../components/Form";

import PageTitle from "../utils/PageTitle";

export default function Reservations() {

    PageTitle("Dine | Reservas");

    return (

        <>

            <header className="header-reservation">

                <div className="container">

                    <div className="logo-reservation">

                        <Link to="/">
                            <img src={iconLogo} alt="logo" />
                        </Link>

                    </div>

                    <div className="box-reservation_left">

                        <h1>Reservas</h1>

                        <p>Mal podemos esperar para receber você. Se houver algum pedido especial, sinta-se a vontade para ligar para o número de telefone abaixo. Ficaremos felizes em recebê-lo.</p>

                    </div>

                    <Form />

                </div>

            </header>

            <main>

                <div className="reservation-c">

                    <img src={bgImage} alt="" className="backg-image" />

                </div>

            </main>

        </>

    );

}