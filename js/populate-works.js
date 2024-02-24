import Work from './work';

let testingwork = document.getElementById('testworks');
testingwork.innerHTML = "hello";

let works = [];

let findYourHat = new Work("Find Your Hat (Node.js Game)",
    "/images/works/8bjchl.gif",
    "<p>This node.js game is an assignment of a school project of SCTP with Generation.sg and Temasek Poly. This JavaScript programming foundation assignment allows me to demonstrate my creativity and sense of beauty.</p>",
    ["JavaScript"],
    ["node.js"],
    [{ replit: "https://replit.com/@Joshua-Ho-Gwok/Find-your-hat#138ee1e2-fda9-4683-9d2a-5e7ae201341a" },
    { github: "https://github.com/Joshua-Ho-Gwok-Hin/EDU-SCTP-TEMASEK-POLY/tree/b04fe847439da296e9aa4a4549646502c4ff5f94/ASSESSMENT%20-%20JavaScript%20-%20Find%20Your%20Hat%20Game" }]);

let hello = new Work("Find Your Hat (Node.js Game)",
    "/images/works/8bjchl.gif",
    "<p>This node.js game is an assignment of a school project of SCTP with Generation.sg and Temasek Poly. This JavaScript programming foundation assignment allows me to demonstrate my creativity and sense of beauty.</p>",
    ["JavaScript"],
    ["node.js"],
    [{ replit: "https://replit.com/@Joshua-Ho-Gwok/Find-your-hat#138ee1e2-fda9-4683-9d2a-5e7ae201341a" },
    { github: "https://github.com/Joshua-Ho-Gwok-Hin/EDU-SCTP-TEMASEK-POLY/tree/b04fe847439da296e9aa4a4549646502c4ff5f94/ASSESSMENT%20-%20JavaScript%20-%20Find%20Your%20Hat%20Game" }]);

works = [findYourHat, hello];

const populateworks = ()=>{
    // testingwork.innerHTML = "hello";
}

populateworks();

