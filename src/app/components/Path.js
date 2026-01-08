export default ({ description }) => {
    const name =
        window.location.hash.replace("#", "") ||
        window.location.pathname.replace("/", "") ||
        "home";

    return /*html*/`
        <div class="path">
            <h1 class="h1 path__name">#${name}</h1>
            <p class="path__description">${description}</p>
        </div>
    `;
};
