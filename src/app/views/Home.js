import Hero from "@/blocks/home/Hero.js";
import Quote from "@/blocks/home/Quote.js";
import Projects from "@/blocks/home/Projects.js";
import Skills from "@/blocks/home/Skills.js";
import About from "@/blocks/home/About.js";
import Contacts from "@/blocks/home/Contacts.js";

import "styles/pages/home.sass";

export default (t, locale) => {
    const home = t.pages.home;

    return /*html*/`
        ${Hero(home.hero)}
        ${Quote(home.quote)}
        ${Projects(home.projects, locale.projects)}
        ${Skills(home.skills, locale.skills)}
        ${About(home.about)}
        ${Contacts(home.contacts)}
    `;
};
