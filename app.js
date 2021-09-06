const d = document;

function pokePic(pic, hp, exp, att, satt, def, name) {
    let pokeName = d.getElementById('pokeName');
    let pokeImg = d.getElementById('pokePic');
    let pokeHP = d.getElementById('pokeHP');
    let pokeExp = d.getElementById('pokeExp');
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
        console.log(pokeJSON);

        let pic = pokeJSON.sprites.other.dream_world.front_default;
        let hp = pokeJSON.stats[0].base_stat;
        let exp = pokeJSON.base_experience;
        let att = pokeJSON.stats[1].base_stat;
        let def = pokeJSON.stats[2].base_stat;
        let satt = pokeJSON.stats[3].base_stat;

        let name = pokeJSON.name;


        pokePic(pic, hp, exp, att, satt, def, name);

    })