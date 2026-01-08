import media from "@/consts/media";

const contacts = [
    {
        name: "telegram",
        text: "UnRezolved",
    },
    {
        name: "email",
        text: "crackacodes@gmail.com",
    }
];

export default (t) => {
    return /*html*/ `
        <sections class="contacts" id="contacts">
            <h2 class="h2">${t.title}</h2>
            <div class="contacts__content">
                <p class="contacts__description">${t.text}</p>
                <div class="contacts__media">
                    <h3 class="contacts__title">${t.media}</h3>
                    <div class="contacts__list">
                        ${contacts
                            .map(
                                (contact) => /*html*/ `
                            <a class="contact" href="${media[contact.name]}" target="_blank" rel="noopener">
                                <img src="/images/icons/${  
                                    contact.name
                                }.svg" alt="">
                                <div class="contact__name">${contact.text}</div>
                            </a>
                        `
                            )
                            .join("")}
                    </div>
                </div>
            </div>

        </sections>
    `;
};
