import { works } from './work.js';

const populateworks = (inputArray) => {

    let displayArray = document.getElementById('works');

    let stringHTML = '';

    for (let i = 0; i < inputArray.length; i++) {
        let title = inputArray[i]["title"];
        let src = inputArray[i]["src"];
        let descriptions = inputArray[i]["descriptions"];
        let languages = inputArray[i]["languages"];
        let skills = inputArray[i]["skills"];
        let links = inputArray[i]["links"];

        stringHTML += `
            <article class="row mt-5">
                <h2 class="py-3 text-info console-font">${title}</h2>
                <section class="col-12 col-md-6 col-lg-4 border-right">
                    <img src="${src}" alt="" class="w-100">
                </section>
                <section class="col-12 col-md-6 col-lg-6 col-xl-4">
                    <h3 class="">Descriptions:</h3>
                    <p>${descriptions}</p>
                    <h4 class="">Languages:</h4>
                    <ul>`;

        for (let j = 0; j < languages.length; j++) {
            stringHTML += `
                        <li>${languages[j]}</li>`;
        };

        stringHTML += `
                    </ul>
                    <h4 class="">Skills:</h4>
                    <ul>`;

        for (let k = 0; k < skills.length; k++) {
            stringHTML += `
                        <li>${skills[k]}</li>`;
        };

        stringHTML += `
                    </ul>
                    <h4 class="">Demo Links:</h4>`;

        for (let l = 0; l < links.length; l++) {
            let linksObject = links[l];
            for (let key in linksObject){
           stringHTML += `
                    <a href="${linksObject[key]}"
                    target="_blank" class="btn btn-dark">${key}</a>`;
            }
        };

        stringHTML += `
                </section>
            </article>`;
    };

    displayArray.innerHTML = stringHTML;
}

populateworks(works);

