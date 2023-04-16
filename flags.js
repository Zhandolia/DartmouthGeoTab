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
        // AD / Andorra /
        image: 'flags/ad.png',
        choice1: 'Andorra',
        choice2: 'Colombia',
        choice3: 'Romania',
        answer: 1,
    },
    {    
        // AE / United Arab Emirates /
        image: "flags/ae.png",
        choice1: 'United Arab Emirates',
        choice2: 'Kuwait',
        choice3: 'Egypt',
        answer: 1,
    },
    {      
        // AF / Afghanistan /
        image: "flags/af.png",
        choice1: 'Bangladesh',
        choice2: 'Coco',
        choice3: 'Afghanistan',
        answer: 3,
    },
    {  
        // AG / Antigua and Barbuda /
        image: "flags/ag.png",
        choice1: 'Mongolia',
        choice2: 'Antigua and Barbuda',
        choice3: 'South Africa',
        answer: 2,
    },
    {  
        // AI / Anguilla /
        image: "flags/ai.png",
        choice1: 'Anguilla',
        choice2: 'Australia',
        choice3: 'Cook Islands',
        answer: 1,
    },
    {      
        // AL / Albania /
        image: "flags/al.png",
        choice1: 'Albania',
        choice2: 'Qatar',
        choice3: 'China',
        answer: 1,
    },
    {      
        // AM / Armenia /
        image: "flags/am.png",
        choice1: 'Andorra',
        choice2: 'Armenia',
        choice3: 'Romania',
        answer: 2,
    },
    {      
        // AO / Angola /
        image: "flags/ao.png",
        choice1: 'Angola',
        choice2: 'Kuwait',
        choice3: 'Bahrain',
        answer: 1,
    },
    {      
        // AQ / Antarctica /
        image: "flags/aq.png",
        choice1: 'Aruba',
        choice2: 'Argentina',
        choice3: 'Antarctica',
        answer: 3,
    },
    {      
        // AR / Argentina /
        image: "flags/ar.png",
        choice1: 'Botswana',
        choice2: 'Argentina',
        choice3: 'Micronesia',
        answer: 2,
    },
    {      
        // AS / American Samoa /
        image: "flags/as.png",
        choice1: 'American Samoa',
        choice2: 'Azerbaijan',
        choice3: 'Belgium',
        answer: 1,
    },
    {      
        // AT / Austria /
        image: "flags/at.png",
        choice1: 'Norway',
        choice2: 'Switzerland',
        choice3: 'Austria',
        answer: 3,
    },
    {      
        // AU / Australia /
        image: "flags/au.png",
        choice1: 'Scotland',
        choice2: 'Australia',
        choice3: 'Falkland Islands',
        answer: 2,
    },
    {      
        // AW / Aruba /
        image: "flags/aw.png",
        choice1: 'Aruba',
        choice2: 'Kazakhstan',
        choice3: 'Botswana',
        answer: 1,
    },
    {      
        // AX / Åland Islands /
        image: "flags/ax.png",
        choice1: 'Aland Islands',
        choice2: 'Norway',
        choice3: 'Bouvet Island',
        answer: 1,
    },
    {      
        // AZ / Azerbaijan /
        image: "flags/az.png",
        choice1: 'Turkey',
        choice2: 'Belarus',
        choice3: 'Azerbaijan',
        answer: 3,
    },
    {      
        // BA / Bosnia and Herzegovina /
        image: "flags/ba.png",
        choice1: 'Bosnia and Herzegovina',
        choice2: 'Ecuador',
        choice3: 'Ireland',
        answer: 1,
    },
    {      
        // BB / Barbados /
        image: "flags/bb.png",
        choice1: 'Belarus',
        choice2: 'Bolivia',
        choice3: 'Barbados',
        answer: 3,
    },
    {      
        // BD / Bangladesh /
        image: "flags/bd.png",
        choice1: 'Brazil',
        choice2: 'Bangladesh',
        choice3: 'Cyprus',
        answer: 1,
    },
    {      
        // BE / Belgium /
        image: "flags/be.png",
        choice1: 'Belgium',
        choice2: 'Germany',
        choice3: 'Greece',
        answer: 1,
    },
    {      
        // BF / Burkina Faso /
        image: "flags/bf.png",
        choice1: 'Belarus',
        choice2: 'Republic of Congo',
        choice3: 'Burkina Faso',
        answer: 3,
    },
    {      
        // BG / Bulgaria /
        image: "flags/bg.png",
        choice1: 'Bulgaria',
        choice2: 'Bolivia',
        choice3: 'Cameroon',
        answer: 1,
    },
    {  
        // BH / Bahrain /
        image: "flags/bh.png",
        choice1: 'Qatar',
        choice2: 'Bahrain',
        choice3: 'South Africa',
        answer: 2,
    },
    {      
        // BI / Burundi /
        image: "flags/bi.png",
        choice1: 'Burundi',
        choice2: 'Oman',
        choice3: 'Poland',
        answer: 1,
    },
    {      
        // BJ / Benin /
        image: "flags/bj.png",
        choice1: 'Fiji',
        choice2: 'Georgia',
        choice3: 'Benin',
        answer: 3,
    },
    {      
        // BL / Saint Barthélemy /
        image: "flags/bl.png",
        choice1: 'Saint Barthélemy',
        choice2: 'Hungary',
        choice3: 'Italy',
        answer: 1,
    },
    {      
        // BM / Bermuda /
        image: "flags/bm.png",
        choice1: 'Cuba',
        choice2: 'Bermuda',
        choice3: 'Egypt',
        answer: 2,
    },
    {      
        // BN / Brunei /
        image: "flags/bn.png",
        choice1: 'Brunei',
        choice2: 'Kosovo',
        choice3: 'Czech Republic',
        answer: 1,
    },
    {      
        // BO / Bolivia /
        image: "flags/bo.png",
        choice1: 'Dominica',
        choice2: 'Gabon',
        choice3: 'Bolivia',
        answer: 3,
    },
    {      
        // BQ / Bonaire /
        image: "flags/bq.png",
        choice1: 'Bonaire',
        choice2: 'Gambia',
        choice3: 'Chad',
        answer: 1,
    },
    {      
        // BR / Brazil /
        image: "flags/br.png",
        choice1: 'Brazil',
        choice2: 'Bhutan',
        choice3: 'Republic of Congo',
        answer: 1,
    },
    {      
        // BS / Bahamas /
        image: "flags/bs.png",
        choice1: 'Andorra',
        choice2: 'Belize',
        choice3: 'Bahamas',
        answer: 3,
    },
    {      
        // BT / Bhutan /
        image: "flags/bt.png",
        choice1: 'Honduras',
        choice2: 'Grenada',
        choice3: 'Bhutan',
        answer: 3,
    },
    {      
        // BV / Bouvet Island /
        image: "flags/bv.png",
        choice1: 'Kiribati',
        choice2: 'Japan',
        choice3: 'Bouvet Island',
        answer: 3,
    },
    {      
        // BW / Botswana /
        image: "flags/bw.png",
        choice1: 'Ethiopia',
        choice2: 'Botswana',
        choice3: 'Haiti',
        answer: 2,
    },
    {      
        // BY / Belarus /
        image: "flags/by.png",
        choice1: 'Belarus',
        choice2: 'Slovenia',
        choice3: 'Zambia',
        answer: 1,
    },
    {      
        // BZ / Belize /
        image: "flags/bz.png",
        choice1: 'Nepal',
        choice2: 'Panama',
        choice3: 'Belize',
        answer: 3,
    },
    {      
        // CA / Canada /
        image: "flags/ca.png",
        choice1: 'Kiribati',
        choice2: 'Canada',
        choice3: 'Albania',
        answer: 2,
    },
    {      
        // CC / Cocos /
        image: "flags/cc.png",
        choice1: 'Cocos',
        choice2: 'Guyana',
        choice3: 'Ivory Coast',
        answer: 1,
    },
    {      
        // CD / Democratic Republic of Congo /
        image: "flags/cd.png",
        choice1: 'Djibouti',
        choice2: 'East Timor',
        choice3: 'Democratic Republic of Congo',
        answer: 3,
    },
    {      
        // CF / Central African Republic /
        image: "flags/cf.png",
        choice1: 'Central African Republic',
        choice2: 'Guatemala',
        choice3: 'Kenya',
        answer: 1,
    },
    {      
        // CG / People's Republic of Congo /
        image: "flags/cg.png",
        choice1: 'Japan',
        choice2: "People's Republic of Congo",
        choice3: 'Kosovo',
        answer: 2,
    },
    {      
        // CH / Switzerland /
        image: "flags/ch.png",
        choice1: 'Canada',
        choice2: 'Chad',
        choice3: 'Switzerland',
        answer: 3,
    },
    {      
        // CI / Cote d'Ivoire / 
        image: "flags/ci.png",
        choice1: "Cote d'Ivoire",
        choice2: 'Ireland',
        choice3: 'Italy',
        answer: 1,
    },
    {      
        // CK / Cook Islands /
        image: "flags/ck.png",
        choice1: 'Solomon Islands',
        choice2: 'Marshall Islands',
        choice3: 'Cook Islands',
        answer: 3,
    },
    {      
        // CL / Chile /
        image: "flags/cl.png",
        choice1: 'Syria',
        choice2: 'Chile',
        choice3: 'Tunisia',
        answer: 2,
    },
    {      
        // CM / Cameroon /
        image: "flags/cm.png",
        choice1: 'Cameroon',
        choice2: 'Ukraine',
        choice3: 'Yemen',
        answer: 1,
    },
    {      
        // CN / China /
        image: "flags/cn.png",
        choice1: 'Senegal',
        choice2: 'Peru',
        choice3: 'China',
        answer: 1,
    },
    {      
        // CO / Colombia /
        image: "flags/co.png",
        choice1: 'Colombia',
        choice2: 'Venezuela',
        choice3: 'Ecuador',
        answer: 1,
    },
    {     
        // CR / Costa Rica /
        image: "flags/cr.png",
        choice1: 'Andorra',
        choice2: 'Morocco',
        choice3: 'Costa Rica',
        answer: 3,
    },
    {      
        // CU / Cuba /
        image: "flags/cu.png",
        choice1: 'Barbados',
        choice2: 'Cuba',
        choice3: 'Guinea',
        answer: 2,
    },
    {      
        // CV / Cape Verde /
        image: "flags/cv.png",
        choice1: 'Iceland',
        choice2: 'Cape Verde',
        choice3: 'Kyrgyzstan',
        answer: 2,
    },
    {      
        // CW / Curaçao /
        image: "flags/cw.png",
        choice1: 'Curaçao',
        choice2: 'North Korea',
        choice3: 'Lebanon',
        answer: 1,
    },
    {      
        // CX / Christmas Island /
        image: "flags/cx.png",
        choice1: 'Trinidad & Tobago',
        choice2: 'Marshall Islands',
        choice3: 'Christmas Island',
        answer: 3,
    },
    {      
        // CY / Cyprus /
        image: "flags/cy.png",
        choice1: 'Cyprus',
        choice2: 'Tuvalu',
        choice3: 'Antarctica',
        answer: 1,
    },
    {      
        // CZ / Czech Republic /
        image: "flags/cz.png",
        choice1: 'United Kingdom',
        choice2: 'Czech Republic',
        choice3: 'Paraguay',
        answer: 2,
    },
    {      
        // DE / Germany /
        image: "flags/de.png",
        choice1: 'Germany',
        choice2: 'Belgium',
        choice3: 'Kuwait',
        answer: 1,
    },
    {     
        // DJ / Djibouti /
        image: "flags/dj.png",
        choice1: 'Niger',
        choice2: 'Malawi',
        choice3: 'Djibouti',
        answer: 1,
    },
    {     
        // DK / Denmark /
        image: "flags/dk.png",
        choice1: 'Denmark',
        choice2: 'Libya',
        choice3: 'New Zealand',
        answer: 1,
    },
    {     
        // DM / Dominica /
        image: "flags/dm.png",
        choice1: 'St Lucia',
        choice2: 'Dominica',
        choice3: 'Ukraine',
        answer: 2,
    },
    {     
        // DO / Dominican Republic /
        image: "flags/do.png",
        choice1: 'San Marino',
        choice2: 'Poland',
        choice3: 'Dominican Republic',
        answer: 3,
    },
    {     
        // DZ / Algeria /
        image: "flags/dz.png",
        choice1: 'Tajikistan',
        choice2: 'Algeria',
        choice3: 'Vanuatu',
        answer: 2,
    },
    {     
        // EC / Ecuador /
        image: "flags/ec.png",
        choice1: 'Venezuela',
        choice2: 'Sierra Leone',
        choice3: 'Ecuador',
        answer: 3,
    },
    {     
        // EE / Estonia /
        image: "flags/ee.png",
        choice1: 'Romania',
        choice2: 'Estonia',
        choice3: 'Oman',
        answer: 2,
    },
    {    
        // EG / Egypt /
        image: "flags/eg.png",
        choice1: 'Egypt',
        choice2: 'United Arab Emirates',
        choice3: 'Kuwait',
        answer: 1,
    },
    {     
        // EH / Western Sahara /
        image: "flags/eh.png",
        choice1: 'Peru',
        choice2: 'South Korea',
        choice3: 'Western Sahara',
        answer: 3,
    },
    {     
        // ER / Eritrea /
        image: "flags/er.png",
        choice1: 'Rwanda',
        choice2: 'Eritrea',
        choice3: 'Serbia',
        answer: 2,
    },
    {     
        // ES / Spain /
        image: "flags/es.png",
        choice1: 'Slovenia',
        choice2: 'Spain',
        choice3: 'Slovakia',
        answer: 2,
    },
    {     
        // ET / Ethiopia /
        image: "flags/et.png",
        choice1: 'Ethiopia',
        choice2: 'Togo',
        choice3: 'Uganda',
        answer: 1,
    },
    {     
        // FI / Finland /
        image: "flags/fi.png",
        choice1: 'Taiwan',
        choice2: 'Ivory Coast',
        choice3: 'Finland',
        answer: 3,
    },
    {     
        // FJ / Fiji /
        image: "flags/fj.png",
        choice1: 'Fiji',
        choice2: 'Equatorial Guinea',
        choice3: 'Bahrain',
        answer: 1,
    },
    {     
        // FK / Falkland Islands /
        image: "flags/fk.png",
        choice1: 'Andorra',
        choice2: 'Colombia',
        choice3: 'Falkland Islands',
        answer: 3,
    },
    {     
        // FM / Federated States of Micronesia /
        image: "flags/fm.png",
        choice1: 'Andorra',
        choice2: 'Federated States of Micronesia',
        choice3: 'Romania',
        answer: 2,
    },
    {     
        // FO / Faroe Islands /
        image: "flags/fo.png",
        choice1: 'Faroe Islands',
        choice2: 'Belize',
        choice3: 'Angola',
        answer: 1,
    },
    {     
        // FR / France /
        image: "flags/fr.png",
        choice1: 'France',
        choice2: 'Colombia',
        choice3: 'Belgium',
        answer: 1,
    },
    {     
        // GA / Gabon /
        image: "flags/ga.png",
        choice1: 'Chile',
        choice2: 'Ecuador',
        choice3: 'Gabon',
        answer: 3,
    },
    {     
        // GB-ENG / England /
        image: "flags/gb-eng.png",
        choice1: 'England',
        choice2: 'Wales',
        choice3: 'Great Britain',
        answer: 1,
    },
    {     
        // GB-NIR / Northern Ireland /
        image: "flags/gb-nir.png",
        choice1: 'Central African Rep',
        choice2: 'Northern Ireland',
        choice3: 'Djibouti',
        answer: 2,
    },
    {     
        // GB-SCT / Scotland /
        image: "flags/gb-sct.png",
        choice1: 'East Timor',
        choice2: 'Scotland',
        choice3: 'Brunei',
        answer: 2,
    },
    {     
        // GB-WLS / Wales /
        image: "flags/gb-wls.png",
        choice1: 'Wales',
        choice2: 'Dominican Republic',
        choice3: 'Estonia',
        answer: 1,
    },
    {     
        // GB / Great Britain /
        image: "flags/gb.png",
        choice1: 'France',
        choice2: 'Greece',
        choice3: 'Great Britain',
        answer: 3,
    },
    {     
        // GD / Grenada /
        image: "flags/gd.png",
        choice1: 'Grenada',
        choice2: 'Cyprus',
        choice3: 'Gambia',
        answer: 1,
        
        // GE / Georgia /
        image: "flags/ge.png",
        choice1: 'China',
        choice2: 'Botswana',
        choice3: 'Georgia',
        answer: 3,
    },
    {     
        // GF / French Guiana /
        image: "flags/gf.png",
        choice1: 'France',
        choice2: 'French Guiana',
        choice3: 'Sao Tome & Principe',
        answer: 2,
    },
    {     
        // GG / Bailiwick of Guernsey /
        image: "flags/gg.png",
        choice1: 'Singapore',
        choice2: 'Tunisia',
        choice3: 'Bailiwick of Guernsey',
        answer: 3,
    },
    {     
        // GH / Ghana /
        image: "flags/gh.png",
        choice1: 'Ghana',
        choice2: 'Tongo',
        choice3: 'Uruguay',
        answer: 1,
    },
    {
        // GM / Gambia /
        image: "flags/gm.png",
        choice1: 'Vanuatu',
        choice2: 'Papua New Guinea',
        choice3: 'Gambia',
        answer: 3,
    },
    {     
        // GN / Guinea /
        image: "flags/gn.png",
        choice1: 'Guinea',
        choice2: 'Mexico',
        choice3: 'Luxembourg',
        answer: 1,
    },
    {     
        // GP / Guadeloupe /
        image: "flags/gp.png",
        choice1: 'Kosovo',
        choice2: 'Haiti',
        choice3: 'Guadeloupe',
        answer: 3,
    },
    {     
        // GQ / Equatorial Guinea /
        image: "flags/gq.png",
        choice1: 'Germany',
        choice2: 'Israel',
        choice3: 'Equatorial Guinea',
        answer: 3,
    },
    {     
        // GR / Greece /
        image: "flags/gr.png",
        choice1: 'Dominican',
        choice2: 'Greece',
        choice3: 'Cambodia',
        answer: 2,
    },
    {     
        // GS / South Sandwich Islands /
        image: "flags/gs.png",
        choice1: 'Kiribati',
        choice2: 'Colombia',
        choice3: 'South Sandwich Islands',
        answer: 3,
    },
    {     
        // GT / Guatemala /
        image: "flags/gt.png",
        choice1: 'Guatemala',
        choice2: 'Laos',
        choice3: 'Romania',
        answer: 1,
    },
    {     
        // GU / Guam /
        image: "flags/gu.png",
        choice1: 'Kyrgyzstan',
        choice2: 'Liechtenstein',
        choice3: 'Guam',
        answer: 3,
    },
    {     
        // GW / Guinea-Bissau /
        image: "flags/gw.png",
        choice1: 'Palau',
        choice2: 'Qatar',
        choice3: 'Guinea-Bissau',
        answer: 3,
    },
    {    
        // GY / Guyana /
        image: "flags/gy.png",
        choice1: 'Guyana',
        choice2: 'St Kitts & Nevis',
        choice3: 'Portugal',
        answer: 1,
    },
    {     
        // HK / Hong Kong /
        image: "flags/hk.png",
        choice1: 'Slovenia',
        choice2: 'Hong Kong',
        choice3: 'Vietnam',
        answer: 2,
    },
    {    
        // HM / Heard and McDonald Islands /
        image: "flags/hm.png",
        choice1: 'United Arab Emirates',
        choice2: 'Yemen',
        choice3: 'Heard and McDonald Islands',
        answer: 3,
    },
    {   
        // HN / Honduras /
        image: "flags/hn.png",
        choice1: 'Honduras',
        choice2: 'Taiwan',
        choice3: 'Uganda',
        answer: 1,
    },
    {    
        // HR / Croatia /
        image: "flags/hr.png",
        choice1: 'Poland',
        choice2: 'Croatia',
        choice3: 'Netherlands',
        answer: 2,
    },
    {     
        // HT / Haiti /
        image: "flags/ht.png",
        choice1: 'Haiti',
        choice2: 'Macedonia',
        choice3: 'Lebanon',
        answer: 1,
    },
    {    
        // HU / Hungary /
        image: "flags/hu.png",
        choice1: 'Georgia',
        choice2: 'Hungary',
        choice3: 'Haiti',
        answer: 2,
    },
    {     
        // ID / Indonesia /
        image: "flags/id.png",
        choice1: 'Indonesia', 
        choice2: 'Monaco',
        choice3: 'Poland',
        answer: 1,
    },
    {   
        // IE / Ireland /
        image: "flags/ie.png",
        choice1: 'Afghanistan',
        choice2: 'Comoros',
        choice3: 'Ireland',
        answer: 3,
    },
    {    
        // IL / Israel /
        image: "flags/il.png",
        choice1: 'Israel',
        choice2: 'Angola',
        choice3: 'Barbados',
        answer: 1,
    },
    {  
        // IM / Isle of Man /
        image: "flags/im.png",
        choice1: 'Costa Rica',
        choice2: 'Isle of Man',
        choice3: 'Egypt',
        answer: 2,
    },
    {  
        // IN / India /
        image: "flags/in.png",
        choice1: 'India',
        choice2: 'El Salvador',
        choice3: 'Chad',
        answer: 1,
    },
    {   
        // IO / British Indian Ocean Territory /
        image: "flags/io.png",
        choice1: 'Germany',
        choice2: 'Iceland',
        choice3: 'British Indian Ocean Territory',
        answer: 3,
    },
    {   
        // IQ / Iraq /
        image: "flags/iq.png",
        choice1: 'Iraq',
        choice2: 'Yemen',
        choice3: 'Iran',
        answer: 1,
    },
    {   
        // IR / Iran /
        image: "flags/ir.png",
        choice1: 'Yemen',
        choice2: 'Iraq',
        choice3: 'Iran',
        answer: 3,
    },
    {   
        // IS / Iceland /
        image: "flags/is.png",
        choice1: 'Andorra',
        choice2: 'Iceland',
        choice3: 'Indonesia',
        answer: 2,
    },
    {   
        // IT / Italy /
        image: "flags/it.png",
        choice1: 'Italy',
        choice2: 'Kenya',
        choice3: 'Malawi',
        answer: 1,
    },
    {   
        // JE / Jersey /
        image: "flags/je.png",
        choice1: 'Jersey',
        choice2: 'North Korea',
        choice3: 'Nepal',
        answer: 1,
    },
    {  
        // JM / Jamaica /
        image: "flags/jm.png",
        choice1: 'Jamaica',
        choice2: 'Malaysia',
        choice3: 'Liberia',
        answer: 1,
    },
    {  
        // JO / Jordan /
        image: "flags/jo.png",
        choice1: 'Bahrain',
        choice2: 'Albania',
        choice3: 'Jordan',
        answer: 3,
    },
    {  
        // JP / Japan /
        image: "flags/jp.png",
        choice1: 'Azerbaijan',
        choice2: 'Japan',
        choice3: 'Bangladesh',
        answer: 2,
    },
    {  
        // KE / Kenya /
        image: "flags/ke.png",
        choice1: 'Costa Rica',
        choice2: 'Kenya',
        choice3: 'Equatorial Guinea',
        answer: 2,
    },
    {  
        // KG / Kyrgyzstan /
        image: "flags/kg.png",
        choice1: 'Kyrgyzstan',
        choice2: 'China',
        choice3: 'Macedonia',
        answer: 1,
    },
    {  
        // KH / Cambodia /
        image: "flags/kh.png",
        choice1: 'Dominica',
        choice2: 'Cambodia',
        choice3: 'El Salvador',
        answer: 2,
    },
    {  
        // KI / Kiribati /
        image: "flags/ki.png",
        choice1: 'Kiribati',
        choice2: 'Algeria',
        choice3: 'Eritrea',
        answer: 1,
    },
    {  
        // KM / Comoros /
        image: "flags/km.png",
        choice1: 'Kazakhstan',
        choice2: 'Moldova',
        choice3: 'Comoros',
        answer: 3,
    },
    {  
        // KN / Saint Kitts and Nevis /
        image: "flags/kn.png",
        choice1: 'Panawa',
        choice2: 'Vietnam',
        choice3: 'Saint Kitts and Nevis',
        answer: 3,
    },
    {  
        // KP / North Korea /
        image: "flags/kp.png",
        choice1: 'North Korea',
        choice2: 'South Korea',
        choice3: 'Yemen',
        answer: 1,
    },
    {  
        // KR / South Korea
        image: "flags/kr.png",
        choice1: 'North Korea',
        choice2: 'Yemen',
        choice3: 'South Korea',
        answer: 3,
    },
    {     
        // KW / Kuwait /
        image: "flags/kw.png",
        choice1: 'United Arab Emirates',
        choice2: 'Kuwait',
        choice3: 'Egypt',
        answer: 2,
    },
    {    
        // KY / Cayman Islands /
        image: "flags/ky.png",
        choice1: 'Cayman Islands',
        choice2: 'Switzerland',
        choice3: 'Tuvalu',
        answer: 1,
    },
    {   
        // KZ / Kazakhstan /
        image: "flags/kz.png",
        choice1: 'Kyrgyzstan',
        choice2: 'Kazakhstan',
        choice3: 'Uzbekistan',
        answer: 2,
    },
    {   
        // LA / Laos /
        image: "flags/la.png",
        choice1: 'Chad',
        choice2: 'Togo',
        choice3: 'Laos',
        answer: 3,
    },
    {    
        // LB / Lebanon /
        image: "flags/lb.png",
        choice1: 'Lebanon',
        choice2: 'Jordan',
        choice3: 'Niger',
        answer: 1,
    },
    {    
        // LC / Saint Lucia /
        image: "flags/lc.png",
        choice1: 'Saint Lucia',
        choice2: 'Spain',
        choice3: 'Norway',
        answer: 1,
    },
    {    
        // LI / Liechtenstein /
        image: "flags/li.png",
        choice1: 'Samao',
        choice2: 'Tanzania',
        choice3: 'Liechtenstein',
        answer: 3,
    },
    {    
        // LK / Sri Lanka /
        image: "flags/lk.png",
        choice1: 'Sri Lanka',
        choice2: 'Turkey',
        choice3: 'Zimbabwe',
        answer: 1,
    },
    {    
        // LR / Liberia /
        image: "flags/lr.png",
        choice1: 'Saudi Arabia',
        choice2: 'Liberia',
        choice3: 'Mauritius',
        answer: 2,
    },
    {    
        // LS / Lesotho /
        image: "flags/ls.png",
        choice1: 'Iceland',
        choice2: 'Latvia',
        choice3: 'Lesotho',
        answer: 3,
    },
    {    
        // LT / Lithuania /
        image: "flags/lt.png",
        choice1: 'Lithuania',
        choice2: 'South Korea',
        choice3: 'Moldova',
        answer: 1,
    },
    {    
        // LU / Luxembourg /
        image: "flags/lu.png",
        choice1: 'Monaco',
        choice2: 'Netherlands',
        choice3: 'Luxembourg',
        answer: 3,
    },
    {    
        // LV / Latvia /
        image: "flags/lv.png",
        choice1: 'Latvia',
        choice2: 'Israel',
        choice3: 'Japan',
        answer: 1,
    },
    {    
        // MA / Morocco /
        image: "flags/ma.png",
        choice1: 'Gambia',
        choice2: 'Kenya',
        choice3: 'Morocco',
        answer: 3,
    },
    {    
        // MC / Monaco /
        image: "flags/mc.png",
        choice1: 'Monaco',
        choice2: 'Italy',
        choice3: 'Guinea',
        answer: 1,
    },
    {     
        // MD / Moldova /
        image: "flags/md.png",
        choice1: 'Laos',
        choice2: 'Moldova',
        choice3: 'Mali',
        answer: 2,
    },
    {     
        // ME / Montenegro /
        image: "flags/me.png",
        choice1: 'Montenegro',
        choice2: 'Mongolia',
        choice3: 'Madagascar',
        answer: 1,
    },
    {     
        // MF / Saint Martin /
        image: "flags/mf.png",
        choice1: 'Kenya',
        choice2: 'Nigeria',
        choice3: 'Saint Martin',
        answer: 3,
    },
    {     
        // MG / Madagascar /
        image: "flags/mg.png",
        choice1: 'Madagascar',
        choice2: 'Oman',
        choice3: 'Philippines',
        answer: 1,
    },
    {     
        // MH / Marshall Islands /
        image: "flags/mh.png",
        choice1: 'Marshall Islands',
        choice2: 'Russia',
        choice3: 'Rwanda',
        answer: 1,
    },
    {     
        // MK / Macedonia /
        image: "flags/mk.png",
        choice1: 'Micronesia',
        choice2: 'Macedonia',
        choice3: 'Ukraine',
        answer: 2,
    },
    {    
        // ML / Mali /
        image: "flags/ml.png",
        choice1: 'Serbia',
        choice2: 'Sweden',
        choice3: 'Mali',
        answer: 3,
    },
    {    
        // MM / Myanmar /
        image: "flags/mm.png",
        choice1: 'Myanmar',
        choice2: 'New Zealand',
        choice3: 'Paraguay',
        answer: 1,
    },
    {    
        // MN / Mongolia /
        image: "flags/mn.png",
        choice1: 'Panama',
        choice2: 'Mongolia',
        choice3: 'Andorra',
        answer: 2,
    },
    {    
        // MO / Macau /
        image: "flags/mo.png",
        choice1: 'Rwanda',
        choice2: 'Slovakia',
        choice3: 'Macau',
        answer: 3,
    },
    {    
        // MP / Northern Mariana Islands /
        image: "flags/mp.png",
        choice1: 'Northern Mariana Islands',
        choice2: 'Sudan',
        choice3: 'Tanzania',
        answer: 1,
    },
    {    
        // MQ / Martinique /
        image: "flags/mq.png",
        choice1: 'Taiwan',
        choice2: 'Martinique',
        choice3: 'Vanuatu',
        answer: 2,
    },
    {    
        // MR / Mauritania /
        image: "flags/mr.png",
        choice1: 'Mauritania',
        choice2: 'Romania',
        choice3: 'San Marino',
        answer: 1,
    },
    {    
        // MS / Montserrat /
        image: "flags/ms.png",
        choice1: 'Andorra',
        choice2: 'Colombia',
        choice3: 'Montserrat',
        answer: 3,
    },
    {    
        // MT / Malta /
        image: "flags/mt.png",
        choice1: 'Malta',
        choice2: 'St Kitts & Nevis',
        choice3: 'Libya',
        answer: 1,
    },
    {    
        // MU / Mauritius /
        image: "flags/mu.png",
        choice1: 'Antigua & Deps',
        choice2: 'Chile',
        choice3: 'Mauritius',
        answer: 3,
    },
    {    
        // MV / Maldives /
        image: "flags/mv.png",
        choice1: 'Croatia',
        choice2: 'Belgium',
        choice3: 'Maldives',
        answer: 3,
    },
    {    
        // MX / Mexico /
        image: "flags/mx.png",
        choice1: 'Barbados',
        choice2: 'Mexico',
        choice3: 'Ghana',
        answer: 2,
    },
    {    
        // MY / Malaysia /
        image: "flags/my.png",
        choice1: 'Malaysia',
        choice2: 'Cape Verde',
        choice3: 'Indonesia',
        answer: 1,
    },
    {    
        // MZ / Mozambique /
        image: "flags/mz.png",
        choice1: 'Somalia',
        choice2: 'Mozambique',
        choice3: 'Syria',
        answer: 2,
    },
    {    
        // NA / Namibia /
        image: "flags/na.png",
        choice1: 'Vatican',
        choice2: 'Suriname',
        choice3: 'Namibia',
        answer: 3,
    },
    {    
        // NC / New Caledonia /
        image: "flags/nc.png",
        choice1: 'New Caledonia',
        choice2: 'Samao',
        choice3: 'New Zealand',
        answer: 1,
    },
    {     
        // NE / Niger /
        image: "flags/ne.png",
        choice1: 'Nigeria',
        choice2: 'Niger',
        choice3: 'Syria',
        answer: 2,
    },
    {    
        // NF / Norfolk Island /
        image: "flags/nf.png",
        choice1: 'Marshall Islands',
        choice2: 'Solomon Islands',
        choice3: 'Norfolk Island',
        answer: 3,
    },
    {   
        // NG / Nigeria /
        image: "flags/ng.png",
        choice1: 'Nigeria',
        choice2: 'Turkey',
        choice3: 'Uganda',
        answer: 1,
    },
    {     
        // NI / Nicaragua /
        image: "flags/ni.png",
        choice1: 'St Kitts & Nevis',
        choice2: 'Nicaragua',
        choice3: 'Portugal',
        answer: 2,
    },
    {     
        // NL / Netherlands /
        image: "flags/nl.png",
        choice1: 'Monaco',
        choice2: 'Luxembourg',
        choice3: 'Netherlands',
        answer: 3,
    },
    {     
        // NO / Norway /
        image: "flags/no.png",
        choice1: 'Norway',
        choice2: 'Iceland',
        choice3: 'Sweden',
        answer: 1,
    },
    {     
        // NP / Nepal /
        image: "flags/np.png",
        choice1: 'Saint Vincent & the Grenadines',
        choice2: 'Colombia',
        choice3: 'Nepal',
        answer: 3,
    },
    {     
        // NR / Nauru /
        image: "flags/nr.png",
        choice1: 'Canada',
        choice2: 'Nauru',
        choice3: 'France',
        answer: 2,
    },
    {    
        // NU / Niue /
        image: "flags/nu.png",
        choice1: 'Saudi Arabia',
        choice2: 'Niue',
        choice3: 'Tonga',
        answer: 2,
    },
    {  
        // NZ / New Zealand /
        image: "flags/nz.png",
        choice1: 'New Zealand',
        choice2: 'Australia',
        choice3: 'Great Britain',
        answer: 1,
    },
    {  
        // OM / Oman  /
        image: "flags/om.png",
        choice1: 'Turkmenistan',
        choice2: 'Somalia',
        choice3: 'Oman',
        answer: 3,
    },
    {   
        // PA / Panama /
        image: "flags/pa.png",
        choice1: 'Panama',
        choice2: 'St Lucia',
        choice3: 'Tanzania',
        answer: 1,
    },
    {   
        // PE / Peru /
        image: "flags/pe.png",
        choice1: 'Netherlands',
        choice2: 'Macedonia',
        choice3: 'Peru',
        answer: 3,
    },
    {   
        // PF / French Polynesia /
        image: "flags/pf.png",
        choice1: 'Haiti',
        choice2: 'French Polynesia',
        choice3: 'Cambodia',
        answer: 2,
    },
    {   
        // PG / Papua New Guinea /
        image: "flags/pg.png",
        choice1: 'Papua New Guinea',
        choice2: 'Antigua & Deps',
        choice3: 'Ethiopia',
        answer: 1,
    },
    {   
        // PH / Philippines /
        image: "flags/ph.png",
        choice1: 'Mauritania',
        choice2: 'Philippines',
        choice3: 'Iraq',
        answer: 2,
    },
    {   
        // PK / Pakistan /
        image: "flags/pk.png",
        choice1: 'Samao',
        choice2: 'Thailand',
        choice3: 'Pakistan',
        answer: 3,
    },
    {   
        // PL / Poland /
        image: "flags/pl.png",
        choice1: 'Poland',
        choice2: 'Indonesia',
        choice3: 'Latvia',
        answer: 1,
    },
    {   
        // PM / Saint Pierre and Miquelon /
        image: "flags/pm.png",
        choice1: 'Saint Pierre and Miquelon',
        choice2: 'Somalia',
        choice3: 'Switzerland',
        answer: 1,
    },
    {   
        // PN / Pitcairn Islands /
        image: "flags/pn.png",
        choice1: 'Qatar',
        choice2: 'Morocco',
        choice3: 'Pitcairn Islands',
        answer: 3,
    },
    {   
        // PR / Puerto Rico /
        image: "flags/pr.png",
        choice1: 'Puerto Rico',
        choice2: 'Senegal',
        choice3: 'Vietnam',
        answer: 1,
    },
    {   
        // PS / Palestine /
        image: "flags/ps.png",
        choice1: 'Jordan',
        choice2: 'Palestine',
        choice3: 'Kuwait',
        answer: 2,
    },
    {   
        // PT / Portugal /
        image: "flags/pt.png",
        choice1: 'Andorra',
        choice2: 'Colombia',
        choice3: 'Portugal',
        answer: 3,
    },
    {   
        // PW / Palau /
        image: "flags/pw.png",
        choice1: 'Myanmar',
        choice2: 'Palau',
        choice3: 'Zimbabwe',
        answer: 2,
    },
    {   
        // PY / Paraguay /
        image: "flags/py.png",
        choice1: 'Paraguay',
        choice2: 'Uruguay',
        choice3: 'South Africa',
        answer: 1,
    },
    {   
        // QA / Qatar /
        image: "flags/qa.png",
        choice1: 'Qatar',
        choice2: 'Bahrain',
        choice3: 'South Africa',
        answer: 1,
    },
    {   
        // RE / Reunion /
        image: "flags/re.png",
        choice1: 'Indonesia',
        choice2: 'Georgia',
        choice3: 'Reunion',
        answer: 3,
    },
    {    
        // RO / Romania /
        image: "flags/ro.png",
        choice1: 'Colombia',
        choice2: 'Chad',
        choice3: 'Romania',
        answer: 3,
    },
    {    
        // RS / Serbia /
        image: "flags/rs.png",
        choice1: 'Croatia',
        choice2: 'Spain',
        choice3: 'Serbia',
        answer: 3,
    },
    {    
        // RU / Russian Federation /
        image: "flags/ru.png",
        choice1: 'Slovakia',
        choice2: 'Slovenia',
        choice3: 'Russia',
        answer: 3,
    },
    {    
        // RW / Rwanda /
        image: "flags/rw.png",
        choice1: 'Rwanda',
        choice2: 'Argentina',
        choice3: 'Zimbabwe',
        answer: 1,
    },
    {    
        // SA / Saudi Arabia /
        image: "flags/sa.png",
        choice1: 'Saudi Arabia',
        choice2: 'Japan',
        choice3: 'Tunisia',
        answer: 1,
    },
    {    
        // SB / Solomon Islands /
        image: "flags/sb.png",
        choice1: 'Egypt',
        choice2: 'Solomon Islands',
        choice3: 'Chad',
        answer: 2,
    },
    {    
        // SC / Seychelles /
        image: "flags/sc.png",
        choice1: 'Ethiopia',
        choice2: 'Slovenia',
        choice3: 'Seychelles',
        answer: 3,
    },
    {    
        // SD / Sudan /
        image: "flags/sd.png",
        choice1: 'Italy',
        choice2: 'Sudan',
        choice3: 'Vietnam',
        answer: 2,
    },
    {     
        // SE / Sweden /
        image: "flags/se.png",
        choice1: 'Sweden',
        choice2: 'Mongolia',
        choice3: 'Switzerland',
        answer: 1,
    },
    {    
        // SG / Singapore /
        image: "flags/sg.png",
        choice1: 'South Africa',
        choice2: 'Madagascar',
        choice3: 'Singapore',
        answer: 3,
    },
    {  
        // SH / Saint Helena /
        image: "flags/sh.png",
        choice1: 'Saint Helena',
        choice2: 'Brazil',
        choice3: 'Dominican Republic of Congo',
        answer: 1,
    },
    {  
        // SI / Slovenia /
        image: "flags/si.png",
        choice1: 'Slovakia',
        choice2: 'Russia',
        choice3: 'Slovenia',
        answer: 3,
    },
    {  
        // SJ / Svalbard and Jan Mayen /
        image: "flags/sj.png",
        choice1: 'Svalbard and Jan Mayen',
        choice2: 'Morocco',
        choice3: 'Tajikistan',
        answer: 1,
    },
    {  
        // SK / Slovakia /
        image: "flags/sk.png",
        choice1: 'Slovenia',
        choice2: 'Russia',
        choice3: 'Slovakia',
        answer: 3,
    },
    {     
        // SL / Sierra Leone /
        image: "flags/sl.png",
        choice1: 'Sierra Leone',
        choice2: 'Algeria',
        choice3: 'Georgia',
        answer: 1,
    },
    {     
        // SM / San Marino /
        image: "flags/sm.png",
        choice1: 'South Africa',
        choice2: 'Armenia',
        choice3: 'San Marino',
        answer: 3,
    },
    {     
        // SN / Senegal /
        image: "flags/sn.png",
        choice1: 'Senegal',
        choice2: 'Mali',
        choice3: 'Italy',
        answer: 1,
    },
    {    
        // SO / Somalia /
        image: "flags/so.png",
        choice1: 'Lebanon',
        choice2: 'Oman',
        choice3: 'Somalia',
        answer: 3,
    },
    {    
        // SR / Suriname /
        image: "flags/sr.png",
        choice1: 'Suriname',
        choice2: 'Bulgaria',
        choice3: 'Belgium',
        answer: 1,
    },
    {    
        // SS / South Sudan /
        image: "flags/ss.png",
        choice1: 'Macedonia',
        choice2: 'South Sudan',
        choice3: 'Ecuador',
        answer: 2,
    },
    {    
        // ST / Sao Tome and Príncipe /
        image: "flags/st.png",
        choice1: 'Venezuella',
        choice2: 'the USA',
        choice3: 'Sao Tome and Príncipe',
        answer: 3,
    },
    {    
        // SV / El Salvador /
        image: "flags/sv.png",
        choice1: 'El Salvador',
        choice2: 'Saudi Arabia',
        choice3: 'Bahrain',
        answer: 1,
    },
    {   
        // SX / Sint Maarten /
        image: "flags/sx.png",
        choice1: 'Nigeria',
        choice2: 'Latvia',
        choice3: 'Sint Maarten',
        answer: 3,
    },
    {    
        // SY / Syria /
        image: "flags/sy.png",
        choice1: 'Syria',
        choice2: 'China',
        choice3: 'Thailand',
        answer: 1,
    },
    {     
        // SZ / Swaziland /
        image: "flags/sz.png",
        choice1: 'Afghanistan',
        choice2: 'Ukraine',
        choice3: 'Swaziland',
        answer: 3,
    },
    {    
        // TC / Turks and Caicos Islands /
        image: "flags/tc.png",
        choice1: 'Turks and Caicos Island',
        choice2: 'Pakistan',
        choice3: 'India',
        answer: 1,
    },
    {    
        // TD / Chad /
        image: "flags/td.png",
        choice1: 'Chad',
        choice2: 'Nepal',
        choice3: 'Albania',
        answer: 1,
    },
    {   
        // TF / French Southern Territories /
        image: "flags/tf.png",
        choice1: 'French Southern Territories',
        choice2: 'Bangladesh',
        choice3: 'Russia',
        answer: 1,
    },
    {   
        // TG / Togo /
        image: "flags/tg.png",
        choice1: 'Philippines',
        choice2: 'Togo',
        choice3: 'Canada',
        answer: 2,
    },
    {    
        // TH / Thailand /
        image: "flags/th.png",
        choice1: 'North Korea',
        choice2: 'Kyrgyzstan',
        choice3: 'Thailand',
        answer: 3,
    },
    {    
        // TJ / Tajikistan /
        image: "flags/tj.png",
        choice1: 'Tajikistan',
        choice2: 'Iraq',
        choice3: 'Israel',
        answer: 1,
    },
    {    
        // TK / Tokelau /
        image: "flags/tk.png",
        choice1: 'Tokelau',
        choice2: 'Zambia',
        choice3: 'Germany',
        answer: 1,
    },
    {    
        // TL / East Timor /
        image: "flags/tl.png",
        choice1: 'Australia',
        choice2: 'Czech Republic',
        choice3: 'East Timor',
        answer: 3,
    },
    {     
        // TM / Turkmenistan /
        image: "flags/tm.png",
        choice1: 'Turkmenistan',
        choice2: 'Slovakia',
        choice3: 'Austria',
        answer: 1,
    },
    {    
        // TN / Tunisia /
        image: "flags/tn.png",
        choice1: 'Hungary',
        choice2: 'Tunisia',
        choice3: 'Kazakhstan',
        answer: 2,
    },
    {    
        // TO / Tonga /
        image: "flags/to.png",
        choice1: 'Tonga',
        choice2: 'Venezuella',
        choice3: 'Cambodia',
        answer: 1,
    },
    {    
        // TR / Turkey /
        image: "flags/tr.png",
        choice1: 'Uzbekistan',
        choice2: 'Turkmenistan',
        choice3: 'Turkey',
        answer: 3,
    },
    {    
        // TT / Trinidad and Tobago /
        image: "flags/tt.png",
        choice1: 'Trinidad and Tobago',
        choice2: 'Iran',
        choice3: 'Palestine',
        answer: 1,
    },
    {   
        // TV / Tuvalu /
        image: "flags/tv.png",
        choice1: 'Jordan',
        choice2: 'United Arab Emirates',
        choice3: 'Tuvalu',
        answer: 3,
    },
    {   
        // TW / Taiwan /
        image: "flags/tw.png",
        choice1: 'Taiwan',
        choice2: 'New Zealand',
        choice3: 'Bulgaria',
        answer: 1,
    },
    {   
        // TZ / Tanzania /
        image: "flags/tz.png",
        choice1: 'Bosnia',
        choice2: 'Tanzania',
        choice3: 'Romania',
        answer: 2,
    },
    {   
        // UA / Ukraine /
        image: "flags/ua.png",
        choice1: 'Chile',
        choice2: 'Denmark',
        choice3: 'Ukraine',
        answer: 3,
    },
    {   
        // UG / Uganda /
        image: "flags/ug.png",
        choice1: 'Uganda',
        choice2: 'France',
        choice3: 'Wales',
        answer: 1,
    },
    {   
        // UM / United States Minor Outlying Islands /
        image: "flags/um.png",
        choice1: 'Scotland',
        choice2: 'United Kingdom',
        choice3: 'United States Minor Outlying Islands',
        answer: 3,
    },
    {    
        // US / United States of America /
        image: "flags/us.png",
        choice1: 'the USA',
        choice2: 'Finland',
        choice3: 'Iceland',
        answer: 1,
    },
    {     
        // UY / Uruguay /
        image: "flags/uy.png",
        choice1: 'Uruguay',
        choice2: 'Netherlands',
        choice3: 'Sorth Korea',
        answer: 1,
    },
    {    
        // UZ / Uzbekistan /
        image: "flags/uz.png",
        choice1: 'Fiji',
        choice2: 'Uzbekistan',
        choice3: 'Portugal',
        answer: 2,
    },
    {    
        // VA / Vatican City /
        image: "flags/va.png",
        choice1: 'Costa Rica',
        choice2: 'El Salvador',
        choice3: 'Vatican City',
        answer: 3,
    },
    {    
        // VC / Saint Vincent and the Grenadines /
        image: "flags/vc.png",
        choice1: 'Saint Vincent and the Grenadines',
        choice2: 'Mexico',
        choice3: 'Cyprus',
        answer: 1,
    },
    {   
        // VE / Venezuela /
        image: "flags/ve.png",
        choice1: 'Venezuela',
        choice2: 'Kosovo',
        choice3: 'Ecuador',
        answer: 1,
    },
    {    
        // VG / British Virgin Islands /
        image: "flags/vg.png",
        choice1: 'Colombia',
        choice2: 'Belarus',
        choice3: 'British Virgin Islands',
        answer: 3,
    },
    {   
        // VI / U.S. Virgin Islands /
        image: "flags/vi.png",
        choice1: 'Bhutan',
        choice2: 'U.S. Virgin Islands',
        choice3: 'Canada',
        answer: 2,
    },
    {   
        // VN / Vietnam /
        image: "flags/vn.png",
        choice1: 'Bosnia Herzegovina',
        choice2: 'Antigua & Deps',
        choice3: 'Vietnam',
        answer: 3,
    },
    {     
        // VU / Vanuatu /
        image: "flags/vu.png",
        choice1: 'Vanuatu',
        choice2: 'Belize',
        choice3: 'Burkina',
        answer: 1,
    },
    {    
        // WF / Wallis and Futuna /
        image: "flags/wf.png",
        choice1: 'Eritrea',
        choice2: 'Wallis and Futuna',
        choice3: 'Ghana',
        answer: 2,
    },
    {    
        // WS / Samoa /
        image: "flags/ws.png",
        choice1: 'Tanzania',
        choice2: 'Nauru',
        choice3: 'Samoa',
        answer: 3,
    },
    {     
        // XK / Kosovo /
        image: "flags/xk.png",
        choice1: 'Kosovo',
        choice2: 'Lesotho',
        choice3: 'Madagascar',
        answer: 1,
    },
    {    
        // YE / Yemen /
        image: "flags/ye.png",
        choice1: 'Morocco',
        choice2: 'Iraq',
        choice3: 'Yemen',
        answer: 3,
    },
    {    
        // YT / Mayotte /
        image: "flags/yt.png",
        choice1: 'Mayotte',
        choice2: 'Eritrea',
        choice3: 'Guinea-Bissau',
        answer: 1,
    },
    {     
        // ZA / South Africa /
        image: "flags/za.png",
        choice1: 'United Arab Emirates',
        choice2: 'Azerbaijan',
        choice3: 'South Africa',
        answer: 3,
    },
    {     
        // ZM / Zambia /
        image: "flags/zm.png",
        choice1: 'Zambia',
        choice2: 'Comoros',
        choice3: 'Tuvalu',
        answer: 1,
    },
    {     
        // ZW / Zimbabwe /
        image: "flags/zw.png",
        choice1: 'Senegal',
        choice2: 'Zimbabwe',
        choice3: 'Saint Lucia',
        answer: 2,
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