const image = document.querySelector('#image');
const choices = Array.from(document.querySelectorAll('.choice-text'));
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentImage = {}
let acceptingAnswers = true
let score = 0
let imageCounter = 0
let availableQuestions = []

questionsCapitals = [
    {
        // AD / Andorra / La Vella /
        image: "capitals/ad-la_vella.png",
        choice1: 'La Vella',
        choice2: 'Algiers',
        choice3: 'Sarajevo',
        answer: 1,
    },
    {    
        // AE / United Arab Emirates / Abu Dhabi /
        image: "capitals/ae-abu_dhabi.png",
        choice1: 'Libreville',
        choice2: 'Harare',
        choice3: 'Abu Dhabi',
        answer: 3,
    },
    {
        // AF / Afghanistan / Kabul
        image: "capitals/af-kabul.jpeg",
        choice1: 'Kabul',
        choice2: 'Belmopan',
        choice3: 'Port of Spain',
        answer: 1,
    },
    {
        // AG / Antigua and Barbuda / Saint John's
        image: "capitals/ag-saint_john's.jpeg",
        choice1: 'Paramaribo',
        choice2: "Saint John's",
        choice3: 'Lilongwe',
        answer: 2,
    },
    {
        // AI / Anguilla / The Valley
        image: "capitals/ai-the_valley.jpeg",
        choice1: 'Dili',
        choice2: 'Khartoum',
        choice3: 'The Valley',
        answer: 3,
    },
    {
        // AL / Albania / Tirana
        image: "capitals/al-tirana.jpeg",
        choice1: 'Nairobi',
        choice2: 'Monaco',
        choice3: 'Tirana',
        answer: 3,
    },
    {
        // AM / Armenia / Yerevan
        image: "capitals/am-yerevan.jpeg",
        variants: [
            'Djibouti',
            'Yerevan',
            'Managua'
        ],
        answer: 2,
    },
    {
        //ao-luanda.jpeg
        image: "capitals/ao-luanda.jpeg",
        variants: [
            "N'Djamena",
            'Luanda',
            'Manama'
        ],
        answer: 2,
    },
    {
        //ar-buenos_aires.jpeg
        image: "capitals/ar-buenos_aires.jpeg",
        variants: [
            'Canberra',
            'Buenos Aires',
            'Kingston'
        ],
        answer: 2,
    },
    {
        //at-vienna.jpeg
        image: "capitals/at-vienna.jpeg",
        variants: [
            'Santiago',
            "N'Djamena",
            'Vienna'
        ],
        answer: 3,
    },
    {   
        //au-canberra.jpeg
        image: "capitals/au-canberra.jpeg",
        variants: [
            'Canberra',
            'PortLouis',
            'Chisinau'
        ],
        answer: 1,
    },
    {   
        //az-baku.jpeg
        image: "capitals/az-baku.jpeg",
        variants: [
            'Apia',
            'Monrovia',
            'Baku'
        ],
        answer: 3,
    },
    {  
        //ba-sarajevo.jpeg
        image: "capitals/ba-sarajevo.jpeg",
        variants: [
            'Edinburgh',
            'Ouagadougou',
            'Sarajevo'
        ],
        answer: 3,
    },
    {  
        //bb-bridgetown.jpeg
        image: "capitals/bb-bridgetown.jpeg",
        variants: [
            'Tripoli',
            'Manila',
            'Bridgetown'
        ],
        answer: 3,
    },
    {   
        //bd-dhaka.jpeg
        image: "capitals/bd-dhaka.jpeg",
        variants: [
            'Tehran',
            'Dhaka',
            'Ljubljana'
        ],
        answer: 2,
    },
    {   
        //be-brussels.png
        image: "capitals/be-brussels.png",
        variants: [
            'Bern',
            'Brussels',
            'Tbilisi'
        ],
        answer: 2,
    },
    {   
        //bf-ouagadougou.jpeg
        image: "capitals/bf-ouagadougou.jpeg",
        variants: [
            'Sucre',
            'Berlin',
            'Ouagadougou'
        ],
        answer: 3,
    },
    {    
        //bg-sofia.jpeg
        image: "capitals/bg-sofia.jpeg",
        variants: [
            'SanMarino',
            'Sofia',
            'Singapore'
        ],
        answer: 2,
    },
    {  
        //bh-manama.jpeg
        image: "capitals/bh-manama.jpeg",
        variants: [
            'Harare',
            'Manama',
            'Yaren'
        ],
        answer: 2,
    },
    {  
        //bi-gitega.jpeg
        image: "capitals/bi-gitega.jpeg",
        variants: [
            'Gitega',
            'Gaborone',
            'Manila'
        ],
        answer: 1,
    },
    {  
        //bj-porto_novo.jpeg
        image: "capitals/bj-porto_novo.jpeg",
        variants: [
            'Porto Novo',
            'Maseru',
            'Accra'
        ],
        answer: 1,
    },
    {  
        //bn-bandar_seri_begawan.jpeg
        image: "capitals/bn-bandar_seri_begawan.jpeg",
        variants: [
            'Bishkek',
            'Bandar Seri Begawan',
            'Kuwait City'
        ],
        answer: 2,
    },
    {  
        //bo-sucre.jpeg
        image: "capitals/bo-sucre.jpeg",
        variants: [
            'Sucre',
            "St George's",
            'Belfast'
        ],
        answer: 1,
    },
    {    
        //br-brasilia.jpeg
        image: "capitals/br-brasilia.jpeg",
        variants: [
            'Asuncion',
            'Kingston',
            'Brasilia'
        ],
        answer: 3,
    },
    {   
        //bs-nassau.jpeg
        image: "capitals/bs-nassau.jpeg",
        variants: [
            'Quito',
            'Tirana',
            'Nassau'
        ],
        answer: 3,
    },
    {   
        //bt-thimphu.jpeg
        image: "capitals/bt-thimphu.jpeg",
        variants: [
            'Prague',
            'Thimphu',
            'Edinburgh'
        ],
        answer: 2,
    },
    {   
        //bw-gaborone.jpeg
        image: "capitals/bw-gaborone.jpeg",
        variants: [
            'Funafuti',
            'Malabo',
            'Gaborone'
        ],
        answer: 3,
    },
    {    
        //by-minsk.jpeg
        image: "capitals/by-minsk.jpeg",
        variants: [
            'Minsk',
            'Abuja',
            'Seoul'
        ],
        answer: 1,
    },
    {    
        //bz-belmopan.jpeg
        image: "capitals/bz-belmopan.jpeg",
        variants: [
            'Jakarta',
            'Ouagadougou',
            'Belmopan'
        ],
        answer: 3,
    },
    {   
        //ca-ottawa.jpeg
        image: "capitals/ca-ottawa.jpeg",
        variants: [
            'Ottawa',
            'Brazzaville',
            'Kong'
        ],
        answer: 1,
    },
    {   
        //cd-kinshasa.jpeg
        image: "capitals/cd-kinshasa.jpeg",
        variants: [
            'Funafuti',
            'Pristina',
            'Kinshasa'
        ],
        answer: 3,
    },
    {    
        //cf-bangui.jpeg
        image: "capitals/cf-bangui.jpeg",
        variants: [
            'Bangkok',
            'Bangui',
            'Kabul'
        ],
        answer: 2,
    },
    {   
        //cg-brazzaville.jpeg
        image: "capitals/cg-brazzaville.jpeg",
        variants: [
            'Beijing',
            'Ashgabat',
            'Brazzaville'
        ],
        answer: 3,
    },
    {   
        //ch-bern.jpeg
        image: "capitals/ch-bern.jpeg",
        variants: [
            'Yamoussoukro',
            'Asmara',
            'Bern'
        ],
        answer: 3,
    },
    {   
        //ci-yamoussoukro.jpeg
        image: "capitals/ci-yamoussoukro.jpeg",
        variants: [
            'Minsk',
            'Yamoussoukro',
            'Valletta'
        ],
        answer: 2,
    },
    {    
        //cl-santiago.jpeg
        image: "capitals/cl-santiago.jpeg",
        variants: [
            'Ljubljana',
            'Chisinau',
            'Santiago'
        ],
        answer: 3,
    },
    {    
        //cm-yaounde.jpeg
        image: "capitals/cm-yaounde.jpeg",
        variants: [
            'Riga',
            'Yaounde',
            "SaintJohn's"
        ],
        answer: 2,
    },
    {    
        //cn-beijing.jpeg
        image: "capitals/cn-beijing.jpeg",
        variants: [
            'Kabul',
            'Palikir',
            'Beijing'
        ],
        answer: 3,
    },
    {    
        //co-bogota.jpeg
        image: "capitals/co-bogota.jpeg",
        variants: [
            'Bangui',
            'Madrid',
            'Bogota'
        ],
        answer: 3,
    },
    {    
        //cr-san_jose.jpeg
        image: "capitals/cr-san_jose.jpeg",
        variants: [
            'Stockholm',
            'Gaborone',
            'San Jose'
        ],
        answer: 3,
    },
    {    
        //cs-belgrade.jpeg
        image: "capitals/cs-belgrade.jpeg",
        variants: [
            'Yerevan',
            'Belgrade',
            'Asuncion'
        ],
        answer: 2,
    },
    {   
        //cu-havana.jpeg
        image: "capitals/cu-havana.jpeg",
        variants: [
            'Tripoli',
            'Kigali',
            'Havana'
        ],
        answer: 3,
    },
    {   
        //cv-praia.jpeg
        image: "capitals/cv-praia.jpeg",
        variants: [
            'Praia',
            'PhnomPenh',
            'Algiers'
        ],
        answer: 1,
    },
    {   
        //cy-nicosia.jpeg
        image: "capitals/cy-nicosia.jpeg",
        variants: [
            'Sucre',
            'Nicosia',
            'Asuncion'
        ],
        answer: 2,
    },
    {    
        //cz-prague.jpeg
        image: "capitals/cz-prague.jpeg",
        variants: [
            'Doha',
            'Prague',
            'Ashgabat'
        ],
        answer: 2,
    },
    {   
        //de-berlin.jpeg
        image: "capitals/de-berlin.jpeg",
        variants: [
            'Mbabane',
            'Berlin',
            'Oslo'
        ],
        answer: 2,
    },
    {    
        //dj-djibouti.jpeg
        image: "capitals/dj-djibouti.jpeg",
        variants: [
            'Astana',
            'Djibouti',
            'Santiago'
        ],
        answer: 2,
    },
    {    
        //dk-copenhagen.jpeg
        image: "capitals/dk-copenhagen.jpeg",
        variants: [
            'Madrid',
            'Khartoum',
            'Copenhagen'
        ],
        answer: 3,
    },
    {   
        //dm-roseau.jpeg
        image: "capitals/dm-roseau.jpeg",
        variants: [
            'Vienna',
            'Roseau',
            'Zagreb'
        ],
        answer: 2,
    },
    {   
        //do-santo_domingo.jpeg
        image: "capitals/do-santo_domingo.jpeg",
        variants: [
            'Windhoek',
            'Santo Domingo',
            'Jakarta'
        ],
        answer: 2,
    },
    {   
        //dz-algiers.jpeg
        image: "capitals/dz-algiers.jpeg",
        variants: [
            'Warsaw',
            'Algiers',
            'Victoria'
        ],
        answer: 2,
    },
    {   
        //ec-quito.jpeg
        image: "capitals/ec-quito.jpeg",
        variants: [
            'Moroni',
            'AddisAbaba',
            'Quito'
        ],
        answer: 3,
    },
    {   
        //ee-tallinn.jpeg
        image: "capitals/ee-tallinn.jpeg",
        variants: [
            'Djibouti',
            'Tallinn',
            'Minsk'
        ],
        answer: 2,
    },
    {   
        //eg-cairo.jpeg
        image: "capitals/eg-cairo.jpeg",
        variants: [
            'Moscow',
            'Vienna',
            'Abu Dhabi'
        ],
        answer: 3,
    },
    {   
        //er-asmara.jpeg
        image: "capitals/er-asmara.jpeg",
        variants: [
            'Majuro',
            'Yerevan',
            'Asmara'
        ],
        answer: 3,
    },
    {  
        //es-madrid.jpeg
        image: "capitals/es-madrid.jpeg",
        variants: [
            'Madrid',
            'Sofia',
            'Athens'
        ],
        answer: 1,
    },
    {    
        //et-addis_ababa.jpeg
        image: "capitals/et-addis_ababa.jpeg",
        variants: [
            'PhnomPenh',
            'Tallinn',
            'Addis Ababa'
        ],
        answer: 3,
    },
    {    
        //fi-helsinki.jpeg
        image: "capitals/fi-helsinki.jpeg",
        variants: [
            'TheValley',
            'Mbabane',
            'Helsinki'
        ],
        answer: 3,
    },
    {    
        //fj-suva.jpeg
        image: "capitals/fj-suva.jpeg",
        variants: [
            'Dodoma',
            'Suva',
            'SanSalvador'
        ],
        answer: 2,
    },
    {   
        //fm-palikir.jpeg
        image: "capitals/fm-palikir.jpeg",
        variants: [
            'The Valley',
            'Rabat',
            'Palikir'
        ],
        answer: 3,
    },
    {   
        //fr-paris.jpeg
        image: "capitals/fr-paris.jpeg",
        variants: [
            'Paris',
            'Taipei',
            'Copenhagen'
        ],
        answer: 1,
    },
    {   
        //ga-libreville.jpeg
        image: "capitals/ga-libreville.jpeg",
        variants: [
            'Libreville',
            'Bratislava',
            'Brussels'
        ],
        answer: 1,
    },
    {   
        //gb-belfast.jpeg
        image: "capitals/gb-belfast.jpeg",
        variants: [
            'Luanda',
            'Ankara',
            'Belfast'
        ],
        answer: 3,
    },
    {   
        //gb-london.jpeg
        image: "capitals/gb-london.jpeg",
        variants: [
            'London',
            'Berlin',
            'Washington, D.C.'
        ],
        answer: 1,
    },
    {   
        //gb-sct-edinburgh.jpeg
        image: "capitals/gb-sct-edinburgh.jpeg",
        variants: [
            'Edinburgh',
            'Managua',
            'Tegucigalpa'
        ],
        answer: 1,
    },
    {   
        //gb-wls-cardiff.jpeg
        image: "capitals/gb-wls-cardiff.jpeg",
        variants: [
            'Nouakchott',
            'Bratislava',
            'Cardiff'
        ],
        answer: 3,
    },
    {   
        //gd-saint_george's.jpeg
        image: "capitals/gd-saint_george's.jpeg",
        variants: [
            'Palikir',
            "St George's",
            'Rabat'
        ],
        answer: 2,
    },
    {   
        //ge-tbilisi.jpeg
        image: "capitals/ge-tbilisi.jpeg",
        variants: [
            'Budapest',
            'Tbilisi',
            'Nouakchott'
        ],
        answer: 2,
    },
    {   
        //gh-accra.jpg
        image: "capitals/gh-accra.jpg",
        variants: [
            'Kathmandu',
            'Rome',
            'Accra'
        ],
        answer: 3,
    },
    {   
        //gm-banjul.jpeg
        image: "capitals/gm-banjul.jpeg",
        variants: [
            'Banjul',
            'Bamako',
            'Sarajevo'
        ],
        answer: 1,
    },
    {   
        //gn-conakry.jpeg
        image: "capitals/gn-conakry.jpeg",
        variants: [
            'Vientiane',
            'Tirana',
            'Conakry'
        ],
        answer: 3,
    },
    {    
        //gq-malabo.png
        image: "capitals/gq-malabo.png",
        variants: [
            'Malabo',
            'Kuwait City',
            'Bishkek'
        ],
        answer: 1,
    },
    {  
        //gr-athens.jpeg
        image: "capitals/gr-athens.jpeg",
        variants: [
            'Moscow',
            "Saint John's",
            'Athens'
        ],
        answer: 3,
    },
    {    
        //gt-guatemala_city.jpeg
        image: "capitals/gt-guatemala_city.jpeg",
        variants: [
            'Guatemala City',
            'Beijing',
            'Port Au Prince'
        ],
        answer: 1,
    },
    {    
        //gw-bissau.jpeg
        image: "capitals/gw-bissau.jpeg",
        variants: [
            'Kingstown',
            'Bissau',
            'PortMoresby'
        ],
        answer: 2,
    },
    {    
        //gy-georgetown.jpeg
        image: "capitals/gy-georgetown.jpeg",
        variants: [
            'Georgetown',
            'SanJose',
            'Pretoria'
        ],
        answer: 1,
    },
    {   
        //hk-hong_kong.jpeg
        image: "capitals/hk-hong_kong.jpeg",
        variants: [
            'Rome',
            'Hong Kong',
            'Dublin'
        ],
        answer: 2,
    },
    {   
        //hn-tegucigalpa.jpeg
        image: "capitals/hn-tegucigalpa.jpeg",
        variants: [
            'Brazzaville',
            'Rome',
            'Tegucigalpa'
        ],
        answer: 3,
    },
    {   
        //hr-zagreb.jpeg
        image: "capitals/hr-zagreb.jpeg",
        variants: [
            'PhnomPenh',
            'Zagreb',
            'Lisbon'
        ],
        answer: 2,
    },
    {   
        //ht-port_au_prince.jpeg
        image: "capitals/ht-port_au_prince.jpeg",
        variants: [
            'Port Au Prince',
            'Kingstown',
            'Beirut'
        ],
        answer: 1,
    },
    {   
        //hy-budapest.jpeg
        image: "capitals/hy-budapest.jpeg",
        variants: [
            'Tokyo',
            'Georgetown',
            'Budapest'
        ],
        answer: 3,
    },
    {    
        //id-jakarta.jpeg
        image: "capitals/id-jakarta.jpeg",
        variants: [
            'Conakry',
            'Jakatra',
            'Damascus'
        ],
        answer: 2,
    },
    {    
        //ie-dublin.jpeg
        image: "capitals/ie-dublin.jpeg",
        variants: [
            'PanamaCity',
            'Pretoria',
            'Dublin'
        ],
        answer: 3,
    },
    {    
        //il-jerusalem.jpeg
        image: "capitals/il-jerusalem.jpeg",
        variants: [
            'Helsinki',
            'Lisbon',
            'Jerusalem'
        ],
        answer: 3,
    },
    {    
        //in-new_delhi.jpeg
        image: "capitals/in-new_delhi.jpeg",
        variants: [
            'Canberra',
            'Malabo',
            'New Delhi'
        ],
        answer: 3,
    },
    {   
        //iq-baghdad.jpeg
        image: "capitals/iq-baghdad.jpeg",
        variants: [
            'Baghdad',
            'Bogata',
            'Djibouti'
        ],
        answer: 1,
    },
    {  
        //ir-tehran.jpeg
        image: "capitals/ir-tehran.jpeg",
        variants: [
            'Harare',
            'Delhi',
            'Tehran'
        ],
        answer: 3,
    },
    {  
        //is-reykjavik.jpeg
        image: "capitals/is-reykjavik.jpeg",
        variants: [
            'Managua',
            'Reykjavik',
            'Victoria'
        ],
        answer: 2,
    },
    {  
        //it-rome.jpeg
        image: "capitals/it-rome.jpeg",
        variants: [
            'Yaounde',
            'Tehran',
            'Rome'
        ],
        answer: 3,
    },
    {  
        //jm-kingston.jpeg
        image: "capitals/jm-kingston.jpeg",
        variants: [
            'Kingston',
            'Niamey',
            'PhnomPenh'
        ],
        answer: 1,
    },
    {  
        //jo-amman.jpeg
        image: "capitals/jo-amman.jpeg",
        variants: [
            'Amman',
            'Thimphu',
            'Tallinn'
        ],
        answer: 1,
    },
    {   
        //jp-tokyo.jpeg
        image: "capitals/jp-tokyo.jpeg",
        variants: [
            'Tokyo',
            'Seoul',
            'Beijing'
        ],
        answer: 1,
    },
    {  
        //ke-nairobi.jpeg
        image: "capitals/ke-nairobi.jpeg",
        variants: [
            'Tegucigalpa',
            'Nicosia',
            'Nairboi'
        ],
        answer: 3,
    },
    {   
        //capitals/kg-bishkek.jpeg,",
        image: "capitals/kg-bishkek.jpeg,",
        variants: [
            'Harare',
            'Yaren',
            'Bishkek'
        ],
        answer: 3,
    },
    {
        //capitals/kh-phnom_penh.jpeg,",
        image: "capitals/kh-phnom_penh.jpeg",
        variants: [
            'Port Moresby',
            'Monrovia',
            'Phnom Penh'
        ],
        answer: 3,
    },
    {
        //capitals/ki-tarawa_atoll.jpeg,",
        image: "capitals/ki-tarawa_atoll.jpeg",
        variants: [
            'AddisAbaba',
            'Tarawa Atoll',
            'Taipei'
        ],
        answer: 2,
    },
    {
        //capitals/km-moroni.jpeg,",
        image: "capitals/km-moroni.jpeg",
        variants: [
            'Gitega',
            'Moroni',
            'Dhaka'
        ],
        answer: 2,
    },
    {
        //capitals/kn-basseterre.jpeg,",
        image: "capitals/kn-basseterre.jpeg",
        variants: [
            'Maseru',
            'Basseterre',
            'Lisbon'
        ],
        answer: 2,
    },
    {
        //capitals/kp-pyongyang.jpeg,",
        image: "capitals/kp-pyongyang.jpeg",
        variants: [
            'Cairo',
            'Dili',
            'Pyongyang'
        ],
        answer: 3,
    },
    {
        //capitals/kr-seoul.jpeg,",
        image: "capitals/kr-seoul.jpeg",
        variants: [
            'Seoul',
            'Singapore',
            'Manila'
        ],
        answer: 1,
    },
    {
        //capitals/kw-kuwait_city.jpeg,",
        image: "capitals/kw-kuwait_city.jpeg",
        variants: [
            'Monrovia',
            'Kuwait City',
            'AddisAbaba'
        ],
        answer: 2,
    },
    {
        //capitals/kz-astana.jpeg,",
        image: "capitals/kz-astana.jpeg",
        variants: [
            'Maseru',
            'Astana',
            'Lilongwe'
        ],
        answer: 2,
    },
    {
        //capitals/lb-beirut.jpeg,",
        image: "capitals/lb-beirut.jpeg,",
        variants: [
            'Beirut',
            'Riyadh',
            'Juba'
        ],
        answer: 1,
    },
    {
        //capitals/lc-castries.jpeg,",
        image: "capitals/lc-castries.jpeg,",
        variants: [
            'Yaounde',
            'Bridgetown',
            'Castries'
        ],
        answer: 3,
    },
    {
        //capitals/li-vaduz.jpeg,",
        image: "capitals/li-vaduz.jpeg,",
        variants: [
            'Wellington',
            'Li Vaduz',
            'Conakry'
        ],
        answer: 2,
    },
    {
        //capitals/lk-sri_jayawardenepura_kotte.jpeg,",
        image: "capitals/lk-sri_jayawardenepura_kotte.jpeg,",
        variants: [
            'Sri Jayawardenepura Kotte',
            'Amman',
            'Mogadishu'
        ],
        answer: 1,
    },
    {
        //capitals/lr-monrovia.jpeg,",
        image: "capitals/lr-monrovia.jpeg,",
        variants: [
            'Yaounde',
            'Monrovia',
            'Yerevan'
        ],
        answer: 2,
    },
    {
        //capitals/ls-maseru.jpeg,",
        image: "capitals/ls-maseru.jpeg,",
        variants: [
            'Valletta',
            'Sarajevo',
            'Maseru'
        ],
        answer: 3,
    },
    {
        //capitals/lt-vilnius.jpeg,",
        image: "capitals/lt-vilnius.jpeg,",
        variants: [
            'Managua',
            'San Marino',
            'Vilnius'
        ],
        answer: 3,
    },
    {
        //capitals/lu-luxembourg.jpeg,",
        image: "capitals/lu-luxembourg.jpeg,",
        variants: [
            'Kinshasa',
            'Luxembourg',
            'Delhi'
        ],
        answer: 2,
    },
    {
        //capitals/lv-riga.jpeg,",
        image: "capitals/lv-riga.jpeg,",
        variants: [
            'Riga',
            'Mogadishu',
            'Singapore'
        ],
        answer: 1,
    },
    {
        //capitals/ly-tripoli.jpeg,",
        image: "capitals/ly-tripoli.jpeg,",
        variants: [
            'Tripoli',
            'Santiago',
            'Nicosia'
        ],
        answer: 1,
    },
    {
        //capitals/ma-rabat.jpeg,",
        image: "capitals/ma-rabat.jpeg,",
        variants: [
            'Berlin',
            'Banjul',
            'Rabat'
        ],
        answer: 3,
    },
    {
        //capitals/mc-monaco.jpeg,",
        image: "capitals/mc-monaco.jpeg,",
        variants: [
            'Tbilisi',
            'Monaco',
            'Doha'
        ],
        answer: 2,
    },
    {
        //capitals/md-chisinau.jpeg,",
        image: "capitals/md-chisinau.jpeg,",
        variants: [
            'Chisinau',
            'Maputo',
            'Kiev'
        ],
        answer: 1,
    },
    {
        //capitals/me-podgorica.jpeg,",
        image: "capitals/me-podgorica.jpeg,",
        variants: [
            'Podgorica',
            'Dhaka',
            'Bangui'
        ],
        answer: 1,
    },
    {
        //capitals/mg-antananarivo.jpeg,",
        image: "capitals/mg-antananarivo.jpeg,",
        variants: [
            'Beijing',
            'Monaco',
            'Antananarivo'
        ],
        answer: 3,
    },
    {
        //capitals/mh-majuro.jpeg,",
        image: "capitals/mh-majuro.jpeg,",
        variants: [
            'Lima',
            'Majuro',
            'Beirut'
        ],
        answer: 2,
    },
    {
        //capitals/mk-skopje.jpeg,",
        image: "capitals/mk-skopje.jpeg,",
        variants: [
            'Kiev',
            'Wellington',
            'Skopje'
        ],
        answer: 3,
    },
    {
        //capitals/ml-bamako.jpeg,",
        image: "capitals/ml-bamako.jpeg,",
        variants: [
            'Belfast',
            'Bamako',
            'Copenhagen'
        ],
        answer: 2,
    },
    {
        //capitals/mm-nay_pyi_taw.jpeg,",
        image: "capitals/mm-nay_pyi_taw.jpeg,",
        variants: [
            'Nay Pyi Taw',
            'Bamako',
            'Stockholm'
        ],
        answer: 1,
    },
    {
        //capitals/mn-ulaanbaatar.jpeg,",
        image: "capitals/mn-ulaanbaatar.jpeg,",
        variants: [
            'Baghdad',
            'Wellington',
            'Ulaanbaatar'
        ],
        answer: 3,
    },
    {
        //capitals/mr-nouakchott.jpeg,",
        image: "capitals/mr-nouakchott.jpeg,",
        variants: [
            'Dhaka',
            'Haroi',
            'Nouakchott'
        ],
        answer: 3,
    },
    {
        //capitals/mt-valletta.jpeg,",
        image: "capitals/mt-valletta.jpeg,",
        variants: [
            'Valletta',
            "Saint John's",
            'Islamabad'
        ],
        answer: 1,
    },
    {
        //capitals/mu-port_louis.jpeg,",
        image: "capitals/mu-port_louis.jpeg,",
        variants: [
            'Dhaka',
            'Port Louis',
            'Wellington'
        ],
        answer: 2,
    },
    {
        //capitals/mv-male.jpeg,",
        image: "capitals/mv-male.jpeg,",
        variants: [
            'Ulaanbaatar',
            'Mogadishu',
            'Male'
        ],
        answer: 3,
    },
    {
        //capitals/mw-lilongwe.jpeg,",
        image: "capitals/mw-lilongwe.jpeg,",
        variants: [
            'Lilongwe',
            'Dushanbe',
            'Valletta'
        ],
        answer: 1,
    },
    {
        //capitals/mx-mexico_city.jpeg,",
        image: "capitals/mx-mexico_city.jpeg,",
        variants: [
            'Minsk',
            'Mexico City',
            'Manama'
        ],
        answer: 2,
    },
    {
        //capitals/my-kuala_lumpur.jpeg,",
        image: "capitals/my-kuala_lumpur.jpeg,",
        variants: [
            'Kuala Lumpur',
            'Funafuti',
            'Dakar'
        ],
        answer: 1,
    },
    {
        //capitals/mz-maputo.jpeg,",
        image: "capitals/mz-maputo.jpeg,",
        variants: [
            'Luanda',
            'Edinburgh',
            'Maputo'
        ],
        answer: 3,
    },
    {
        //capitals/na-windhoek.jpeg,",
        image: "capitals/na-windhoek.jpeg,",
        variants: [
            'Windhoek',
            'Maseru',
            'SanJuan'
        ],
        answer: 1,
    },
    {
        //capitals/ne-niamey.jpeg,",
        image: "capitals/ne-niamey.jpeg,",
        variants: [
            'Edinburgh',
            'Niamey',
            'Abuja'
        ],
        answer: 2,
    },
    {
        //capitals/ng-abuja.jpeg,",
        image: "capitals/ng-abuja.jpeg,",
        variants: [
            'Taipei',
            'Jerusalem',
            'Abuja'
        ],
        answer: 3,
    },
    {
        //capitals/ni-managua.jpeg,",
        image: "capitals/ni-managua.jpeg,",
        variants: [
            'Managua',
            'Warsaw',
            'Paramaribo'
        ],
        answer: 1,
    },
    {
        //capitals/nl-amsterdam.jpeg,",
        image: "capitals/nl-amsterdam.jpeg,",
        variants: [
            'Chisinau',
            'Amsterdam',
            'Moroni'
        ],
        answer: 2,
    },
    {
        //capitals/no-oslo.jpeg,",
        image: "capitals/no-oslo.jpeg,",
        variants: [
            'PortMoresby',
            'Riga',
            'Oslo'
        ],
        answer: 3,
    },
    {
        //capitals/np-kathmandu.jpeg,",
        image: "capitals/np-kathmandu.jpeg,",
        variants: [
            'Kathmandu',
            'Cardiff',
            'Bridgetown'
        ],
        answer: 1,
    },
    {
        //capitals/nr-yaren.jpeg,",
        image: "capitals/nr-yaren.jpeg,",
        variants: [
            'San Juan',
            'Yaren',
            'Tehran'
        ],
        answer: 2,
    },
    {
        //capitals/nz-wellington.jpeg,",
        image: "capitals/nz-wellington.jpeg,",
        variants: [
            'Sofia',
            'Vientiane',
            'Wellington'
        ],
        answer: 3,
    },
    {
        //capitals/om-muscat.jpeg,",
        image: "capitals/om-muscat.jpeg,",
        variants: [
            'Muscat',
            'Copenhagen',
            'Tallinn'
        ],
        answer: 1,
    },
    {
        //capitals/pa-panama_city.jpeg,",
        image: "capitals/pa-panama_city.jpeg,",
        variants: [
            'Panama City',
            'Tashkent',
            'Minsk'
        ],
        answer: 1,
    },
    {
        //capitals/pe-lima.jpeg,",
        image: "capitals/pe-lima.jpeg,",
        variants: [
            'Chisinau',
            'Lima',
            'Quito'
        ],
        answer: 2,
    },
    {
        //capitals/pg-port_moresby.jpeg,",
        image: "capitals/pg-port_moresby.jpeg,",
        variants: [
            'Kabul',
            'Port Moresby',
            'Tegucigalpa'
        ],
        answer: 2,
    },
    {
        //capitals/ph-manila.png,",
        image: "capitals/ph-manila.png,",
        variants: [
            'Warsaw',
            'SantoDomingo',
            'Manila'
        ],
        answer: 3,
    },
    {
        //capitals/pk-islamabad.jpeg,",
        image: "capitals/pk-islamabad.jpeg,",
        variants: [
            'Islamabad',
            'Roseau',
            'Luxembourg'
        ],
        answer: 1,
    },
    {
        //capitals/pl-warsaw.jpeg,",
        image: "capitals/pl-warsaw.jpeg,",
        variants: [
            'Praia',
            'Warsaw',
            'Gaborone'
        ],
        answer: 2,
    },
    {
        //capitals/pr-san_juan.jpeg,",
        image: "capitals/pr-san_juan.jpeg,",
        variants: [
            'Kingston',
            'Budapest',
            'San Juan'
        ],
        answer: 3,
    },
    {
        //capitals/pt-lisbon.jpeg,",
        image: "capitals/pt-lisbon.jpeg,",
        variants: [
            'Lisbon',
            'Islamabad',
            'Luanda'
        ],
        answer: 1,
    },
    {
        //capitals/pw-melekeok.jpeg,",
        image: "capitals/pw-melekeok.jpeg,",
        variants: [
            'Rome',
            'Melekeok',
            'KualaLumpur'
        ],
        answer: 2,
    },
    {
        //capitals/py-asuncion.jpeg,",
        image: "capitals/py-asuncion.jpeg",
        variants: [
            'Asuncion',
            'Muscat',
            'Tirana'
        ],
        answer: 1,
    },
    {
        //capitals/qa-doha.jpeg,",
        image: "capitals/qa-doha.jpeg",
        variants: [
            'Doha',
            'Riyadh',
            'Dushanbe'
        ],
        answer: 1,
    },
    {
        //capitals/ro-bucharest.jpeg,",
        image: "capitals/ro-bucharest.jpeg",
        variants: [
            'TheValley',
            'Bucharest',
            'Budapest'
        ],
        answer: 2,
    },
    {
        //capitals/ru-moscow.jpeg,",
        image: "capitals/ru-moscow.jpeg,",
        variants: [
            'Moscow',
            'Prague',
            'Kiev'
        ],
        answer: 1,
    },
    {
        //capitals/rw-kigali.jpeg,",
        image: "capitals/rw-kigali.jpeg,",
        variants: [
            'Islamabad',
            'Kingali',
            'NayPyiTaw'
        ],
        answer: 2,
    },
    {
        //capitals/sa-riyadh.jpeg,",
        image: "capitals/sa-riyadh.jpeg,",
        variants: [
            'Honiara',
            'Ljubljana',
            'Riyadh'
        ],
        answer: 3,
    },
    {
        //capitals/sb-honiara.jpeg,",
        image: "capitals/sb-honiara.jpeg,",
        variants: [
            'Honiara',
            'Valletta',
            'Tunis'
        ],
        answer: 1,
    },
    {
        //capitals/sc-victoria.jpeg,",
        image: "capitals/sc-victoria.jpeg,",
        variants: [
            'Jakarta',
            'Victoria',
            'Kampala'
        ],
        answer: 2,
    },
    {
        //capitals/sd-juba.jpeg,",
        image: "capitals/sd-juba.jpeg,",
        variants: [
            'Nairobi',
            'TheValley',
            'Juba'
        ],
        answer: 3,
    },
    {
        //capitals/sd-khartoum.jpeg,",
        image: "capitals/sd-khartoum.jpeg,",
        variants: [
            'Khartoum',
            'Edinburgh',
            'Majuro'
        ],
        answer: 1,
    },
    {
        //capitals/se-stockholm.jpeg,",
        image: "capitals/se-stockholm.jpeg,",
        variants: [
            'Asmara',
            'Georgetown',
            'Stockholm'
        ],
        answer: 3,
    },
    {
        //capitals/sg-singapore.jpeg,",
        image: "capitals/sg-singapore.jpeg,",
        variants: [
            'Monrovia',
            'San Salvador',
            'Singapore'
        ],
        answer: 3,
    },
    {
        //capitals/si-ljubljana.jpeg,",
        image: "capitals/si-ljubljana.jpeg,",
        variants: [
            'Ljubljana',
            'Phnom Penh',
            'Brasilia'
        ],
        answer: 1,
    },
    {
        //capitals/sk-bratislava.jpeg,",
        image: "capitals/sk-bratislava.jpeg,",
        variants: [
            'NayPyiTaw',
            'Monrovia',
            'Bratislava'
        ],
        answer: 3,
    },
    {
        //capitals/sl-freetown.jpeg,",
        image: "capitals/sl-freetown.jpeg,",
        variants: [
            'Freetown',
            'Kuala Lumpur',
            'Ulaanbaatar'
        ],
        answer: 1,
    },
    {
        //capitals/sm-san_marino.jpeg,",
        image: "capitals/sm-san_marino.jpeg,",
        variants: [
            'Oslo',
            'San Marino',
            'Maputo'
        ],
        answer: 2,
    },
    {
        //capitals/sn-dakar.jpeg,",
        image: "capitals/sn-dakar.jpeg,",
        variants: [
            'Dakar',
            'Kiev',
            'Phnom Penh'
        ],
        answer: 1,
    },
    {
        //capitals/so-mogadishu.jpeg,",
        image: "capitals/so-mogadishu.jpeg,",
        variants: [
            'SanSalvador',
            'SanJose',
            'Mogadishu'
        ],
        answer: 3,
    },
    {
        //capitals/sr-paramaribo.jpeg,",
        image: "capitals/sr-paramaribo.jpeg,",
        variants: [
            'Paramaribo',
            'Brazzaville',
            'PortVila'
        ],
        answer: 1,
    },
    {
        //capitals/st-sao_tome.jpeg,",
        image: "capitals/st-sao_tome.jpeg,",
        variants: [
            'Sao Tome',
            'Maseru',
            'Moscow'
        ],
        answer: 1,
    },
    {
        //capitals/sv-san_salvador.jpeg,",
        image: "capitals/sv-san_salvador.jpeg,",
        variants: [
            'San Salvador',
            'PortofSpain',
            'Abuja'
        ],
        answer: 1,
    },
    {
        //capitals/sy-damascus.jpeg,",
        image: "capitals/sy-damascus.jpeg,",
        variants: [
            'Accra',
            'Dakar',
            'Damascus'
        ],
        answer: 3,
    },
    {
        //capitals/sz-mbabane.jpeg,",
        image: "capitals/sz-mbabane.jpeg,",
        variants: [
            'Mbabane',
            'Georgetown',
            'Addis Ababa'
        ],
        answer: 1,
    },
    {
        //capitals/td-n'djamena.jpeg,",
        image: "capitals/td-n'djamena.jpeg,",
        variants: [
            "N'Djamena",
            'Panama City',
            'Roseau'
        ],
        answer: 1,
    },
    {
        //capitals/tg-lome.jpeg,",
        image: "capitals/tg-lome.jpeg,",
        variants: [
            'Hong',
            'Lome',
            'Ouagadougou'
        ],
        answer: 2,
    },
    {
        //capitals/th-bangkok.jpeg,",
        image: "capitals/th-bangkok.jpeg,",
        variants: [
            'Vilnius',
            'Ankara',
            'Bangkok'
        ],
        answer: 3,
    },
    {
        //capitals/tj-dushanbe.jpeg,",
        image: "capitals/tj-dushanbe.jpeg,",
        variants: [
            'Dushanbe',
            'Pretoria',
            'Kathmandu'
        ],
        answer: 1,
    },
    {
        //capitals/tl-dili.jpeg,",
        image: "capitals/tl-dili.jpeg,",
        variants: [
            'Jakarta',
            'Dili',
            'Tripoli'
        ],
        answer: 2,
    },
    {
        //capitals/tm-ashgabat.jpeg,",
        image: "capitals/tm-ashgabat.jpeg,",
        variants: [
            'Copenhagen',
            'Novo',
            'Ashgabat'
        ],
        answer: 3,
    },
    {
        //capitals/tn-tunis.jpeg,",
        image: "capitals/tn-tunis.jpeg,",
        variants: [
            'Tunis',
            'Porto',
            'Riyadh'
        ],
        answer: 1,
    },
    {
        //capitals/to-nuku'alofa.jpeg,",
        image: "capitals/to-nuku'alofa.jpeg,",
        variants: [
            'Riga',
            "Nuku'alofa",
            'Quito'
        ],
        answer: 2,
    },
    {
        //capitals/tr-ankara.jpeg,",
        image: "capitals/tr-ankara.jpeg,",
        variants: [
            'Ankara',
            'Baku',
            'Khartoum'
        ],
        answer: 1,
    },
    {
        //capitals/tt-port_of_spain.jpeg,",
        image: "capitals/tt-port_of_spain.jpeg,",
        variants: [
            'Port Moresby',
            'The Valley',
            'Port of Spain'
        ],
        answer: 3,
    },
    {
        //capitals/tv-funafuti.jpeg,",
        image: "capitals/tv-funafuti.jpeg,",
        variants: [
            'Yerevan',
            'Sri Jayawardenepura Kotte',
            'Funafuti'
        ],
        answer: 3,
    },
    {
        //capitals/tw-taipei.jpeg,",
        image: "capitals/tw-taipei.jpeg,",
        variants: [
            'Taipei',
            'Manila',
            'Astana'
        ],
        answer: 1,
    },
    {
        //capitals/tz-dodoma.jpeg,",
        image: "capitals/tz-dodoma.jpeg,",
        variants: [
            'PhnomPenh',
            'Asmara',
            'Dodoma'
        ],
        answer: 3,
    },
    {
        //capitals/ua-kiev.jpeg,",
        image: "capitals/ua-kiev.jpeg,",
        variants: [
            'Kiev',
            'Minsk',
            'Moscow'
        ],
        answer: 1,
    },
    {
        //capitals/ug-kampala.jpeg,",
        image: "capitals/ug-kampala.jpeg,",
        variants: [
            'Conakry',
            'Gitega',
            'Kampala'
        ],
        answer: 3,
    },
    {
        //capitals/us-washington_dc.jpeg,",
        image: "capitals/us-washington_dc.jpeg,",
        variants: [
            'Washington, D.C.',
            'Tallinn',
            'Malabo'
        ],
        answer: 1,
    },
    {
        //capitals/uy-montevideo.jpeg,",
        image: "capitals/uy-montevideo.jpeg,",
        variants: [
            'Yamoussoukro',
            'Kingstown',
            'Montevideo'
        ],
        answer: 3,
    },
    {
        //capitals/uz-tashkent.jpeg,",
        image: "capitals/uz-tashkent.jpeg,",
        variants: [
            'Tashkent',
            'Djibouti',
            'Luanda'
        ],
        answer: 1,
    },
    {
        //capitals/va-vatican_city.jpeg,",
        image: "capitals/va-vatican_city.jpeg,",
        variants: [
            'Vatican City',
            'Lilongwe',
            'Ulaanbaatar'
        ],
        answer: 1,
    },
    {
        //capitals/vc-kingstown.jpeg,",
        image: "capitals/vc-kingstown.jpeg,",
        variants: [
            'Mbabane',
            'Kingstown',
            'Riyadh'
        ],
        answer: 2,
    },
    {
        //capitals/ve-caracas.png,",
        image: "capitals/ve-caracas.png,",
        variants: [
            'Caracas',
            'Seoul',
            'Asuncion'
        ],
        answer: 1,
    },
    {
        //capitals/vn-haroi.jpeg,",
        image: "capitals/vn-haroi.jpeg,",
        variants: [
            'Chisinau',
            'Amsterdam',
            'Haroi'
        ],
        answer: 3,
    },
    {
        //capitals/vu-port_vila.jpeg,",
        image: "capitals/vu-port_vila.jpeg,",
        variants: [
            'Tirana',
            'Port Vila',
            'Khartoum'
        ],
        answer: 2,
    },
    {
        //capitals/ws-apia.jpeg,",
        image: "capitals/ws-apia.jpeg,",
        variants: [
            'Kingston',
            'Apia',
            'Haroi'
        ],
        answer: 2,
    },
    {
        //capitals/xk-pristina.jpeg,",
        image: "capitals/xk-pristina.jpeg,",
        variants: [
            'Pristina',
            'PortVila',
            'Vienna'
        ],
        answer: 1,
    },
    {
        //capitals/ye-sana'a.jpeg,",
        image: "capitals/ye-sana'a.jpeg,",
        variants: [
            "Sana'a",
            'Tashkent',
            'Paramaribo'
        ],
        answer: 1,
    },
    {
        //capitals/za-pretoria.jpeg,",
        image: "capitals/za-pretoria.jpeg,",
        variants: [
            'Victoria',
            'Pretoria',
            'PortLouis'
        ],
        answer: 2,
    },
    {
        //capitals/zm-lusaka.jpeg,",
        image: "capitals/zm-lusaka.jpeg",
        variants: [
            'Stockholm',
            'Niamey',
            'Lusaka'
        ],
        answer: 3,
    },
    {
        //capitals/zw-harare.jpeg",
        image: "capitals/zw-harare.jpeg",
        variants: [
            'Praia',
            'Bangui',
            'Harare'
        ],
        answer: 3,
    }
]