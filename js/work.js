export default class Work {
    title = "";
    src = "";
    descriptions = "";
    languages = [];
    skills = [];
    links = [];

    constructor(title, src, descriptions, languages, skills, links) {
        this.title = title;
        this.src = src;
        this.descriptions = descriptions;
        this.languages = languages;
        this.skills = skills;
        this.links = links;
    };
}

let findYourHat = new Work("Find Your Hat (Node.js Game)",
    "/images/works/8bjchl.gif",
    "This node.js game is an assignment of a school project of SCTP with Generation.sg and Temasek Poly. This JavaScript programming foundation assignment allows me to demonstrate my creativity and sense of beauty.",
    ["JavaScript"],
    ["node.js", "programming"],
    [{ Replit: "https://replit.com/@Joshua-Ho-Gwok/Find-your-hat#138ee1e2-fda9-4683-9d2a-5e7ae201341a" },
    { GitHub: "https://github.com/Joshua-Ho-Gwok-Hin/EDU-SCTP-TEMASEK-POLY/tree/b04fe847439da296e9aa4a4549646502c4ff5f94/ASSESSMENT%20-%20JavaScript%20-%20Find%20Your%20Hat%20Game" }]);

let battleShips = new Work("BattleShips Game (JRE Game)",
    "/images/works/8bjchl.gif",
    "Hello World This node.js game is an assignment of a school project of SCTP with Generation.sg and Temasek Poly. This JavaScript programming foundation assignment allows me to demonstrate my creativity and sense of beauty.",
    ["Java"],
    ["programming"],
    [{ Replit: "https://replit.com/@Joshua-Ho-Gwok/Find-your-hat#138ee1e2-fda9-4683-9d2a-5e7ae201341a" },
    { GitHub: "https://github.com/Joshua-Ho-Gwok-Hin/EDU-SCTP-TEMASEK-POLY/tree/b04fe847439da296e9aa4a4549646502c4ff5f94/ASSESSMENT%20-%20JavaScript%20-%20Find%20Your%20Hat%20Game" },
    { Others: "" }]);

export const works = [findYourHat, battleShips];