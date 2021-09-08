const d = document;

function pokePic_1(pic, hp, exp, att, satt, def, name) {
    let pokeName = d.querySelector('.pokeName');
    let pokeImg = d.querySelector('.img');
    let pokeHP = d.querySelector('.pokeHP');
    let pokeExp = d.querySelector('.pokeExp');
    let pokeAttack = d.querySelector('.card_2_sub1_attack');
    let pokeSpecialAttack = d.querySelector('.card_2_sub2_specialAttack');
    let pokeDefense = d.querySelector('.card_2_sub3_defense');

    pokeImg.src = `${pic}`;
    pokeImg.setAttribute('width', '200px');
    pokeImg.setAttribute('height', '200px');



    pokeHP.textContent = `${hp}`;
    pokeExp.textContent = `${exp}`;
    pokeAttack.textContent = `${att}K`;
    pokeSpecialAttack.textContent = `${satt}K`;
    pokeDefense.textContent = `${def}K`;
    pokeName.textContent = `${name}`;

}

let randomNum = Math.round(Math.random() * 100) + 1;
//La imagen de Charmander es muy desproporcional, así que aplicaremos unos estilos particulares en el caso de que aparezca. Si randomNum equivale al nº de Charmander.

if (randomNum === 4) {
    let img = d.querySelector('img');
    img.setAttribute('style', 'margin-left: 30px;')
}


fetch(`https://pokeapi.co/api/v2/pokemon/${randomNum}`)
    .then(function(response) {
        // debugger;
        return response.json();
    })
    .then(pokeJSON => {
        console.log('Primera respuesta: ')

        console.log(pokeJSON);

        let pic = pokeJSON.sprites.other.dream_world.front_default;
        let hp = pokeJSON.stats[0].base_stat;
        let exp = pokeJSON.base_experience;
        let att = pokeJSON.stats[1].base_stat;
        let def = pokeJSON.stats[2].base_stat;
        let satt = pokeJSON.stats[3].base_stat;

        let name = pokeJSON.name;


        pokePic_1(pic, hp, exp, att, satt, def, name);

    });


// SEGUNDA TARJETA

let secondCardRandomNum = Math.round(Math.random() * 100) + 1;

if (secondCardRandomNum === 4) {
    let img = d.querySelector('.img2');
    img.setAttribute('style', 'margin-left: 30px;')
}

fetch(`https://pokeapi.co/api/v2/pokemon/${secondCardRandomNum}`)
    .then(function(response) {
        // debugger;
        return response.json();
    })
    .then(pokeJSON => {
        console.log('Segunda respuesta: ')
        console.log(pokeJSON);

        let pic = pokeJSON.sprites.other.dream_world.front_default;
        let hp = pokeJSON.stats[0].base_stat;
        let exp = pokeJSON.base_experience;
        let att = pokeJSON.stats[1].base_stat;
        let def = pokeJSON.stats[2].base_stat;
        let satt = pokeJSON.stats[3].base_stat;

        let name = pokeJSON.name;


        pokePic_2(pic, hp, exp, att, satt, def, name);

    });


function pokePic_2(pic, hp, exp, att, satt, def, name) {
    let pokeName = d.querySelector('.pokeName2');
    let pokeImg = d.querySelector('.img2');
    let pokeHP = d.querySelector('.pokeHP2');
    let pokeExp = d.querySelector('.pokeExp2');
    let pokeAttack = d.querySelector('.card_2_sub1_attack2');
    let pokeSpecialAttack = d.querySelector('.card_2_sub2_specialAttack2');
    let pokeDefense = d.querySelector('.card_2_sub3_defense2');

    pokeImg.src = `${pic}`;
    pokeImg.setAttribute('width', '200px');
    pokeImg.setAttribute('height', '200px');



    pokeHP.textContent = `${hp}`;
    pokeExp.textContent = `${exp}`;
    pokeAttack.textContent = `${att}K`;
    pokeSpecialAttack.textContent = `${satt}K`;
    pokeDefense.textContent = `${def}K`;
    pokeName.textContent = `${name}`;

}


