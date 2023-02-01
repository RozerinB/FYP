import countryList from 'react-select-country-list'

export const countries = countryList().getData()

export let ageList = [];

for (let i = 18; i <= 90; i++) {
    ageList.push({ value: i.toString() , label: i.toString() });
}

export const yesOrNo = [
    {
        value: 'yes',
        label: 'Yes'
    },
    {
        value: 'no',
        label: 'No'
    }
]

export const noOfDevices = [
    {
        value: '1',
        label: 'None'
    },
    {
        value: '2',
        label: '1-3'
    },
    {
        value: '3',
        label: '3-5'
    },
    {
        value: '4',
        label: '5+'
    }
]

export const deviceType = [
    {
        value: '1',
        label: 'Tablet'
    },
    {
        value: '2',
        label: 'Computer'
    },
    {
        value: '3',
        label: 'Smartphone'
    },
    {
        value: '4',
        label: 'Non-smartphone'
    }
]

export const technicalCompetency = [
    {
        value: '1',
        label: 'Fundamental Awareness'
    },
    {
        value: '2',
        label: 'Novice'
    },
    {
        value: '3',
        label: 'Intermediate'
    },
    {
        value: '4',
        label: 'Advanced'
    },
    {
        value: '4',
        label: 'Expert'
    }

]

export const genders = [
  {
    value: 'female',
    label: 'Female'
  }, 
  {
    value: 'male',
    label: 'Male'
  }, 
  {
    value: 't-female',
    label: 'Transgender Female'
  }, 
  {
    value: 't-male',
    label: 'Transgender Male'
  }, 
  {
    value: 'gender-variant',
    label: 'Gender Variant / Non-Conforming'
  }, 
  {
    value: 'not-listed',
    label: 'Not Listed'
  }, 
  {
    value: 'n/a',
    label: 'Prefer not to answer'
  }, 
];

export const textDirectionalities = [
  {
    value: '1', 
    label: 'left-to-right text'
  },
  {
    value: '2', 
    label: 'right-to-left text'
  }
];

export const ethnicGroups = [
  {
    value: '1',
    label: 'Asian',
    disabled: true,
  }, 
  {
    value: 'indian',
    label: 'Indian'
  }, 
  {
    value: 'pakistani',
    label: 'Pakistani'
  }, 
  {
    value: 'bangladeshi',
    label: 'Bangladeshi'
  }, 
  {
    value: 'chinese',
    label: 'Chinese'
  }, 
  {
    value: 'mixed-asian',
    label: 'Mixed Asian'
  }, 
  {
    value: 'otherAsianBackground',
    label: 'Any other Asian background'
  }, 
  {
    value: '2',
    label: 'Black, Black British, Caribbean or African',
    disabled: true,
  }, 
  {
    value: 'caribbean',
    label: 'Caribbean'
  }, 
  {
    value: 'african',
    label: 'African'
  }, 
  {
    value: 'other-black',
    label: 'Any other Black, Black British, or Caribbean background'
  }, 
  {
    value: '3',
    label: 'White',
    disabled: true,
  }, 
  {
    value: 'english/welsh/scottish/irish/british',
    label: 'English / Welsh / Scottish / Northern Irish / British'
  }, 
  {
    value: 'irish',
    label: 'Irish'
  }, 
  {
    value: 'gypsy/irish',
    label: 'Gypsy or Irish Traveller'
  }, 
  {
    value: 'other-white',
    label: 'Any other White background, please describe'
  }, 
  {
    value: 'n/a',
    label: 'Prefer not to answer'
  }, 
];

