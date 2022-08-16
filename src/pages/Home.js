import "../styles/pages/Home.css";

import { Link } from "react-router-dom";

import Button from "../components/Button";
import Menu from "../components/Menu";

import logoHome from "../assets/logo.svg";
import Cta from "../components/Cta";
import About from "../components/About";
import Events from "../components/Events";

import PageTitle from "../utils/PageTitle";

export default function Home() {

    PageTitle("Dine | Home");

    return (

        <div>

            <header className="container header-home" >

                <div className="header-text">

                    <Link to="/">
                        <img src={logoHome} alt="logo" />
                    </Link>

                    <h1>Banquetes requintados desde 1989</h1>

                    <p>Experimente nosso menu sazonal em belos cenários campestres. Coma os produtos mais frescos preparados por chefs renomados.</p>

                </div>

                <div className="btn-header">

                    <Button text="Reserve uma mesa" color="btn-header_home" />

                </div>

            </header>

            <main>

                <About />

                <Menu />

                <Events />

                <Cta />

            </main>

        </div>

    );

}