// TERCERA TARJETA

let thirdCardRandomNum = Math.round(Math.random() * 100) + 1;

if (thirdCardRandomNum === 4) {
    let img = d.querySelector('.img3');
    img.setAttribute('style', 'margin-left: 30px;')
}

fetch(`https://pokeapi.co/api/v2/pokemon/${thirdCardRandomNum}`)
    .then(function(response) {
        // debugger;
        return response.json();
    })
    .then(pokeJSON => {
        console.log('Tercera respuesta: ')
        console.log(pokeJSON);

        let pic = pokeJSON.sprites.other.dream_world.front_default;
        let hp = pokeJSON.stats[0].base_stat;
        let exp = pokeJSON.base_experience;
        let att = pokeJSON.stats[1].base_stat;
        let def = pokeJSON.stats[2].base_stat;
        let satt = pokeJSON.stats[3].base_stat;

        let name = pokeJSON.name;


        pokePic_3(pic, hp, exp, att, satt, def, name);

    });


function pokePic_3(pic, hp, exp, att, satt, def, name) {
    let pokeName = d.querySelector('.pokeName3');
    let pokeImg = d.querySelector('.img3');
    let pokeHP = d.querySelector('.pokeHP3');
    let pokeExp = d.querySelector('.pokeExp3');
    let pokeAttack = d.querySelector('.card_2_sub1_attack3');
    let pokeSpecialAttack = d.querySelector('.card_2_sub2_specialAttack3');
    let pokeDefense = d.querySelector('.card_2_sub3_defense3');

    pokeImg.src = `${pic}`;
    pokeImg.setAttribute('width', '200px');
    pokeImg.setAttribute('height', '200px');



    pokeHP.textContent = `${hp}`;
    pokeExp.textContent = `${exp}`;
    pokeAttack.textContent = `${att}K`;
    pokeSpecialAttack.textContent = `${satt}K`;
    pokeDefense.textContent = `${def}K`;
    pokeName.textContent = `${name}`;

}




// RANDOM BACKGROUND COLOURING:

// Reference model: 
// background: rgb(2,0,36)
// background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(8,31,135,1) 41%, rgba(0,212,255,1) 100%)

const $body = d.querySelector('body');

let randomDeg = Math.random() * 360;
let randomRGBA1 = Math.random() * 100;
$body.setAttribute(`style`, `background: linear-gradient(${randomDeg}deg, rgba(${randomRGBA1},10,236,1) 0%, rgba(80,31,135,0.5) 61%, rgba(0,212,255,1) 100%)`);

// RANDOM CARDS COLOURING:
// Reference model: background: linear-gradient(to bottom, rgb(0, 174, 255) 43%, white 40% 60%, white 60% 80%, white 80%);

let $card1 = d.querySelector('.card_1_1');
let $card2 = d.querySelector('.card_1_2');
let $card3 = d.querySelector('.card_1_3');

let randomColour1 = Math.floor((Math.random() * 100) + 100);
let randomColour2 = Math.floor((Math.random() * 6) + 4);
let randomColour3 = Math.floor((Math.random() * 100) + 100);



$card1.setAttribute(`style`, `background: linear-gradient(to bottom, rgb(${randomColour1}, 124, 255) 43%, white 40% 60%, white 60% 80%, white 80%)`);
$card2.setAttribute(`style`, `background: linear-gradient(to bottom, rgba(${randomColour1}, 114, 255,0.${randomColour2}) 43%, white 40% 60%, white 60% 80%, white 80%)`);
$card3.setAttribute(`style`, `background: linear-gradient(to bottom, rgba(${randomColour3}, 114, 255,0.${randomColour2}) 43%, white 40% 60%, white 60% 80%, white 80%)`);