export default class Work {
    title = "";
    src = "";
    descriptions = "";
    languages = [];
    skills = [];
    links = [{ replit: "" }, { github: "" }, { link: "" }];

    constructor(title, src, descriptions, languages, skills, links) {
        this.title = title;
        this.src = src;
        this.descriptions = descriptions;
        this.languages = languages;
        this.skills = skills;
        this.links = links;
    }
}