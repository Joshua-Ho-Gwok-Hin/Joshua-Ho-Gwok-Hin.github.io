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

let findYourHat = new Work("Find Your Hat",
    "/images/works/find-your-hat.gif",
    "A runnable version of this role-playing 'Find Your Hat' node.js game is available on Replit. Goal of the game is to navigate with 'u, d, l or r' keys on the keyboard to reach the 'Hat'. Directing to the 'hole or abyss' and boundary will result in gameover.",
    ["JavaScript"],
    ["node.js", "programming foundation", "control-flow"],
    [{ Replit: "https://replit.com/@Joshua-Ho-Gwok/Find-your-hat#138ee1e2-fda9-4683-9d2a-5e7ae201341a" },
    { GitHub: "https://github.com/Joshua-Ho-Gwok-Hin/EDU-SCTP-TEMASEK-POLY/tree/b04fe847439da296e9aa4a4549646502c4ff5f94/ASSESSMENT%20-%20JavaScript%20-%20Find%20Your%20Hat%20Game" }]);

let battleShips = new Work("BattleShips Game",
    "/images/works/battleships.gif",
    "Battleships game in Java, detailed code explanation on GitHub. Runnable version on Replit. A player will place 5 of their ships on a 10 by 10 grid. The computer player will deploy five ships on the same grid. Once the game starts the player and computer take turns, trying to sink each other's ships by guessing the coordinates to 'attack'. The game ends when either the player or computer has no ships left.",
    ["Java"],
    ["JRE", "programming foundation", "control-flow"],
    [{ Replit: "https://replit.com/@Joshua-Ho-Gwok/Battle-Ships-Game#138ee1e2-fda9-4683-9d2a-5e7ae201341a" },
    { GitHub: "https://github.com/Joshua-Ho-Gwok-Hin/EDU-SGUS-LITHAN-NICF/tree/main/java-battle-ships-game" }]);
                
export const works = [findYourHat, battleShips];