export const nationalities = [
  {
      value: "Afghanistan",
      label: "Afghan"
  },
  {
      value: "\u00c5land Islands",
      label: "\u00c5land Island"
  },
  {
      value: "Albania",
      label: "Albanian"
  },
  {
      value: "Algeria",
      label: "Algerian"
  },
  {
      value: "American Samoa",
      label: "American Samoan"
  },
  {
      value: "Andorra",
      label: "Andorran"
  },
  {
      value: "Angola",
      label: "Angolan"
  },
  {
      value: "Anguilla",
      label: "Anguillan"
  },
  {
      value: "Antarctica",
      label: "Antarctic"
  },
  {
      value: "Antigua and Barbuda",
      label: "Antiguan or Barbudan"
  },
  {
      value: "Argentina",
      label: "Argentine"
  },
  {
      value: "Armenia",
      label: "Armenian"
  },
  {
      value: "Aruba",
      label: "Aruban"
  },
  {
      value: "Australia",
      label: "Australian"
  },
  {
      value: "Austria",
      label: "Austrian"
  },
  {
      value: "Azerbaijan",
      label: "Azerbaijani, Azeri"
  },
  {
      value: "Bahamas",
      label: "Bahamian"
  },
  {
      value: "Bahrain",
      label: "Bahraini"
  },
  {
      value: "Bangladesh",
      label: "Bangladeshi"
  },
  {
      value: "Barbados",
      label: "Barbadian"
  },
  {
      value: "Belarus",
      label: "Belarusian"
  },
  {
      value: "Belgium",
      label: "Belgian"
  },
  {
      value: "Belize",
      label: "Belizean"
  },
  {
      value: "Benin",
      label: "Beninese, Beninois"
  },
  {
      value: "Bermuda",
      label: "Bermudian, Bermudan"
  },
  {
      value: "Bhutan",
      label: "Bhutanese"
  },
  {
      value: "Bolivia (Plurinational State of)",
      label: "Bolivian"
  },
  {
      value: "Bonaire, Sint Eustatius and Saba",
      label: "Bonaire"
  },
  {
      value: "Bosnia and Herzegovina",
      label: "Bosnian or Herzegovinian"
  },
  {
      value: "Botswana",
      label: "Motswana, Botswanan"
  },
  {
      value: "Bouvet Island",
      label: "Bouvet Island"
  },
  {
      value: "Brazil",
      label: "Brazilian"
  },
  {
      value: "British Indian Ocean Territory",
      label: "BIOT"
  },
  {
      value: "Brunei Darussalam",
      label: "Bruneian"
  },
  {
      value: "Bulgaria",
      label: "Bulgarian"
  },
  {
      value: "Burkina Faso",
      label: "Burkinab\u00e9"
  },
  {
      value: "Burundi",
      label: "Burundian"
  },
  {
      value: "Cabo Verde",
      label: "Cabo Verdean"
  },
  {
      value: "Cambodia",
      label: "Cambodian"
  },
  {
      value: "Cameroon",
      label: "Cameroonian"
  },
  {
      value: "Canada",
      label: "Canadian"
  },
  {
      value: "Cayman Islands",
      label: "Caymanian"
  },
  {
      value: "Central African Republic",
      label: "Central African"
  },
  {
      value: "Chad",
      label: "Chadian"
  },
  {
      value: "Chile",
      label: "Chilean"
  },
  {
      value: "China",
      label: "Chinese"
  },
  {
      value: "Christmas Island",
      label: "Christmas Island"
  },
  {
      value: "Cocos (Keeling) Islands",
      label: "Cocos Island"
  },
  {
      value: "Colombia",
      label: "Colombian"
  },
  {
      value: "Comoros",
      label: "Comoran, Comorian"
  },
  {
      value: "Congo (Republic of the)",
      label: "Congolese"
  },
  {
      value: "Congo (Democratic Republic of the)",
      label: "Congolese"
  },
  {
      value: "Cook Islands",
      label: "Cook Island"
  },
  {
      value: "Costa Rica",
      label: "Costa Rican"
  },
  {
      value: "C\u00f4te d'Ivoire",
      label: "Ivorian"
  },
  {
      value: "Croatia",
      label: "Croatian"
  },
  {
      "": "192",
      "alpha_2_code": "CU",
      "alpha_3_code": "CUB",
      value: "Cuba",
      label: "Cuban"
  },
  {
      value: "Cura\u00e7ao",
      label: "Cura\u00e7aoan"
  },
  {
      value: "Cyprus",
      label: "Cypriot"
  },
  {
      value: "Czech Republic",
      label: "Czech"
  },
  {
      value: "Denmark",
      label: "Danish"
  },
  {
      value: "Djibouti",
      label: "Djiboutian"
  },
  {
      value: "Dominica",
      label: "Dominican"
  },
  {
      value: "Dominican Republic",
      label: "Dominican"
  },
  {
      value: "Ecuador",
      label: "Ecuadorian"
  },
  {
      value: "Egypt",
      label: "Egyptian"
  },
  {
      value: "El Salvador",
      label: "Salvadoran"
  },
  {
      value: "Equatorial Guinea",
      label: "Equatorial Guinean, Equatoguinean"
  },
  {
      value: "Eritrea",
      label: "Eritrean"
  },
  {
      value: "Estonia",
      label: "Estonian"
  },
  {
      value: "Ethiopia",
      label: "Ethiopian"
  },
  {
      value: "Falkland Islands (Malvinas)",
      label: "Falkland Island"
  },
  {
      value: "Faroe Islands",
      label: "Faroese"
  },
  {
      value: "Fiji",
      label: "Fijian"
  },
  {
      value: "Finland",
      label: "Finnish"
  },
  {
      value: "France",
      label: "French"
  },
  {
      value: "French Guiana",
      label: "French Guianese"
  },
  {
      value: "French Polynesia",
      label: "French Polynesian"
  },
  {
      value: "French Southern Territories",
      label: "French Southern Territories"
  },
  {
      value: "Gabon",
      label: "Gabonese"
  },
  {
      value: "Gambia",
      label: "Gambian"
  },
  {
      value: "Georgia",
      label: "Georgian"
  },
  {
      value: "Germany",
      label: "German"
  },
  {
      value: "Ghana",
      label: "Ghanaian"
  },
  {
      value: "Gibraltar",
      label: "Gibraltar"
  },
  {
      value: "Greece",
      label: "Greek, Hellenic"
  },
  {
      value: "Greenland",
      label: "Greenlandic"
  },
  {
      value: "Grenada",
      label: "Grenadian"
  },
  {
      value: "Guadeloupe",
      label: "Guadeloupe"
  },
  {
      value: "Guam",
      label: "Guamanian, Guambat"
  },
  {
      value: "Guatemala",
      label: "Guatemalan"
  },
  {
      value: "Guernsey",
      label: "Channel Island"
  },
  {
      value: "Guinea",
      label: "Guinean"
  },
  {
      value: "Guinea-Bissau",
      label: "Bissau-Guinean"
  },
  {
      value: "Guyana",
      label: "Guyanese"
  },
  {
      value: "Haiti",
      label: "Haitian"
  },
  {
      value: "Heard Island and McDonald Islands",
      label: "Heard Island or McDonald Islands"
  },
  {
      value: "Vatican City State",
      label: "Vatican"
  },
  {
      value: "Honduras",
      label: "Honduran"
  },
  {
      value: "Hong Kong",
      label: "Hong Kong, Hong Kongese"
  },
  {
      value: "Hungary",
      label: "Hungarian, Magyar"
  },
  {
      value: "Iceland",
      label: "Icelandic"
  },
  {
      value: "India",
      label: "Indian"
  },
  {
      value: "Indonesia",
      label: "Indonesian"
  },
  {
      value: "Iran",
      label: "Iranian, Persian"
  },
  {
      value: "Iraq",
      label: "Iraqi"
  },
  {
      value: "Ireland",
      label: "Irish"
  },
  {
      value: "Isle of Man",
      label: "Manx"
  },
  {
      value: "Israel",
      label: "Israeli"
  },
  {
      value: "Italy",
      label: "Italian"
  },
  {
      value: "Jamaica",
      label: "Jamaican"
  },
  {
      value: "Japan",
      label: "Japanese"
  },
  {
      value: "Jersey",
      label: "Channel Island"
  },
  {
      value: "Jordan",
      label: "Jordanian"
  },
  {
      value: "Kazakhstan",
      label: "Kazakhstani, Kazakh"
  },
  {
      value: "Kenya",
      label: "Kenyan"
  },
  {
      value: "Kiribati",
      label: "I-Kiribati"
  },
  {
      value: "Korea (Democratic People's Republic of)",
      label: "North Korean"
  },
  {
      value: "Korea (Republic of)",
      label: "South Korean"
  },
  {
      value: "Kuwait",
      label: "Kuwaiti"
  },
  {
      value: "Kyrgyzstan",
      label: "Kyrgyzstani, Kyrgyz, Kirgiz, Kirghiz"
  },
  {
      value: "Lao People's Democratic Republic",
      label: "Lao, Laotian"
  },
  {
      value: "Latvia",
      label: "Latvian"
  },
  {
      value: "Lebanon",
      label: "Lebanese"
  },
  {
      value: "Lesotho",
      label: "Basotho"
  },
  {
      value: "Liberia",
      label: "Liberian"
  },
  {
      value: "Libya",
      label: "Libyan"
  },
  {
      value: "Liechtenstein",
      label: "Liechtenstein"
  },
  {
      value: "Lithuania",
      label: "Lithuanian"
  },
  {
      value: "Luxembourg",
      label: "Luxembourg, Luxembourgish"
  },
  {
      value: "Macao",
      label: "Macanese, Chinese"
  },
  {
      value: "Macedonia (the former Yugoslav Republic of)",
      label: "Macedonian"
  },
  {
      value: "Madagascar",
      label: "Malagasy"
  },
  {
      value: "Malawi",
      label: "Malawian"
  },
  {
      value: "Malaysia",
      label: "Malaysian"
  },
  {
      value: "Maldives",
      label: "Maldivian"
  },
  {
      value: "Mali",
      label: "Malian, Malinese"
  },
  {
      value: "Malta",
      label: "Maltese"
  },
  {
      value: "Marshall Islands",
      label: "Marshallese"
  },
  {
      value: "Martinique",
      label: "Martiniquais, Martinican"
  },
  {
      value: "Mauritania",
      label: "Mauritanian"
  },
  {
      value: "Mauritius",
      label: "Mauritian"
  },
  {
      value: "Mayotte",
      label: "Mahoran"
  },
  {
      value: "Mexico",
      label: "Mexican"
  },
  {
      value: "Micronesia (Federated States of)",
      label: "Micronesian"
  },
  {
      value: "Moldova (Republic of)",
      label: "Moldovan"
  },
  {
      value: "Monaco",
      label: "Monacan"
  },
  {
      value: "Mongolia",
      label: "Mongolian"
  },
  {
      value: "Montenegro",
      label: "Montenegrin"
  },
  {
      value: "Montserrat",
      label: "Montserratian"
  },
  {
      value: "Morocco",
      label: "Moroccan"
  },
  {
      value: "Mozambique",
      label: "Mozambican"
  },
  {
      value: "Myanmar",
      label: "Burmese"
  },
  {
      value: "Namibia",
      label: "Namibian"
  },
  {
      value: "Nauru",
      label: "Nauruan"
  },
  {
      value: "Nepal",
      label: "Nepali, Nepalese"
  },
  {
      value: "Netherlands",
      label: "Dutch, Netherlandic"
  },
  {
      value: "New Caledonia",
      label: "New Caledonian"
  },
  {
      value: "New Zealand",
      label: "New Zealand, NZ"
  },
  {
      value: "Nicaragua",
      label: "Nicaraguan"
  },
  {
      value: "Niger",
      label: "Nigerien"
  },
  {
      value: "Nigeria",
      label: "Nigerian"
  },
  {
      value: "Niue",
      label: "Niuean"
  },
  {
      value: "Norfolk Island",
      label: "Norfolk Island"
  },
  {
      value: "Northern Mariana Islands",
      label: "Northern Marianan"
  },
  {
      value: "Norway",
      label: "Norwegian"
  },
  {
      value: "Oman",
      label: "Omani"
  },
  {
      value: "Pakistan",
      label: "Pakistani"
  },
  {
      value: "Palau",
      label: "Palauan"
  },
  {
      value: "Palestine, State of",
      label: "Palestinian"
  },
  {
      value: "Panama",
      label: "Panamanian"
  },
  {
      value: "Papua New Guinea",
      label: "Papua New Guinean, Papuan"
  },
  {
      value: "Paraguay",
      label: "Paraguayan"
  },
  {
      value: "Peru",
      label: "Peruvian"
  },
  {
      value: "Philippines",
      label: "Philippine, Filipino"
  },
  {
      value: "Pitcairn",
      label: "Pitcairn Island"
  },
  {
      value: "Poland",
      label: "Polish"
  },
  {
      value: "Portugal",
      label: "Portuguese"
  },
  {
      value: "Puerto Rico",
      label: "Puerto Rican"
  },
  {
      value: "Qatar",
      label: "Qatari"
  },
  {
      value: "R\u00e9union",
      label: "R\u00e9unionese, R\u00e9unionnais"
  },
  {
      value: "Romania",
      label: "Romanian"
  },
  {
      value: "Russian Federation",
      label: "Russian"
  },
  {
      value: "Rwanda",
      label: "Rwandan"
  },
  {
      value: "Saint Barth\u00e9lemy",
      label: "Barth\u00e9lemois"
  },
  {
      value: "Saint Helena, Ascension and Tristan da Cunha",
      label: "Saint Helenian"
  },
  {
      value: "Saint Kitts and Nevis",
      label: "Kittitian or Nevisian"
  },
  {
      "alpha_3_code": "LCA",
      value: "Saint Lucia",
      label: "Saint Lucian"
  },
  {
      value: "Saint Martin (French part)",
      label: "Saint-Martinoise"
  },
  {
      value: "Saint Pierre and Miquelon",
      label: "Saint-Pierrais or Miquelonnais"
  },
  {
      value: "Saint Vincent and the Grenadines",
      label: "Saint Vincentian, Vincentian"
  },
  {
      value: "Samoa",
      label: "Samoan"
  },
  {
      value: "San Marino",
      label: "Sammarinese"
  },
  {
      value: "Sao Tome and Principe",
      label: "S\u00e3o Tom\u00e9an"
  },
  {
      value: "Saudi Arabia",
      label: "Saudi, Saudi Arabian"
  },
  {
      value: "Senegal",
      label: "Senegalese"
  },
  {
      value: "Serbia",
      label: "Serbian"
  },
  {
      value: "Seychelles",
      label: "Seychellois"
  },
  {
      value: "Sierra Leone",
      label: "Sierra Leonean"
  },
  {
      value: "Singapore",
      label: "Singaporean"
  },
  {
      value: "Sint Maarten (Dutch part)",
      label: "Sint Maarten"
  },
  {
      value: "Slovakia",
      label: "Slovak"
  },
  {
      value: "Slovenia",
      label: "Slovenian, Slovene"
  },
  {
      value: "Solomon Islands",
      label: "Solomon Island"
  },
  {
      value: "Somalia",
      label: "Somali, Somalian"
  },
  {
      value: "South Africa",
      label: "South African"
  },
  {
      value: "South Georgia and the South Sandwich Islands",
      label: "South Georgia or South Sandwich Islands"
  },
  {
      value: "South Sudan",
      label: "South Sudanese"
  },
  {
      value: "Spain",
      label: "Spanish"
  },
  {
      value: "Sri Lanka",
      label: "Sri Lankan"
  },
  {
      value: "Sudan",
      label: "Sudanese"
  },
  {
      value: "Suriname",
      label: "Surinamese"
  },
  {
      value: "Svalbard and Jan Mayen",
      label: "Svalbard"
  },
  {
      value: "Swaziland",
      label: "Swazi"
  },
  {
      value: "Sweden",
      label: "Swedish"
  },
  {
      value: "Switzerland",
      label: "Swiss"
  },
  {
      value: "Syrian Arab Republic",
      label: "Syrian"
  },
  {
      value: "Taiwan, Province of China",
      label: "Chinese, Taiwanese"
  },
  {
      value: "Tajikistan",
      label: "Tajikistani"
  },
  {
      value: "Tanzania, United Republic of",
      label: "Tanzanian"
  },
  {
      value: "Thailand",
      label: "Thai"
  },
  {
      value: "Timor-Leste",
      label: "Timorese"
  },
  {
      value: "Togo",
      label: "Togolese"
  },
  {
      value: "Tokelau",
      label: "Tokelauan"
  },
  {
      value: "Tonga",
      label: "Tongan"
  },
  {
      value: "Trinidad and Tobago",
      label: "Trinidadian or Tobagonian"
  },
  {
      value: "Tunisia",
      label: "Tunisian"
  },
  {
      value: "Turkey",
      label: "Turkish"
  },
  {
      value: "Turkmenistan",
      label: "Turkmen"
  },
  {
      value: "Turks and Caicos Islands",
      label: "Turks and Caicos Island"
  },
  {
      value: "Tuvalu",
      label: "Tuvaluan"
  },
  {
      value: "Uganda",
      label: "Ugandan"
  },
  {
      value: "Ukraine",
      label: "Ukrainian"
  },
  {
      value: "United Arab Emirates",
      label: "Emirati, Emirian, Emiri"
  },
  {
      value: "United Kingdom of Great Britain and Northern Ireland",
      label: "British, UK"
  },
  {
      value: "United States Minor Outlying Islands",
      label: "American"
  },
  {
      value: "United States of America",
      label: "American"
  },
  {
      value: "Uruguay",
      label: "Uruguayan"
  },
  {
      value: "Uzbekistan",
      label: "Uzbekistani, Uzbek"
  },
  {
      value: "Vanuatu",
      label: "Ni-Vanuatu, Vanuatuan"
  },
  {
      value: "Venezuela (Bolivarian Republic of)",
      label: "Venezuelan"
  },
  {
      value: "Vietnam",
      label: "Vietnamese"
  },
  {
      value: "Virgin Islands (British)",
      label: "British Virgin Island"
  },
  {
      value: "Virgin Islands (U.S.)",
      label: "U.S. Virgin Island"
  },
  {
      value: "Wallis and Futuna",
      label: "Wallis and Futuna, Wallisian or Futunan"
  },
  {
      value: "Western Sahara",
      label: "Sahrawi, Sahrawian, Sahraouian"
  },
  {
      value: "Yemen",
      label: "Yemeni"
  },
  {
      value: "Zambia",
      label: "Zambian"
  },
  {
      value: "Zimbabwe",
      label: "Zimbabwean"
  }
]