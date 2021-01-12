const form = document.querySelector('.form-quizz');

let ArrayResults = [];
const responses = ['c', 'a', 'b', 'a', 'c'];
const emojis = ['✔', '✨', '👀', '😭', '👎'];
const resultTitle = document.querySelector('.resultats h2');
const resultText = document.querySelector('.note');
const helpResult = document.querySelector('.help');
const allQuestions = document.querySelectorAll('.question-block');

let verifArray = [];


form.addEventListener('submit', (e) => {
    e.preventDefault();

    for (i = 1; i < 6; i++) {
        ArrayResults.push(document.querySelector(`input[name="q${i}"]:checked`).value)
    }
    veriFunc(ArrayResults);
    ArrayResults = [];
})

function veriFunc(ArrayResults) {
    for (let a = 0; a < 5; a++) {
        if (ArrayResults[a] === responses[a]) {
            verifArray.push(true);
        } else {
            verifArray.push(false);
        }
    }
    dislayResults(verifArray);
    color(verifArray);
    verifArray = [];
}

function dislayResults(tabCheck) {
    const nbOfFaults = tabCheck.filter(el => el !== true).length;
    switch (nbOfFaults) {
        case 0 :
            resultTitle.innerText = `${emojis[0]} Bravo, c'est un sans fautes ! ${emojis[0]}`;
            helpResult.innerText = ``;
            resultText.innerText = ` 5/5 `;
            break;

        case 1 :
            resultTitle.innerText = `${emojis[1]} Vous y êtes presque ! ${emojis[1]}`;
            helpResult.innerText = 'Retentez une autre réponse dans la case rouge, puis re-validez !';
            resultText.innerText = ` 4/5 `;
            break;

        case 2 :
            resultTitle.innerText = `${emojis[2]} Encore un effort ...  ${emojis[2]}`;
            helpResult.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !';
            resultText.innerText = ` 3/5 `;
            break;

        case 3 :
            resultTitle.innerText = `${emojis[3]} Il reste quelques erreurs.  ${emojis[3]}`;
            helpResult.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !';
            resultText.innerText = ` 2/5 `;
            break;

        case 4 :
            resultTitle.innerText = `${emojis[3]} Peux mieux faire ! ${emojis[3]}`;
            helpResult.innerText = 'Retenter une autre réponse dans les cases rouges, puis re-validez !';
            resultText.innerText = ` 1/5 `;
            break;

        case 5 :
            resultTitle.innerText = `${emojis[4]} Peux mieux faire ! ${emojis[4]}`;
            helpResult.innerText = 'Retentez une autre réponse dans les cases rouges, puis re-validez !';
            resultText.innerText = ` 0/5 `;
            break;

        default:
            'Erreur, cas innatendu.'
    }
}

function color(bool){
    for (let j = 0; j < bool.length; j++ ){
        if (bool[j] === true){
            allQuestions[j].style.background = 'lightgreen';
        }else {
            allQuestions[j].style.background = 'red';
            allQuestions[j].classList.add('echec');
            setTimeout(() => {
                allQuestions[j].classList.remove('echec')
            }, 500)
        }
    }
}

allQuestions.forEach(items => {
    items.addEventListener('click', () => {
        items.style.background = 'white'
    })
})


