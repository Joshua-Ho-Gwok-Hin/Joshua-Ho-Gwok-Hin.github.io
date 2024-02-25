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
            <article class="row mt-3 mb-4">
                <h2 class="py-3 text-info console-font">${title}</h2>
                <section class="col-12 col-md-6 col-lg-4 border-right">
                    <img src="${src}" alt="" class="w-100 mb-3">
                </section>
                <section class="col-12 col-md-6 col-lg-6 col-xl-4">
                    <h3 class="">Descriptions:</h3>
                    <p>${descriptions}</p>
                    <h4 class="">Languages:</h4>
                    <ul class="list-unstyled">`;

        for (let j = 0; j < languages.length; j++) {
            stringHTML += `
                        <li class="d-inline pe-2">${languages[j]}</li>`;
        };

        stringHTML += `
                    </ul>
                    <h4 class="">Skills:</h4>
                    <ul class="list-unstyled">`;

        for (let k = 0; k < skills.length; k++) {
            stringHTML += `
                        <li class="d-inline pe-2">${skills[k]}</li>`;
        };

        stringHTML += `
                    </ul>
                    <h4 class="mb-3">Demo Links:</h4>`;

        for (let l = 0; l < links.length; l++) {
            let linksObject = links[l];
            for (let key in linksObject){
           stringHTML += `
                    <a href="${linksObject[key]}"
                    target="_blank" class="btn btn-dark me-1"><i class="bi bi-box-arrow-up-right"></i>&ThickSpace;${key}</a>`;
            }
        };

        stringHTML += `
                </section>
            </article>
            <hr class="border-1 border-top border-white">`;
    };

    displayArray.innerHTML = stringHTML;
}

populateworks(works);

