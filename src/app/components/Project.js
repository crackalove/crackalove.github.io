import projects from "@/consts/projects";
import websites from "@/consts/websites";
import techs from "@/consts/techs";
import media from "@/consts/media";

function mapLinks(links) {
    return Object.entries(links)
        .map(([name, value]) => {
            let href = value;

            if (!href.startsWith("http")) {
                if (name === "figma") {
                    href = `https://figma.com/community/file/${value}`;
                } else if (name === "github" && value.startsWith("/")) {
                    href = media.github + value;
                } else {
                    href = "https://" + value;
                }
            }

            const label = name[0].toUpperCase() + name.slice(1);

            return `<a href="${href}" class="button">${label} =></a>`;
        })
        .join("");
}

export default ({ id }, t) => {
    const project = projects.find(p => p.id === id);
    if (!project) return "";

    const { hasImage, techs: projectTech, links } = project;


    return /*html*/ `
        <div class="project">
            ${
                hasImage
                    ? `<img src="/images/projects/${id}.webp" alt="${t[id].name}" class="project__image">`
                    : ""
            }
            
            <ul class="project__techs">
                ${projectTech
                    .map(
                        (tech) =>
                            /*html*/ `<li class="project__tech">${techs[tech]}</li>`
                    )
                    .join("")}
            </ul> 

            <div class="project__content">
                <div class="project__name">${t[id].name}</div>
                <div class="project__description">${t[id].description}</div>
                <div class="project__links">${mapLinks(links)}</div>
            </div>
        </div> 
    `;
};
