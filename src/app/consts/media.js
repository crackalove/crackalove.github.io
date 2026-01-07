import proxy from "../proxies/media"

const media = {
    telegram: "UnRezolved",
    github: "crackalove",
    email: "crackacodes@gmail.com"
};

export default new Proxy(media, proxy);

