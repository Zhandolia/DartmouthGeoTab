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

let questions = [
    {
        // AD / Andorra / La Vella /
        image: "capitals/ad-la_vella.png",
        name: 'Andorra',
        choice1: 'La Vella',
        choice2: 'Algiers',
        choice3: 'Sarajevo',
        answer: 1,
    },
    {    
        // AE / United Arab Emirates / Abu Dhabi /
        image: "capitals/ae-abu_dhabi.png",
        name: '',
        choice1: 'Libreville',
        choice2: 'Harare',
        choice3: 'Abu Dhabi',
        answer: 3,
    },
    {
        // AF / Afghanistan / Kabul
        image: "capitals/af-kabul.jpeg",
        name: 'Afghanistan',
        choice1: 'Kabul',
        choice2: 'Belmopan',
        choice3: 'Port of Spain',
        answer: 1,
    },
    {
        // AG / Antigua and Barbuda / Saint John's
        image: "capitals/ag-saint_john's.jpeg",
        name: 'Antigua and Barbuda',
        choice1: 'Paramaribo',
        choice2: "Saint John's",
        choice3: 'Lilongwe',
        answer: 2,
    },
    {
        // AI / Anguilla / The Valley
        image: "capitals/ai-the_valley.jpeg",
        name: 'Anguilla',
        choice1: 'Dili',
        choice2: 'Khartoum',
        choice3: 'The Valley',
        answer: 3,
    },
    {
        // AL / Albania / Tirana
        image: "capitals/al-tirana.jpeg",
        name: 'Albania',
        choice1: 'Nairobi',
        choice2: 'Monaco',
        choice3: 'Tirana',
        answer: 3,
    },
    {
        // AM / Armenia / Yerevan
        image: "capitals/am-yerevan.jpeg",
        name: 'Armenia',
        choice1: 'Djibouti',
        choice2: 'Yerevan',
        choice3: 'Managua',
        answer: 2,
    },
    {
        //ao-luanda.jpeg
        image: "capitals/ao-luanda.jpeg",
        name: 'Angola',
        choice1: "N'Djamena",
        choice2: 'Luanda',
        choice3: 'Manama',
        answer: 2,
    },
    {
        //ar-buenos_aires.jpeg
        image: "capitals/ar-buenos_aires.jpeg",
        name: 'Argetina',
        choice1: 'Canberra',
        choice2: 'Buenos Aires',
        choice3: 'Kingston',
        answer: 2,
    },
    {
        //at-vienna.jpeg
        image: "capitals/at-vienna.jpeg",
        name: 'Austria',
        choice1: 'Santiago',
        choice2: "N'Djamena",
        choice3: 'Vienna',
        answer: 3,
    },
    {   
        //au-canberra.jpeg
        image: "capitals/au-canberra.jpeg",
        name: 'Australia',
        choice1: 'Canberra',
        choice2: 'PortLouis',
        choice3: 'Chisinau',
        answer: 1,
    },
    {   
        //az-baku.jpeg
        image: "capitals/az-baku.jpeg",
        name: 'Azerbaijan',
        choice1: 'Apia',
        choice2: 'Monrovia',
        choice3: 'Baku',
        answer: 3,
    },
    {  
        //ba-sarajevo.jpeg
        image: "capitals/ba-sarajevo.jpeg",
        name: 'Bosnia and Herzegovina',
        choice1: 'Edinburgh',
        choice2: 'Ouagadougou',
        choice3: 'Sarajevo',
        answer: 3,
    },
    {  
        //bb-bridgetown.jpeg
        image: "capitals/bb-bridgetown.jpeg",
        name: 'Barbados',
        choice1: 'Tripoli',
        choice2: 'Manila',
        choice3: 'Bridgetown',
        answer: 3,
    },
    {   
        //bd-dhaka.jpeg
        image: "capitals/bd-dhaka.jpeg",
        name: 'Bangladesh',
        choice1: 'Tehran',
        choice2: 'Dhaka',
        choice3: 'Ljubljana',
        answer: 2,
    },
    {   
        //be-brussels.png
        image: "capitals/be-brussels.png",
        name: 'Belgium',
        choice1: 'Bern',
        choice2: 'Brussels',
        choice3: 'Tbilisi',
        answer: 2,
    },
    {   
        //bf-ouagadougou.jpeg
        image: "capitals/bf-ouagadougou.jpeg",
        name: 'Burkina Faso',
        choice1: 'Sucre',
        choice2: 'Berlin',
        choice3: 'Ouagadougou',
        answer: 3,
    },
    {    
        //bg-sofia.jpeg
        image: "capitals/bg-sofia.jpeg",
        name: 'Bulgaria',
        choice1: 'SanMarino',
        choice2: 'Sofia',
        choice3: 'Singapore',
        answer: 2,
    },
    {  
        //bh-manama.jpeg
        image: "capitals/bh-manama.jpeg",
        name: 'Bahrain',
        choice1: 'Harare',
        choice2: 'Manama',
        choice3: 'Yaren',
        answer: 2,
    },
    {  
        //bi-gitega.jpeg
        image: "capitals/bi-gitega.jpeg",
        name: 'Burundi',
        choice1: 'Gitega',
        choice2: 'Gaborone',
        choice3: 'Manila',
        answer: 1,
    },
    {  
        //bj-porto_novo.jpeg
        image: "capitals/bj-porto_novo.jpeg",
        name: 'Benin',
        choice1: 'Porto Novo',
        choice2: 'Maseru',
        choice3: 'Accra',
        answer: 1,
    },
    {  
        //bn-bandar_seri_begawan.jpeg
        image: "capitals/bn-bandar_seri_begawan.jpeg",
        name: 'Brunei',
        choice1: 'Bishkek',
        choice2: 'Bandar Seri Begawan',
        choice3: 'Kuwait City',
        answer: 2,
    },
    {  
        //bo-sucre.jpeg
        image: "capitals/bo-sucre.jpeg",
        name: 'Bolivia',
        choice1: 'Sucre',
        choice2: "St George's",
        choice3: 'Belfast',
        answer: 1,
    },
    {    
        //br-brasilia.jpeg
        image: "capitals/br-brasilia.jpeg",
        name: 'Brazil',
        choice1: 'Asuncion',
        choice2: 'Kingston',
        choice3: 'Brasilia',
        answer: 3,
    },
    {   
        //bs-nassau.jpeg
        image: "capitals/bs-nassau.jpeg",
        name: 'Bahamas',
        choice1: 'Quito',
        choice2: 'Tirana',
        choice3: 'Nassau',
        answer: 3,
    },
    {   
        //bt-thimphu.jpeg
        image: "capitals/bt-thimphu.jpeg",
        name: 'Bhutan',
        choice1: 'Prague',
        choice2: 'Thimphu',
        choice3: 'Edinburgh',
        answer: 2,
    },
    {   
        //bw-gaborone.jpeg
        image: "capitals/bw-gaborone.jpeg",
        name: 'Botswana',
        choice1: 'Funafuti',
        choice2: 'Malabo',
        choice3: 'Gaborone',
        answer: 3,
    },
    {    
        //by-minsk.jpeg
        image: "capitals/by-minsk.jpeg",
        name: 'Belarus',
        choice1: 'Minsk',
        choice2: 'Abuja',
        choice3: 'Seoul',
        answer: 1,
    },
    {    
        //bz-belmopan.jpeg
        image: "capitals/bz-belmopan.jpeg",
        name: 'Belize',
        choice1: 'Jakarta',
        choice2: 'Ouagadougou',
        choice3: 'Belmopan',
        answer: 3,
    },
    {   
        //ca-ottawa.jpeg
        image: "capitals/ca-ottawa.jpeg",
        name: 'Canada',
        choice1: 'Ottawa',
        choice2: 'Brazzaville',
        choice3: 'Kong',
        answer: 1,
    },
    {   
        //cd-kinshasa.jpeg
        image: "capitals/cd-kinshasa.jpeg",
        name: 'Democratic Republic of Congo',
        choice1: 'Funafuti',
        choice2: 'Pristina',
        choice3: 'Kinshasa',
        answer: 3,
    },
    {    
        //cf-bangui.jpeg
        image: "capitals/cf-bangui.jpeg",
        name: 'Central African Republic',
        choice1: 'Bangkok',
        choice2: 'Bangui',
        choice3: 'Kabul',
        answer: 2,
    },
    {   
        //cg-brazzaville.jpeg
        image: "capitals/cg-brazzaville.jpeg",
        name: "People's Republic of Congo",
        choice1: 'Beijing',
        choice2: 'Ashgabat',
        choice3: 'Brazzaville',
        answer: 3,
    },
    {   
        //ch-bern.jpeg
        image: "capitals/ch-bern.jpeg",
        name: 'Switzerland',
        choice1: 'Yamoussoukro',
        choice2: 'Asmara',
        choice3: 'Bern',
        answer: 3,
    },
    {   
        //ci-yamoussoukro.jpeg
        image: "capitals/ci-yamoussoukro.jpeg",
        name: "Cote d'Ivoire",
        choice1: 'Minsk',
        choice2: 'Yamoussoukro',
        choice3: 'Valletta',
        answer: 2,
    },
    {    
        //cl-santiago.jpeg
        image: "capitals/cl-santiago.jpeg",
        name: 'Chile',
        choice1: 'Ljubljana',
        choice2: 'Chisinau',
        choice3: 'Santiago',
        answer: 3,
    },
    {    
        //cm-yaounde.jpeg
        image: "capitals/cm-yaounde.jpeg",
        name: 'Cameroon',
        choice1: 'Riga',
        choice2: 'Yaounde',
        choice3: "SaintJohn's",
        answer: 2,
    },
    {    
        //cn-beijing.jpeg
        image: "capitals/cn-beijing.jpeg",
        name: 'China',
        choice1: 'Kabul',
        choice2: 'Palikir',
        choice3: 'Beijing',
        answer: 3,
    },
    {    
        //co-bogota.jpeg
        image: "capitals/co-bogota.jpeg",
        name: 'Colombia',
        choice1: 'Bangui',
        choice2: 'Madrid',
        choice3: 'Bogota',
        answer: 3,
    },
    {    
        //cr-san_jose.jpeg
        image: "capitals/cr-san_jose.jpeg",
        name: 'Costa Rica',
        choice1: 'Stockholm',
        choice2: 'Gaborone',
        choice3: 'San Jose',
        answer: 3,
    },
    {    
        //cs-belgrade.jpeg
        image: "capitals/cs-belgrade.jpeg",
        name: 'Serbia',
        choice1: 'Yerevan',
        choice2: 'Belgrade',
        choice3: 'Asuncion',
        answer: 2,
    },
    {   
        //cu-havana.jpeg
        image: "capitals/cu-havana.jpeg",
        name: 'Cuba',
        choice1: 'Tripoli',
        choice2: 'Kigali',
        choice3: 'Havana',
        answer: 3,
    },
    {   
        //cv-praia.jpeg
        image: "capitals/cv-praia.jpeg",
        name: 'Cape Verde',
        choice1: 'Praia',
        choice2: 'PhnomPenh',
        choice3: 'Algiers',
        answer: 1,
    },
    {   
        //cy-nicosia.jpeg
        image: "capitals/cy-nicosia.jpeg",
        name: 'Cyprus',
        choice1: 'Sucre',
        choice2: 'Nicosia',
        choice3: 'Asuncion',
        answer: 2,
    },
    {    
        //cz-prague.jpeg
        image: "capitals/cz-prague.jpeg",
        name: 'Czech Republic',
        choice1: 'Doha',
        choice2: 'Prague',
        choice3: 'Ashgabat',
        answer: 2,
    },
    {   
        //de-berlin.jpeg
        image: "capitals/de-berlin.jpeg",
        name: 'Germany',
        choice1: 'Mbabane',
        choice2: 'Berlin',
        choice3: 'Oslo',
        answer: 2,
    },
    {    
        //dj-djibouti.jpeg
        image: "capitals/dj-djibouti.jpeg",
        name: 'Djibouti',
        choice1: 'Astana',
        choice2: 'Djibouti',
        choice3: 'Santiago',
        answer: 2,
    },
    {    
        //dk-copenhagen.jpeg
        image: "capitals/dk-copenhagen.jpeg",
        name: 'Denmark',
        choice1: 'Madrid',
        choice2: 'Khartoum',
        choice3: 'Copenhagen',
        answer: 3,
    },
    {   
        //dm-roseau.jpeg
        image: "capitals/dm-roseau.jpeg",
        name: 'Dominica',
        choice1: 'Vienna',
        choice2: 'Roseau',
        choice3: 'Zagreb',
        answer: 2,
    },
    {   
        //do-santo_domingo.jpeg
        image: "capitals/do-santo_domingo.jpeg",
        name: 'Dominican Republic',
        choice1: 'Windhoek',
        choice2: 'Santo Domingo',
        choice3: 'Jakarta',
        answer: 2,
    },
    {   
        //dz-algiers.jpeg
        image: "capitals/dz-algiers.jpeg",
        name: 'Algeria',
        choice1: 'Warsaw',
        choice2: 'Algiers',
        choice3: 'Victoria',
        answer: 2,
    },
    {   
        //ec-quito.jpeg
        image: "capitals/ec-quito.jpeg",
        name: 'Ecuador',
        choice1: 'Moroni',
        choice2: 'AddisAbaba',
        choice3: 'Quito',
        answer: 3,
    },
    {   
        //ee-tallinn.jpeg
        image: "capitals/ee-tallinn.jpeg",
        name: 'Estonia',
        choice1: 'Djibouti',
        choice2: 'Tallinn',
        choice3: 'Minsk',
        answer: 2,
    },
    {   
        //eg-cairo.jpeg
        image: "capitals/eg-cairo.jpeg",
        name: 'Egypt',
        choice1: 'Moscow',
        choice2: 'Vienna',
        choice3: 'Abu Dhabi',
        answer: 3,
    },
    {   
        //er-asmara.jpeg
        image: "capitals/er-asmara.jpeg",
        name: 'Eritrea',
        choice1: 'Majuro',
        choice2: 'Yerevan',
        choice3: 'Asmara',
        answer: 3,
    },
    {  
        //es-madrid.jpeg
        image: "capitals/es-madrid.jpeg",
        name: 'Spain',
        choice1: 'Madrid',
        choice2: 'Sofia',
        choice3: 'Athens',
        answer: 1,
    },
    {    
        //et-addis_ababa.jpeg
        image: "capitals/et-addis_ababa.jpeg",
        name: 'Ethiopia',
        choice1: 'PhnomPenh',
        choice2: 'Tallinn',
        choice3: 'Addis Ababa',
        answer: 3,
    },
    {    
        //fi-helsinki.jpeg
        image: "capitals/fi-helsinki.jpeg",
        name: 'Finland',
        choice1: 'TheValley',
        choice2: 'Mbabane',
        choice3: 'Helsinki',
        answer: 3,
    },
    {    
        //fj-suva.jpeg
        image: "capitals/fj-suva.jpeg",
        name: 'Fiji',
        choice1: 'Dodoma',
        choice2: 'Suva',
        choice3: 'SanSalvador',
        answer: 2,
    },
    {   
        //fm-palikir.jpeg
        image: "capitals/fm-palikir.jpeg",
        name: 'Micronesia',
        choice1: 'The Valley',
        choice2: 'Rabat',
        choice3: 'Palikir',
        answer: 3,
    },
    {   
        //fr-paris.jpeg
        image: "capitals/fr-paris.jpeg",
        name: 'France',
        choice1: 'Paris',
        choice2: 'Taipei',
        choice3: 'Copenhagen',
        answer: 1,
    },
    {   
        //ga-libreville.jpeg
        image: "capitals/ga-libreville.jpeg",
        name: 'Gabon',
        choice1: 'Libreville',
        choice2: 'Bratislava',
        choice3: 'Brussels',
        answer: 1,
    },
    {   
        //gb-belfast.jpeg
        image: "capitals/gb-belfast.jpeg",
        name: 'Northern Ireland',
        choice1: 'Luanda',
        choice2: 'Ankara',
        choice3: 'Belfast',
        answer: 3,
    },
    {   
        //gb-london.jpeg
        image: "capitals/gb-london.jpeg",
        name: 'England',
        choice1: 'London',
        choice2: 'Berlin',
        choice3: 'Washington, D.C.',
        answer: 1,
    },
    {   
        //gb-sct-edinburgh.jpeg
        image: "capitals/gb-sct-edinburgh.jpeg",
        name: 'Scotland',
        choice1: 'Edinburgh',
        choice2: 'Managua',
        choice3: 'Tegucigalpa',
        answer: 1,
    },
    {   
        //gb-wls-cardiff.jpeg
        image: "capitals/gb-wls-cardiff.jpeg",
        name: 'Wales',
        choice1: 'Nouakchott',
        choice2: 'Bratislava',
        choice3: 'Cardiff',
        answer: 3,
    },
    {   
        //gd-saint_george's.jpeg
        image: "capitals/gd-saint_george's.jpeg",
        name: 'Grenada',
        choice1: 'Palikir',
        choice2: "St George's",
        choice3: 'Rabat',
        answer: 2,
    },
    {   
        //ge-tbilisi.jpeg
        image: "capitals/ge-tbilisi.jpeg",
        name: 'Georgia',
        choice1: 'Budapest',
        choice2: 'Tbilisi',
        choice3: 'Nouakchott',
        answer: 2,
    },
    {   
        //gh-accra.jpg
        image: "capitals/gh-accra.jpg",
        name: 'Ghana',
        choice1: 'Kathmandu',
        choice2: 'Rome',
        choice3: 'Accra',
        answer: 3,
    },
    {   
        //gm-banjul.jpeg
        image: "capitals/gm-banjul.jpeg",
        name: 'Gambia',
        choice1: 'Banjul',
        choice2: 'Bamako',
        choice3: 'Sarajevo',
        answer: 1,
    },
    {   
        //gn-conakry.jpeg
        image: "capitals/gn-conakry.jpeg",
        name: 'Guinea',
        choice1: 'Vientiane',
        choice2: 'Tirana',
        choice3: 'Conakry',
        answer: 3,
    },
    {    
        //gq-malabo.png
        image: "capitals/gq-malabo.png",
        name: 'Equatorial Guinea',
        choice1: 'Malabo',
        choice2: 'Kuwait City',
        choice3: 'Bishkek',
        answer: 1,
    },
    {  
        //gr-athens.jpeg
        image: "capitals/gr-athens.jpeg",
        name: 'Greece',
        choice1: 'Moscow',
        choice2: "Saint John's",
        choice3: 'Athens',
        answer: 3,
    },
    {    
        //gt-guatemala_city.jpeg
        image: "capitals/gt-guatemala_city.jpeg",
        name: 'Guatemala',
        choice1: 'Guatemala City',
        choice2: 'Beijing',
        choice3: 'Port Au Prince',
        answer: 1,
    },
    {    
        //gw-bissau.jpeg
        image: "capitals/gw-bissau.jpeg",
        name: 'Guinea-Bissau',
        choice1: 'Kingstown',
        choice2: 'Bissau',
        choice3: 'PortMoresby',
        answer: 2,
    },
    {    
        //gy-georgetown.jpeg
        image: "capitals/gy-georgetown.jpeg",
        name: 'Guyana',
        choice1: 'Georgetown',
        choice2: 'SanJose',
        choice3: 'Pretoria',
        answer: 1,
    },
    {   
        //hk-hong_kong.jpeg
        image: "capitals/hk-hong_kong.jpeg",
        name: 'Hong Kong',
        choice1: 'Rome',
        choice2: 'Hong Kong',
        choice3: 'Dublin',
        answer: 2,
    },
    {   
        //hn-tegucigalpa.jpeg
        image: "capitals/hn-tegucigalpa.jpeg",
        name: 'Honduras',
        choice1: 'Brazzaville',
        choice2: 'Rome',
        choice3: 'Tegucigalpa',
        answer: 3,
    },
    {   
        //hr-zagreb.jpeg
        image: "capitals/hr-zagreb.jpeg",
        name: 'Croatia',
        choice1: 'PhnomPenh',
        choice2: 'Zagreb',
        choice3: 'Lisbon',
        answer: 2,
    },
    {   
        //ht-port_au_prince.jpeg
        image: "capitals/ht-port_au_prince.jpeg",
        name: 'Haiti',
        choice1: 'Port Au Prince',
        choice2: 'Kingstown',
        choice3: 'Beirut',
        answer: 1,
    },
    {   
        //hy-budapest.jpeg
        image: "capitals/hy-budapest.jpeg",
        name: 'Hungary',
        choice1: 'Tokyo',
        choice2: 'Georgetown',
        choice3: 'Budapest',
        answer: 3,
    },
    {    
        //id-jakarta.jpeg
        image: "capitals/id-jakarta.jpeg",
        name: 'Indonesia',
        choice1: 'Conakry',
        choice2: 'Jakatra',
        choice3: 'Damascus',
        answer: 2,
    },
    {    
        //ie-dublin.jpeg
        image: "capitals/ie-dublin.jpeg",
        name: 'Ireland',
        choice1: 'PanamaCity',
        choice2: 'Pretoria',
        choice3: 'Dublin',
        answer: 3,
    },
    {    
        //il-jerusalem.jpeg
        image: "capitals/il-jerusalem.jpeg",
        name: 'Iserael',
        choice1: 'Helsinki',
        choice2: 'Lisbon',
        choice3: 'Jerusalem',
        answer: 3,
    },
    {    
        //in-new_delhi.jpeg
        image: "capitals/in-new_delhi.jpeg",
        name: 'India',
        choice1: 'Canberra',
        choice2: 'Malabo',
        choice3: 'New Delhi',
        answer: 3,
    },
    {   
        //iq-baghdad.jpeg
        image: "capitals/iq-baghdad.jpeg",
        name: 'Iraq',
        choice1: 'Baghdad',
        choice2: 'Bogata',
        choice3: 'Djibouti',
        answer: 1,
    },
    {  
        //ir-tehran.jpeg
        image: "capitals/ir-tehran.jpeg",
        name: 'Iran',
        choice1: 'Harare',
        choice2: 'Delhi',
        choice3: 'Tehran',
        answer: 3,
    },
    {  
        //is-reykjavik.jpeg
        image: "capitals/is-reykjavik.jpeg",
        name: 'Iceland',
        choice1: 'Managua',
        choice2: 'Reykjavik',
        choice3: 'Victoria',
        answer: 2,
    },
    {  
        //it-rome.jpeg
        image: "capitals/it-rome.jpeg",
        name: 'Italy',
        choice1: 'Yaounde',
        choice2: 'Tehran',
        choice3: 'Rome',
        answer: 3,
    },
    {  
        //jm-kingston.jpeg
        image: "capitals/jm-kingston.jpeg",
        name: 'Jamaica',
        choice1: 'Kingston',
        choice2: 'Niamey',
        choice3: 'PhnomPenh',
        answer: 1,
    },
    {  
        //jo-amman.jpeg
        image: "capitals/jo-amman.jpeg",
        name: 'Jordan',
        choice1: 'Amman',
        choice2: 'Thimphu',
        choice3: 'Tallinn',
        answer: 1,
    },
    {   
        //jp-tokyo.jpeg
        image: "capitals/jp-tokyo.jpeg",
        name: 'Japan',
        choice1: 'Tokyo',
        choice2: 'Seoul',
        choice3: 'Beijing',
        answer: 1,
    },
    {  
        //ke-nairobi.jpeg
        image: "capitals/ke-nairobi.jpeg",
        name: 'Kenya',
        choice1: 'Tegucigalpa',
        choice2: 'Nicosia',
        choice3: 'Nairboi',
        answer: 3,
    },
    {   
        //capitals/kg-bishkek.jpeg,",
        image: "capitals/kg-bishkek.jpeg,",
        name: 'Kyrgyzstan',
        choice1: 'Harare',
        choice2: 'Yaren',
        choice3: 'Bishkek',
        answer: 3,
    },
    {
        //capitals/kh-phnom_penh.jpeg,",
        image: "capitals/kh-phnom_penh.jpeg",
        name: 'Cambodia',
        choice1: 'Port Moresby',
        choice2: 'Monrovia',
        choice3: 'Phnom Penh',
        answer: 3,
    },
    {
        //capitals/ki-tarawa_atoll.jpeg,",
        image: "capitals/ki-tarawa_atoll.jpeg",
        name: 'Kiribati',
        choice1: 'AddisAbaba',
        choice2: 'Tarawa Atoll',
        choice3: 'Taipei',
        answer: 2,
    },
    {
        //capitals/km-moroni.jpeg,",
        image: "capitals/km-moroni.jpeg",
        name: 'Comoros',
        choice1: 'Gitega',
        choice2: 'Moroni',
        choice3: 'Dhaka',
        answer: 2,
    },
    {
        //capitals/kn-basseterre.jpeg,",
        image: "capitals/kn-basseterre.jpeg",
        name: 'Saint Kitts and Nevis',
        choice1: 'Maseru',
        choice2: 'Basseterre',
        choice3: 'Lisbon',
        answer: 2,
    },
    {
        //capitals/kp-pyongyang.jpeg,",
        image: "capitals/kp-pyongyang.jpeg",
        name: 'North Korea',
        choice1: 'Cairo',
        choice2: 'Dili',
        choice3: 'Pyongyang',
        answer: 3,
    },
    {
        //capitals/kr-seoul.jpeg,",
        image: "capitals/kr-seoul.jpeg",
        name: 'South Korea',
        choice1: 'Seoul',
        choice2: 'Singapore',
        choice3: 'Manila',
        answer: 1,
    },
    {
        //capitals/kw-kuwait_city.jpeg,",
        image: "capitals/kw-kuwait_city.jpeg",
        name: 'Kuwait',
        choice1: 'Monrovia',
        choice2: 'Kuwait City',
        choice3: 'AddisAbaba',
        answer: 2,
    },
    {
        //capitals/kz-astana.jpeg,",
        image: "capitals/kz-astana.jpeg",
        name: 'Kazakhstan',
        choice1: 'Maseru',
        choice2: 'Astana',
        choice3: 'Lilongwe',
        answer: 2,
    },
    {
        //capitals/lb-beirut.jpeg,",
        image: "capitals/lb-beirut.jpeg",
        name: 'Lebanon',
        choice1: 'Beirut',
        choice2: 'Riyadh',
        choice3: 'Juba',
        answer: 1,
    },
    {
        //capitals/lc-castries.jpeg,",
        image: "capitals/lc-castries.jpeg",
        name: 'Saint Lucia',
        choice1: 'Yaounde',
        choice2: 'Bridgetown',
        choice3: 'Castries',
        answer: 3,
    },
    {
        //capitals/li-vaduz.jpeg,",
        image: "capitals/li-vaduz.jpeg",
        name: 'Liechtenstein',
        choice1: 'Wellington',
        choice2: 'Li Vaduz',
        choice3: 'Conakry',
        answer: 2,
    },
    {
        //capitals/lk-sri_jayawardenepura_kotte.jpeg,",
        image: "capitals/lk-sri_jayawardenepura_kotte.jpeg",
        name: 'Sri Lanka',
        choice1: 'Sri Jayawardenepura Kotte',
        choice2: 'Antananarivo',
        choice3: 'Mogadishu',
        answer: 1,
    },
    {
        //capitals/lr-monrovia.jpeg,",
        image: "capitals/lr-monrovia.jpeg",
        name: 'Liberia',
        choice1: 'Yaounde',
        choice2: 'Monrovia',
        choice3: 'Yerevan',
        answer: 2,
    },
    {
        //capitals/ls-maseru.jpeg,",
        image: "capitals/ls-maseru.jpeg",
        name: 'Lesotho',
        choice1: 'Valletta',
        choice2: 'Sarajevo',
        choice3: 'Maseru',
        answer: 3,
    },
    {
        //capitals/lt-vilnius.jpeg,",
        image: "capitals/lt-vilnius.jpeg",
        name: 'Lithuania',
        choice1: 'Managua',
        choice2: 'San Marino',
        choice3: 'Vilnius',
        answer: 3,
    },
    {
        //capitals/lu-luxembourg.jpeg,",
        image: "capitals/lu-luxembourg.jpeg",
        name: 'Luxembourg',
        choice1: 'Kinshasa',
        choice2: 'Luxembourg',
        choice3: 'Delhi',
        answer: 2,
    },
    {
        //capitals/lv-riga.jpeg,",
        image: "capitals/lv-riga.jpeg",
        name: 'Latvia',
        choice1: 'Riga',
        choice2: 'Mogadishu',
        choice3: 'Singapore',
        answer: 1,
    },
    {
        //capitals/ly-tripoli.jpeg,",
        image: "capitals/ly-tripoli.jpeg",
        name: 'Libya',
        choice1: 'Tripoli',
        choice2: 'Santiago',
        choice3: 'Nicosia',
        answer: 1,
    },
    {
        //capitals/ma-rabat.jpeg,",
        image: "capitals/ma-rabat.jpeg",
        name: 'Morocco',
        choice1: 'Berlin',
        choice2: 'Banjul',
        choice3: 'Rabat',
        answer: 3,
    },
    {
        //capitals/mc-monaco.jpeg,",
        image: "capitals/mc-monaco.jpeg",
        name: 'Monaco',
        choice1: 'Tbilisi',
        choice2: 'Monaco',
        choice3: 'Doha',
        answer: 2,
    },
    {
        //capitals/md-chisinau.jpeg,",
        image: "capitals/md-chisinau.jpeg,",
        name: 'Moldova',
        choice1: 'Chisinau',
        choice2: 'Maputo',
        choice3: 'Kiev',
        answer: 1,
    },
    {
        //capitals/me-podgorica.jpeg,",
        image: "capitals/me-podgorica.jpeg",
        name: 'Montenegro',
        choice1: 'Podgorica',
        choice2: 'Dhaka',
        choice3: 'Bangui',
        answer: 1,
    },
    {
        //capitals/mg-antananarivo.jpeg,",
        image: "capitals/mg-antananarivo.jpeg",
        name: 'Madagascar',
        choice1: 'Beijing',
        choice2: 'Monaco',
        choice3: 'Antananarivo',
        answer: 3,
    },
    {
        //capitals/mh-majuro.jpeg,",
        image: "capitals/mh-majuro.jpeg",
        name: 'Marshall Islands',
        choice1: 'Lima',
        choice2: 'Majuro',
        choice3: 'Beirut',
        answer: 2,
    },
    {
        //capitals/mk-skopje.jpeg,",
        image: "capitals/mk-skopje.jpeg",
        name: 'Macedonia',
        choice1: 'Kiev',
        choice2: 'Wellington',
        choice3: 'Skopje',
        answer: 3,
    },
    {
        //capitals/ml-bamako.jpeg,",
        image: "capitals/ml-bamako.jpeg",
        name: 'Mali',
        choice1: 'Belfast',
        choice2: 'Bamako',
        choice3: 'Copenhagen',
        answer: 2,
    },
    {
        //capitals/mm-nay_pyi_taw.jpeg,",
        image: "capitals/mm-nay_pyi_taw.jpeg",
        name: 'Myanmar',
        choice1: 'Nay Pyi Taw',
        choice2: 'Bamako',
        choice3: 'Stockholm',
        answer: 1,
    },
    {
        //capitals/mn-ulaanbaatar.jpeg,",
        image: "capitals/mn-ulaanbaatar.jpeg",
        name: 'Mongolia',
        choice1: 'Baghdad',
        choice2: 'Wellington',
        choice3: 'Ulaanbaatar',
        answer: 3,
    },
    {
        //capitals/mr-nouakchott.jpeg,",
        image: "capitals/mr-nouakchott.jpeg",
        name: 'Mauritania',
        choice1: 'Dhaka',
        choice2: 'Haroi',
        choice3: 'Nouakchott',
        answer: 3,
    },
    {
        //capitals/mt-valletta.jpeg,",
        image: "capitals/mt-valletta.jpeg",
        name: 'Malta',
        choice1: 'Valletta',
        choice2: "Saint John's",
        choice3: 'Islamabad',
        answer: 1,
    },
    {
        //capitals/mu-port_louis.jpeg,",
        image: "capitals/mu-port_louis.jpeg",
        name: 'Mauritius',
        choice1: 'Dhaka',
        choice2: 'Port Louis',
        choice3: 'Wellington',
        answer: 2,
    },
    {
        //capitals/mv-male.jpeg,",
        image: "capitals/mv-male.jpeg",
        name: 'Maldives',
        choice1: 'Ulaanbaatar',
        choice2: 'Mogadishu',
        choice3: 'Male',
        answer: 3,
    },
    {
        //capitals/mw-lilongwe.jpeg,",
        image: "capitals/mw-lilongwe.jpeg",
        name: 'Malawi',
        choice1: 'Lilongwe',
        choice2: 'Dushanbe',
        choice3: 'Valletta',
        answer: 1,
    },
    {
        //capitals/mx-mexico_city.jpeg,",
        image: "capitals/mx-mexico_city.jpeg",
        name: 'Mexico',
        choice1: 'Minsk',
        choice2: 'Mexico City',
        choice3: 'Manama',
        answer: 2,
    },
    {
        //capitals/my-kuala_lumpur.jpeg,",
        image: "capitals/my-kuala_lumpur.jpeg",
        name: 'Malaysia',
        choice1: 'Kuala Lumpur',
        choice2: 'Funafuti',
        choice3: 'Dakar',
        answer: 1,
    },
    {
        //capitals/mz-maputo.jpeg,",
        image: "capitals/mz-maputo.jpeg",
        name: 'Mozambique',
        choice1: 'Luanda',
        choice2: 'Edinburgh',
        choice3: 'Maputo',
        answer: 3,
    },
    {
        //capitals/na-windhoek.jpeg,",
        image: "capitals/na-windhoek.jpeg",
        name: 'Namibia',
        choice1: 'Windhoek',
        choice2: 'Maseru',
        choice3: 'SanJuan',
        answer: 1,
    },
    {
        //capitals/ne-niamey.jpeg,",
        image: "capitals/ne-niamey.jpeg",
        name: 'Niger',
        choice1: 'Edinburgh',
        choice2: 'Niamey',
        choice3: 'Abuja',
        answer: 2,
    },
    {
        //capitals/ng-abuja.jpeg,",
        image: "capitals/ng-abuja.jpeg",
        name: 'Nigeria',
        choice1: 'Taipei',
        choice2: 'Jerusalem',
        choice3: 'Abuja',
        answer: 3,
    },
    {
        //capitals/ni-managua.jpeg,",
        image: "capitals/ni-managua.jpeg",
        name: 'Nicaragua',
        choice1: 'Managua',
        choice2: 'Warsaw',
        choice3: 'Paramaribo',
        answer: 1,
    },
    {
        //capitals/nl-amsterdam.jpeg,",
        image: "capitals/nl-amsterdam.jpeg",
        name: 'Netherlands',
        choice1: 'Chisinau',
        choice2: 'Amsterdam',
        choice3: 'Moroni',
        answer: 2,
    },
    {
        //capitals/no-oslo.jpeg,",
        image: "capitals/no-oslo.jpeg",
        name: 'Norway',
        choice1: 'PortMoresby',
        choice2: 'Riga',
        choice3: 'Oslo',
        answer: 3,
    },
    {
        //capitals/np-kathmandu.jpeg,",
        image: "capitals/np-kathmandu.jpeg",
        name: 'Nepal',
        choice1: 'Kathmandu',
        choice2: 'Cardiff',
        choice3: 'Bridgetown',
        answer: 1,
    },
    {
        //capitals/nr-yaren.jpeg,",
        image: "capitals/nr-yaren.jpeg",
        name: 'Nauru',
        choice1: 'San Juan',
        choice2: 'Yaren',
        choice3: 'Tehran',
        answer: 2,
    },
    {
        //capitals/nz-wellington.jpeg,",
        image: "capitals/nz-wellington.jpeg",
        name: 'New Zealand',
        choice1: 'Sofia',
        choice2: 'Vientiane',
        choice3: 'Wellington',
        answer: 3,
    },
    {
        //capitals/om-muscat.jpeg,",
        image: "capitals/om-muscat.jpeg",
        name: 'Oman',
        choice1: 'Muscat',
        choice2: 'Copenhagen',
        choice3: 'Tallinn',
        answer: 1,
    },
    {
        //capitals/pa-panama_city.jpeg,",
        image: "capitals/pa-panama_city.jpeg",
        name: 'Panama',
        choice1: 'Panama City',
        choice2: 'Tashkent',
        choice3: 'Minsk',
        answer: 1,
    },
    {
        //capitals/pe-lima.jpeg,",
        image: "capitals/pe-lima.jpeg",
        name: 'Peru',
        choice1: 'Chisinau',
        choice2: 'Lima',
        choice3: 'Quito',
        answer: 2,
    },
    {
        //capitals/pg-port_moresby.jpeg,",
        image: "capitals/pg-port_moresby.jpeg",
        name: 'Papua New Guinea',
        choice1: 'Kabul',
        choice2: 'Port Moresby',
        choice3: 'Tegucigalpa',
        answer: 2,
    },
    {
        //capitals/ph-manila.png,",
        image: "capitals/ph-manila.png",
        name: 'Philippines',
        choice1: 'Warsaw',
        choice2: 'SantoDomingo',
        choice3: 'Manila',
        answer: 3,
    },
    {
        //capitals/pk-islamabad.jpeg,",
        image: "capitals/pk-islamabad.jpeg",
        name: 'Pakistan',
        choice1: 'Islamabad',
        choice2: 'Roseau',
        choice3: 'Luxembourg',
        answer: 1,
    },
    {
        //capitals/pl-warsaw.jpeg,",
        image: "capitals/pl-warsaw.jpeg",
        name: 'Poland',
        choice1: 'Praia',
        choice2: 'Warsaw',
        choice3: 'Gaborone',
        answer: 2,
    },
    {
        //capitals/pr-san_juan.jpeg,",
        image: "capitals/pr-san_juan.jpeg",
        name: 'Puerto Rico',
        choice1: 'Kingston',
        choice2: 'Budapest',
        choice3: 'San Juan',
        answer: 3,
    },
    {
        //capitals/pt-lisbon.jpeg,",
        image: "capitals/pt-lisbon.jpeg",
        name: 'Portugal',
        choice1: 'Lisbon',
        choice2: 'Islamabad',
        choice3: 'Luanda',
        answer: 1,
    },
    {
        //capitals/pw-melekeok.jpeg,",
        image: "capitals/pw-melekeok.jpeg",
        name: 'Palau',
        choice1: 'Rome',
        choice2: 'Melekeok',
        choice3: 'KualaLumpur',
        answer: 2,
    },
    {
        //capitals/py-asuncion.jpeg,",
        image: "capitals/py-asuncion.jpeg",
        name: 'Paraguay',
        choice1: 'Asuncion',
        choice2: 'Muscat',
        choice3: 'Tirana',
        answer: 1,
    },
    {
        //capitals/qa-doha.jpeg,",
        image: "capitals/qa-doha.jpeg",
        name: 'Qatar',
        choice1: 'Doha',
        choice2: 'Riyadh',
        choice3: 'Dushanbe',
        answer: 1,
    },
    {
        //capitals/ro-bucharest.jpeg,",
        image: "capitals/ro-bucharest.jpeg",
        name: 'Romania',
        choice1: 'TheValley',
        choice2: 'Bucharest',
        choice3: 'Budapest',
        answer: 2,
    },
    {
        //capitals/ru-moscow.jpeg,",
        image: "capitals/ru-moscow.jpeg",
        name: 'Russia',
        choice1: 'Moscow',
        choice2: 'Prague',
        choice3: 'Kiev',
        answer: 1,
    },
    {
        //capitals/rw-kigali.jpeg,",
        image: "capitals/rw-kigali.jpeg",
        name: 'Rwanda',
        choice1: 'Islamabad',
        choice2: 'Kingali',
        choice3: 'NayPyiTaw',
        answer: 2,
    },
    {
        //capitals/sa-riyadh.jpeg,",
        image: "capitals/sa-riyadh.jpeg",
        name: 'Saudi Arabia',
        choice1: 'Honiara',
        choice2: 'Ljubljana',
        choice3: 'Riyadh',
        answer: 3,
    },
    {
        //capitals/sb-honiara.jpeg,",
        image: "capitals/sb-honiara.jpeg",
        name: 'Solomon Islands',
        choice1: 'Honiara',
        choice2: 'Valletta',
        choice3: 'Tunis',
        answer: 1,
    },
    {
        //capitals/sc-victoria.jpeg,",
        image: "capitals/sc-victoria.jpeg",
        name: 'Seychelles',
        choice1: 'Jakarta',
        choice2: 'Victoria',
        choice3: 'Kampala',
        answer: 2,
    },
    {
        //capitals/sd-juba.jpeg,",
        image: "capitals/sd-juba.jpeg",
        name: 'South Sudan',
        choice1: 'Nairobi',
        choice2: 'TheValley',
        choice3: 'Juba',
        answer: 3,
    },
    {
        //capitals/sd-khartoum.jpeg,",
        image: "capitals/sd-khartoum.jpeg",
        name: 'Sudan',
        choice1: 'Khartoum',
        choice2: 'Edinburgh',
        choice3: 'Majuro',
        answer: 1,
    },
    {
        //capitals/se-stockholm.jpeg,",
        image: "capitals/se-stockholm.jpeg",
        name: 'Sweden',
        choice1: 'Asmara',
        choice2: 'Georgetown',
        choice3: 'Stockholm',
        answer: 3,
    },
    {
        //capitals/sg-singapore.jpeg,",
        image: "capitals/sg-singapore.jpeg",
        name: 'Singapore',
        choice1: 'Monrovia',
        choice2: 'San Salvador',
        choice3: 'Singapore',
        answer: 3,
    },
    {
        //capitals/si-ljubljana.jpeg,",
        image: "capitals/si-ljubljana.jpeg",
        name: 'Slovenia',
        choice1: 'Ljubljana',
        choice2: 'Phnom Penh',
        choice3: 'Brasilia',
        answer: 1,
    },
    {
        //capitals/sk-bratislava.jpeg,",
        image: "capitals/sk-bratislava.jpeg",
        name: 'Slovakia',
        choice1: 'NayPyiTaw',
        choice2: 'Monrovia',
        choice3: 'Bratislava',
        answer: 3,
    },
    {
        //capitals/sl-freetown.jpeg,",
        image: "capitals/sl-freetown.jpeg",
        name: 'Sierra Leone',
        choice1: 'Freetown',
        choice2: 'Kuala Lumpur',
        choice3: 'Ulaanbaatar',
        answer: 1,
    },
    {
        //capitals/sm-san_marino.jpeg,",
        image: "capitals/sm-san_marino.jpeg",
        name: 'San Marino',
        choice1: 'Oslo',
        choice2: 'San Marino',
        choice3: 'Maputo',
        answer: 2,
    },
    {
        //capitals/sn-dakar.jpeg,",
        image: "capitals/sn-dakar.jpeg",
        name: 'Senegal',
        choice1: 'Dakar',
        choice2: 'Kiev',
        choice3: 'Phnom Penh',
        answer: 1,
    },
    {
        //capitals/so-mogadishu.jpeg,",
        image: "capitals/so-mogadishu.jpeg",
        name: 'Somalia',
        choice1: 'SanSalvador',
        choice2: 'SanJose',
        choice3: 'Mogadishu',
        answer: 3,
    },
    {
        //capitals/sr-paramaribo.jpeg,",
        image: "capitals/sr-paramaribo.jpeg",
        name: 'Suriname',
        choice1: 'Paramaribo',
        choice2: 'Brazzaville',
        choice3: 'PortVila',
        answer: 1,
    },
    {
        //capitals/st-sao_tome.jpeg,",
        image: "capitals/st-sao_tome.jpeg",
        name: 'Sao Tome and Príncipe',
        choice1: 'Sao Tome',
        choice2: 'Maseru',
        choice3: 'Moscow',
        answer: 1,
    },
    {
        //capitals/sv-san_salvador.jpeg,",
        image: "capitals/sv-san_salvador.jpeg",
        name: 'El Salvador',
        choice1: 'San Salvador',
        choice2: 'Port of Spain',
        choice3: 'Abuja',
        answer: 1,
    },
    {
        //capitals/sy-damascus.jpeg,",
        image: "capitals/sy-damascus.jpeg",
        name: 'Syria',
        choice1: 'Accra',
        choice2: 'Dakar',
        choice3: 'Damascus',
        answer: 3,
    },
    {
        //capitals/sz-mbabane.jpeg,",
        image: "capitals/sz-mbabane.jpeg",
        name: 'Swaziland',
        choice1: 'Mbabane',
        choice2: 'Georgetown',
        choice3: 'Addis Ababa',
        answer: 1,
    },
    {
        //capitals/td-n'djamena.jpeg,",
        image: "capitals/td-n'djamena.jpeg",
        name: 'Chad',
        choice1: "N'Djamena",
        choice2: 'Panama City',
        choice3: 'Roseau',
        answer: 1,
    },
    {
        //capitals/tg-lome.jpeg,",
        image: "capitals/tg-lome.jpeg",
        name: 'Togo',
        choice1: 'Hong',
        choice2: 'Lome',
        choice3: 'Ouagadougou',
        answer: 2,
    },
    {
        //capitals/th-bangkok.jpeg,",
        image: "capitals/th-bangkok.jpeg",
        name: 'Thailand',
        choice1: 'Vilnius',
        choice2: 'Ankara',
        choice3: 'Bangkok',
        answer: 3,
    },
    {
        //capitals/tj-dushanbe.jpeg,",
        image: "capitals/tj-dushanbe.jpeg",
        name: 'Tajikistan',
        choice1: 'Dushanbe',
        choice2: 'Pretoria',
        choice3: 'Kathmandu',
        answer: 1,
    },
    {
        //capitals/tl-dili.jpeg,",
        image: "capitals/tl-dili.jpeg",
        name: 'East Timor',
        choice1: 'Jakarta',
        choice2: 'Dili',
        choice3: 'Tripoli',
        answer: 2,
    },
    {
        //capitals/tm-ashgabat.jpeg,",
        image: "capitals/tm-ashgabat.jpeg",
        name: 'Turkmenistan',
        choice1: 'Copenhagen',
        choice2: 'Novo',
        choice3: 'Ashgabat',
        answer: 3,
    },
    {
        //capitals/tn-tunis.jpeg,",
        image: "capitals/tn-tunis.jpeg",
        name: 'Tunisia',
        choice1: 'Tunis',
        choice2: 'Porto',
        choice3: 'Riyadh',
        answer: 1,
    },
    {
        //capitals/to-nuku'alofa.jpeg,",
        image: "capitals/to-nuku'alofa.jpeg",
        name: 'Tonga',
        choice1: 'Riga',
        choice2: "Nuku'alofa",
        choice3: 'Quito',
        answer: 2,
    },
    {
        //capitals/tr-ankara.jpeg,",
        image: "capitals/tr-ankara.jpeg",
        name: 'Turkey',
        choice1: 'Ankara',
        choice2: 'Baku',
        choice3: 'Khartoum',
        answer: 1,
    },
    {
        //capitals/tt-port_of_spain.jpeg,",
        image: "capitals/tt-port_of_spain.jpeg",
        name: 'Trinidad and Tobago',
        choice1: 'Port Moresby',
        choice2: 'The Valley',
        choice3: 'Port of Spain',
        answer: 3,
    },
    {
        //capitals/tv-funafuti.jpeg,",
        image: "capitals/tv-funafuti.jpeg",
        name: 'Tuvalu',
        choice1: 'Yerevan',
        choice2: 'Sri Jayawardenepura Kotte',
        choice3: 'Funafuti',
        answer: 3,
    },
    {
        //capitals/tw-taipei.jpeg,",
        image: "capitals/tw-taipei.jpeg",
        name: 'Taiwan',
        choice1: 'Taipei',
        choice2: 'Manila',
        choice3: 'Astana',
        answer: 1,
    },
    {
        //capitals/tz-dodoma.jpeg,",
        image: "capitals/tz-dodoma.jpeg",
        name: 'Tanzania',
        choice1: 'PhnomPenh',
        choice2: 'Asmara',
        choice3: 'Dodoma',
        answer: 3,
    },
    {
        //capitals/ua-kiev.jpeg,",
        image: "capitals/ua-kiev.jpeg",
        name: 'Ukraine',
        choice1: 'Kiev',
        choice2: 'Minsk',
        choice3: 'Moscow',
        answer: 1,
    },
    {
        //capitals/ug-kampala.jpeg,",
        image: "capitals/ug-kampala.jpeg",
        name: 'Uganda',
        choice1: 'Conakry',
        choice2: 'Gitega',
        choice3: 'Kampala',
        answer: 3,
    },
    {
        //capitals/us-washington_dc.jpeg,",
        image: "capitals/us-washington_dc.jpeg",
        name: 'the USA',
        choice1: 'Washington, D.C.',
        choice2: 'Tallinn',
        choice3: 'Malabo',
        answer: 1,
    },
    {
        //capitals/uy-montevideo.jpeg,",
        image: "capitals/uy-montevideo.jpeg",
        name: 'Urugyay',
        choice1: 'Yamoussoukro',
        choice2: 'Kingstown',
        choice3: 'Montevideo',
        answer: 3,
    },
    {
        //capitals/uz-tashkent.jpeg,",
        image: "capitals/uz-tashkent.jpeg",
        name: 'Uzbekistan',
        choice1: 'Tashkent',
        choice2: 'Djibouti',
        choice3: 'Luanda',
        answer: 1,
    },
    {
        //capitals/va-vatican_city.jpeg,",
        image: "capitals/va-vatican_city.jpeg",
        name: 'Vatican City',
        choice1: 'Vatican City',
        choice2: 'Lilongwe',
        choice3: 'Ulaanbaatar',
        answer: 1,
    },
    {
        //capitals/vc-kingstown.jpeg,",
        image: "capitals/vc-kingstown.jpeg",
        name: 'Saint Vincent and the Grenadines',
        choice1: 'Mbabane',
        choice2: 'Kingstown',
        choice3: 'Riyadh',
        answer: 2,
    },
    {
        //capitals/ve-caracas.png,",
        image: "capitals/ve-caracas.png",
        name: 'Venezuela',
        choice1: 'Caracas',
        choice2: 'Seoul',
        choice3: 'Asuncion',
        answer: 1,
    },
    {
        //capitals/vn-haroi.jpeg,",
        image: "capitals/vn-haroi.jpeg",
        name: 'Vietnam',
        choice1: 'Chisinau',
        choice2: 'Amsterdam',
        choice3: 'Haroi',
        answer: 3,
    },
    {
        //capitals/vu-port_vila.jpeg,",
        image: "capitals/vu-port_vila.jpeg",
        name: 'Vanuatu',
        choice1: 'Tirana',
        choice2: 'Port Vila',
        choice3: 'Khartoum',
        answer: 2,
    },
    {
        //capitals/ws-apia.jpeg,",
        image: "capitals/ws-apia.jpeg",
        name: 'Samoa',
        choice1: 'Kingston',
        choice2: 'Apia',
        choice3: 'Haroi',
        answer: 2,
    },
    {
        //capitals/xk-pristina.jpeg,",
        image: "capitals/xk-pristina.jpeg",
        name: 'Kosovo',
        choice1: 'Pristina',
        choice2: 'PortVila',
        choice3: 'Vienna',
        answer: 1,
    },
    {
        //capitals/ye-sana'a.jpeg,",
        image: "capitals/ye-sana'a.jpeg",
        name: 'Yemen',
        choice1: "Sana'a",
        choice2: 'Tashkent',
        choice3: 'Paramaribo',
        answer: 1,
    },
    {
        //capitals/za-pretoria.jpeg,",
        image: "capitals/za-pretoria.jpeg",
        name: 'South Africa',
        choice1: 'Victoria',
        choice2: 'Pretoria',
        choice3: 'PortLouis',
        answer: 2,
    },
    {
        //capitals/zm-lusaka.jpeg,",
        image: "capitals/zm-lusaka.jpeg",
        name: 'Zambia',
        choice1: 'Stockholm',
        choice2: 'Niamey',
        choice3: 'Lusaka',
        answer: 3,
    },
    {
        //capitals/zw-harare.jpeg",
        image: "capitals/zw-harare.jpeg",
        name: 'Zimbabwe',
        choice1: 'Praia',
        choice2: 'Bangui',
        choice3: 'Harare',
        answer: 3,
    }
]

