const flag_names = ['Kazakhstan', 'Russia', 'USA', 'Uzbekistan', 
'Tajikistan', 'Albania', 'Tunisia', 'Moldovo', 'Kosovo', 'Ukraine', 'Belarus'];
const flag_images = ['kz.jpeg', 'ru.jpeg', 'us.jpeg']

function getRandom3(list) {
    const res = [];
    for (let x=1; x<=3;x++){
        const random = Math.floor(Math.random()*list.length)
        res.push(list[random]);
    }
}

function getRandomElements(list, flag_names=3) {
    return [...list].sort(() => Math.random() > 0.5 ? 1 : -1).slice(0, flag_names)
}

console.log(getRandomElements(flag_names));
