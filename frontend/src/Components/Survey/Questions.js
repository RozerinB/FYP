import countryList from 'react-select-country-list'

export const countries = countryList().getData()

export let ageList = [];

for (let i = 18; i <= 90; i++) {
    ageList.push({ value: i.toString() , label: i.toString() });
}

export const genders = [
  {
    value: '1',
    label: 'Female'
  }, 
  {
    value: '2',
    label: 'Male'
  }, 
  {
    value: '3',
    label: 'Transgender Female'
  }, 
  {
    value: '4',
    label: 'Transgender Male'
  }, 
  {
    value: '5',
    label: 'Gender Variant / Non-Conforming'
  }, 
  {
    value: '6',
    label: 'Not Listed'
  }, 
  {
    value: '7',
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
]