const SCORE_POINTS = 1
const MAX_IMAGES = 254

startGame = () => {
    imageCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || imageCounter > MAX_IMAGES) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('/end.html')
    }

    imageCounter++
    progressText.innerText = `Question ${imageCounter} of ${MAX_IMAGES}`
    progressBarFull.style.width = `${(imageCounter/MAX_IMAGES) * 1}%`
    
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentImage = availableQuestions[questionsIndex]
    image.innerText = currentImage.image

    
    document.getElementById('image').innerHTML=`
        <img src="${questions[questionsIndex].image}" style="width:150px;height:90px">
    `;
    

    document.getElementById('first').innerHTML = questions[questionsIndex].choice1
    document.getElementById('second').innerHTML = questions[questionsIndex].choice2
    document.getElementById('third').innerHTML = questions[questionsIndex].choice3
    document.getElementById('country').innerHTML = questions[questionsIndex].name


    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e => {

        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentImage.answer ? 'correct' : 'incorrect'

        if(classToApply === 'correct') {
            incrementScore(SCORE_POINTS)
            
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()

        }, 10)
    })
})

incrementScore = num => {
    score += num
    scoreText.innerText = score
}

startGame()


////////////////////

// const flag_names = ['Kazakhstan', 'Russia', 'USA', 'Uzbekistan', 
// 'Tajikistan', 'Albania', 'Tunisia', 'Moldovo', 'Kosovo', 'Ukraine', 'Belarus'];
// const flag_images = ['kz.jpeg', 'ru.jpeg', 'us.jpeg', 'uz.jpeg', 'tj.jpeg'];

// function getRandom3(list) {
//     const res = [];
//     for (let x=1; x<=3;x++){
//         const random = Math.floor(Math.random()*list.length)
//         res.push(list[random]);
//     }
// }

// function getRandomElements(list, flag_names=2) {
//     return [...list].sort(() => Math.random() > 0.5 ? 1 : -1).slice(0, flag_names)
// }

// console.log(getRandomElements(flag_names));