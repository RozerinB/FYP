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

export const languages = [
        {
            value: "ab",
            label: "Abkhaz"
        },
        {
            value: "aa",
            label: "Afar"
        },
        {
            value: "af",
            label: "Afrikaans"
        },
        {
            value: "ak",
            label: "Akan"
        },
        {
            value: "sq",
            label: "Albanian"
        },
        {
            value: "am",
            label: "Amharic"
        },
        {
            value: "ar",
            label: "Arabic"
        },
        {
            value: "an",
            label: "Aragonese"
        },
        {
            value: "hy",
            label: "Armenian"
        },
        {
            value: "as",
            label: "Assamese"
        },
        {
            value: "av",
            label: "Avaric"
        },
        {
            value: "ae",
            label: "Avestan"
        },
        {
            value: "ay",
            label: "Aymara"
        },
        {
            value: "az",
            label: "Azerbaijani"
        },
        {
            value: "bm",
            label: "Bambara"
        },
        {
            value: "ba",
            label: "Bashkir"
        },
        {
            value: "eu",
            label: "Basque"
        },
        {
            value: "be",
            label: "Belarusian"
        },
        {
            value: "bn",
            label: "Bengali"
        },
        {
            value: "bh",
            label: "Bihari"
        },
        {
            value: "bi",
            label: "Bislama"
        },
        {
            value: "bs",
            label: "Bosnian"
        },
        {
            value: "br",
            label: "Breton"
        },
        {
            value: "bg",
            label: "Bulgarian"
        },
        {
            value: "my",
            label: "Burmese"
        },
        {
            value: "ca",
            label: "Catalan; Valencian"
        },
        {
            value: "ch",
            label: "Chamorro"
        },
        {
            value: "ce",
            label: "Chechen"
        },
        {
            value: "ny",
            label: "Chichewa; Chewa; Nyanja"
        },
        {
            value: "zh",
            label: "Chinese"
        },
        {
            value: "cv",
            label: "Chuvash"
        },
        {
            value: "kw",
            label: "Cornish"
        },
        {
            value: "co",
            label: "Corsican"
        },
        {
            value: "cr",
            label: "Cree"
        },
        {
            value: "hr",
            label: "Croatian"
        },
        {
            value: "cs",
            label: "Czech"
        },
        {
            value: "da",
            label: "Danish"
        },
        {
            value: "dv",
            label: "Divehi; Dhivehi; Maldivian;"
        },
        {
            value: "nl",
            label: "Dutch"
        },
        {
            value: "en",
            label: "English"
        },
        {
            value: "eo",
            label: "Esperanto"
        },
        {
            value: "et",
            label: "Estonian"
        },
        {
            value: "ee",
            label: "Ewe"
        },
        {
            value: "fo",
            label: "Faroese"
        },
        {
            value: "fj",
            label: "Fijian"
        },
        {
            value: "fi",
            label: "Finnish"
        },
        {
            value: "fr",
            label: "French"
        },
        {
            value: "ff",
            label: "Fula; Fulah; Pulaar; Pular"
        },
        {
            value: "gl",
            label: "Galician"
        },
        {
            value: "ka",
            label: "Georgian"
        },
        {
            value: "de",
            label: "German"
        },
        {
            value: "el",
            label: "Greek, Modern"
        },
        {
            value: "gn",
            label: "Guaraní"
        },
        {
            value: "gu",
            label: "Gujarati"
        },
        {
            value: "ht",
            label: "Haitian; Haitian Creole"
        },
        {
            value: "ha",
            label: "Hausa"
        },
        {
            value: "he",
            label: "Hebrew (modern)"
        },
        {
            value: "hz",
            label: "Herero"
        },
        {
            value: "hi",
            label: "Hindi"
        },
        {
            value: "ho",
            label: "Hiri Motu"
        },
        {
            value: "hu",
            label: "Hungarian"
        },
        {
            value: "ia",
            label: "Interlingua"
        },
        {
            value: "id",
            label: "Indonesian"
        },
        {
            value: "ie",
            label: "Interlingue"
        },
        {
            value: "ga",
            label: "Irish"
        },
        {
            value: "ig",
            label: "Igbo"
        },
        {
            value: "ik",
            label: "Inupiaq"
        },
        {
            value: "io",
            label: "Ido"
        },
        {
            value: "is",
            label: "Icelandic"
        },
        {
            value: "it",
            label: "Italian"
        },
        {
            value: "iu",
            label: "Inuktitut"
        },
        {
            value: "ja",
            label: "Japanese"
        },
        {
            value: "jv",
            label: "Javanese"
        },
        {
            value: "kl",
            label: "Kalaallisut, Greenlandic"
        },
        {
            value: "kn",
            label: "Kannada"
        },
        {
            value: "kr",
            label: "Kanuri"
        },
        {
            value: "ks",
            label: "Kashmiri"
        },
        {
            value: "kk",
            label: "Kazakh"
        },
        {
            value: "km",
            label: "Khmer"
        },
        {
            value: "ki",
            label: "Kikuyu, Gikuyu"
        },
        {
            value: "rw",
            label: "Kinyarwanda"
        },
        {
            value: "ky",
            label: "Kirghiz, Kyrgyz"
        },
        {
            value: "kv",
            label: "Komi"
        },
        {
            value: "kg",
            label: "Kongo"
        },
        {
            value: "ko",
            label: "Korean"
        },
        {
            value: "ku",
            label: "Kurdish"
        },
        {
            value: "kj",
            label: "Kwanyama, Kuanyama"
        },
        {
            value: "la",
            label: "Latin"
        },
        {
            value: "lb",
            label: "Luxembourgish, Letzeburgesch"
        },
        {
            value: "lg",
            label: "Luganda"
        },
        {
            value: "li",
            label: "Limburgish, Limburgan, Limburger"
        },
        {
            value: "ln",
            label: "Lingala"
        },
        {
            value: "lo",
            label: "Lao"
        },
        {
            value: "lt",
            label: "Lithuanian"
        },
        {
            value: "lu",
            label: "Luba-Katanga"
        },
        {
            value: "lv",
            label: "Latvian"
        },
        {
            value: "gv",
            label: "Manx"
        },
        {
            value: "mk",
            label: "Macedonian"
        },
        {
            value: "mg",
            label: "Malagasy"
        },
        {
            value: "ms",
            label: "Malay"
        },
        {
            value: "ml",
            label: "Malayalam"
        },
        {
            value: "mt",
            label: "Maltese"
        },
        {
            value: "mi",
            label: "Māori"
        },
        {
            value: "mr",
            label: "Marathi (Marāṭhī)"
        },
        {
            value: "mh",
            label: "Marshallese"
        },
        {
            value: "mn",
            label: "Mongolian"
        },
        {
            value: "na",
            label: "Nauru"
        },
        {
            value: "nv",
            label: "Navajo, Navaho"
        },
        {
            value: "nb",
            label: "Norwegian Bokmål"
        },
        {
            value: "nd",
            label: "North Ndebele"
        },
        {
            value: "ne",
            label: "Nepali"
        },
        {
            value: "ng",
            label: "Ndonga"
        },
        {
            value: "nn",
            label: "Norwegian Nynorsk"
        },
        {
            value: "no",
            label: "Norwegian"
        },
        {
            value: "ii",
            label: "Nuosu"
        },
        {
            value: "nr",
            label: "South Ndebele"
        },
        {
            value: "oc",
            label: "Occitan"
        },
        {
            value: "oj",
            label: "Ojibwe, Ojibwa"
        },
        {
            value: "cu",
            label: "Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic"
        },
        {
            value: "om",
            label: "Oromo"
        },
        {
            value: "or",
            label: "Oriya"
        },
        {
            value: "os",
            label: "Ossetian, Ossetic"
        },
        {
            value: "pa",
            label: "Panjabi, Punjabi"
        },
        {
            value: "pi",
            label: "Pāli"
        },
        {
            value: "fa",
            label: "Persian"
        },
        {
            value: "pl",
            label: "Polish"
        },
        {
            value: "ps",
            label: "Pashto, Pushto"
        },
        {
            value: "pt",
            label: "Portuguese"
        },
        {
            value: "qu",
            label: "Quechua"
        },
        {
            value: "rm",
            label: "Romansh"
        },
        {
            value: "rn",
            label: "Kirundi"
        },
        {
            value: "ro",
            label: "Romanian, Moldavian, Moldovan"
        },
        {
            value: "ru",
            label: "Russian"
        },
        {
            value: "sa",
            label: "Sanskrit (Saṁskṛta)"
        },
        {
            value: "sc",
            label: "Sardinian"
        },
        {
            value: "sd",
            label: "Sindhi"
        },
        {
            value: "se",
            label: "Northern Sami"
        },
        {
            value: "sm",
            label: "Samoan"
        },
        {
            value: "sg",
            label: "Sango"
        },
        {
            value: "sr",
            label: "Serbian"
        },
        {
            value: "gd",
            label: "Scottish Gaelic; Gaelic"
        },
        {
            value: "sn",
            label: "Shona"
        },
        {
            value: "si",
            label: "Sinhala, Sinhalese"
        },
        {
            value: "sk",
            label: "Slovak"
        },
        {
            value: "sl",
            label: "Slovene"
        },
        {
            value: "so",
            label: "Somali"
        },
        {
            value: "st",
            label: "Southern Sotho"
        },
        {
            value: "es",
            label: "Spanish; Castilian"
        },
        {
            value: "su",
            label: "Sundanese"
        },
        {
            value: "sw",
            label: "Swahili"
        },
        {
            value: "ss",
            label: "Swati"
        },
        {
            value: "sv",
            label: "Swedish"
        },
        {
            value: "ta",
            label: "Tamil"
        },
        {
            value: "te",
            label: "Telugu"
        },
        {
            value: "tg",
            label: "Tajik"
        },
        {
            value: "th",
            label: "Thai"
        },
        {
            value: "ti",
            label: "Tigrinya"
        },
        {
            value: "bo",
            label: "Tibetan Standard, Tibetan, Central"
        },
        {
            value: "tk",
            label: "Turkmen"
        },
        {
            value: "tl",
            label: "Tagalog"
        },
        {
            value: "tn",
            label: "Tswana"
        },
        {
            value: "to",
            label: "Tonga (Tonga Islands)"
        },
        {
            value: "tr",
            label: "Turkish"
        },
        {
            value: "ts",
            label: "Tsonga"
        },
        {
            value: "tt",
            label: "Tatar"
        },
        {
            value: "tw",
            label: "Twi"
        },
        {
            value: "ty",
            label: "Tahitian"
        },
        {
            value: "ug",
            label: "Uighur, Uyghur"
        },
        {
            value: "uk",
            label: "Ukrainian"
        },
        {
            value: "ur",
            label: "Urdu"
        },
        {
            value: "uz",
            label: "Uzbek"
        },
        {
            value: "ve",
            label: "Venda"
        },
        {
            value: "vi",
            label: "Vietnamese"
        },
        {
            value: "vo",
            label: "Volapük"
        },
        {
            value: "wa",
            label: "Walloon"
        },
        {
            value: "cy",
            label: "Welsh"
        },
        {
            value: "wo",
            label: "Wolof"
        },
        {
            value: "fy",
            label: "Western Frisian"
        },
        {
            value: "xh",
            label: "Xhosa"
        },
        {
            value: "yi",
            label: "Yiddish"
        },
        {
            value: "yo",
            label: "Yoruba"
        },
        {
            value: "za",
            label: "Zhuang, Chuang"
        }
    ]
