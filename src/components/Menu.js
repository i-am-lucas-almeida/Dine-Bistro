import "../styles/components/Menu.css";

import { menuList } from "../assets/data";
import patternLine from "../assets/patterns/pattern-divide.svg";

export default function Menu() {

    return (

        <div className="container menu-c">

            <div className="box-menu_left">

                <img src={patternLine} alt="" />

                <h2>Alguns destaques do nosso cardápio</h2>

                <p>Atendemos a todas as necessidades dietéticas, mas aqui está um vislumbre de alguns pratos favoritos do nosso restaurante. Nosso cardápio é renovado a cada temporada.</p>

            </div>

            <div className="box-menu_right">

                <aside>

                    <img src={menuList[0].image} alt="Filé De Salmão Selado" />
                    <img src={patternLine} alt="" className="line" />

                    <article>

                        <h3>{menuList[0].name}</h3>

                        <p>{menuList[0].description}</p>

                    </article>

                </aside>

                <aside>

                    <img src={menuList[1].image} alt="Lombo Com Alecrim" />
                    <img src={patternLine} alt="" className="line" />

                    <article>

                        <h3>{menuList[1].name}</h3>

                        <p>{menuList[1].description}</p>

                    </article>

                </aside>

                <aside className="border-none">

                    <img src={menuList[2].image} alt="Mousse De Chocolate" />
                    <img src={patternLine} alt="" className="line" />

                    <article>

                        <h3>{menuList[2].name}</h3>

                        <p>{menuList[2].description}</p>

                    </article>

                </aside>

            </div>

        </div>

    );

}