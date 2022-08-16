//About
import AboutImage_Desktop_1 from "./homepage/enjoyable-place-desktop.jpg";
import AboutImage_Tablet_1 from "./homepage/enjoyable-place-tablet.jpg";
import AboutImage_Mobile_1 from "./homepage/enjoyable-place-mobile.jpg";

import AboutImage_Desktop_2 from "./homepage/locally-sourced-desktop.jpg";
import AboutImage_Tablet_2 from "./homepage/locally-sourced-tablet.jpg";
import AboutImage_Mobile_2 from "./homepage/locally-sourced-mobile.jpg";

//Menu List
import menuImage_1 from "./homepage/salmon-desktop.jpg";
import menuImage_2 from "./homepage/beef-desktop.jpg";
import menuImage_3 from "./homepage/chocolate-desktop.jpg";

//Events
import familyDesk from "./homepage/family-gathering-desktop.jpg";
import familyTab from "./homepage/family-gathering-tablet.jpg";
import familyMob from "./homepage/family-gathering-mobile.jpg";

import specialDesk from "./homepage/special-events-desktop.jpg";
import specialTab from "./homepage/special-events-tablet.jpg";
import specialMob from "./homepage/special-events-mobile.jpg";

import socialDesk from "./homepage/social-events-desktop.jpg";
import socialTab from "./homepage/social-events-tablet.jpg";
import socialMob from "./homepage/social-events-mobile.jpg";

export const aboutAssets = [

  {
    subtitle: "Lugar agradável para toda família",
    description: "Nosso ambiente descontraído faz com que jantar conosco seja uma ótima experiência para todos. Podemos até organizar um passeio pela fazenda antes da sua refeição.",

    images: {
      desk: AboutImage_Desktop_1,
      tablet: AboutImage_Tablet_1,
      mobile: AboutImage_Mobile_1,
    },

  },

  {
    subtitle: "Ingredientes locais e orgânicos",
    description: "Todos os nossos ingredientes vêm diretamente de nossa fazenda ou pesca local. Assim, você pode ter certeza de que está comendo os alimentos mais frescos e sustentáveis.",

    images: {
      desk: AboutImage_Desktop_2,
      tablet: AboutImage_Tablet_2,
      mobile: AboutImage_Mobile_2,
    },

  },

];

export const menuList = [

  {
    image: menuImage_1,
    name: "Filé De Salmão Selado" ,
    description: "Nosso salmão de origem local servido com uma refrescante salada de verão de trigo sarraceno.",
  },

  {
    image: menuImage_2,
    name: "Lombo Com Alecrim" ,
    description: "Nossa carne nobre servida ao seu gosto com uma deliciosa escolha de acompanhamentos sazonais.",
  },

  {
    image: menuImage_3,
    name: "Mousse De Chocolate" ,
    description: "Nosso mousse de chocolate Belga combinado com frutas de verão e raspas de chocolate amargo.",
  },

];

export const eventItems = [

  {

    id: 1,
    title: "Eventos Familiares",
    description: "Adoramos atender famílias inteiras. Então, por favor, traga todos para uma refeição especial com seus entes queridos. Vamos proporcionar uma experiência memorável para todos.",

    images: {
      desk: familyDesk,
      tablet: familyTab,
      mobile: familyMob
    },

  },

  {

    id: 2,
    title: "Eventos Especiais",
    description: "Seja um jantar romântico ou uma data especial que você está comemorando com outras pessoas, nós cuidaremos de você. Com certeza marcaremos sua data especial com um banquete inesquecível.",
    images: {
      desk: specialDesk,
      tablet: specialTab,
      mobile: specialMob
    },

  },

  {

   id: 3,
    title: "Eventos Sociais",
    description: "Você precisa de um evento social maior? Sem problemas! Estamos mais do que felizes em atender grandes festas. Trabalharemos com você para tornar seu evento um sucesso para todos.",
    images: {
      desk: socialDesk,
      tablet: socialTab,
      mobile: socialMob
    },

  },

];