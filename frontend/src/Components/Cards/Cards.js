import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              title = "Data Collection"
              text="The main aim of this survey is to measure your exposure levels to technology depending on your location and wealth. You will be asked a set of questions about yourself, your level of access to technology and different devices, internet stability and your culture. Some of these questions will be optional and you can skip them if you wish. If you have any questions about the survey, please contact me at: 1905101@brunel.ac.uk "
              label='Info'
              //path='/survey'
            />
            <CardItem
              title='Automated Data Report'
              text="This report will be generated automatically based on your answers to the survey. It will show you the results of your survey and the data that you have collected. You will be able to provide further feedback on the report and you will be able to view the global data collected by other users."
              label='Survey'
            />
            <CardItem
              title='Global Data'
              text = "The Global Data collected will then be displayed to you and UX Designers for them to analyse and use for their research. It will enable them to potentially make informed decisions and be able to connect with participants globally without language barriers and time-zone related problems."
              label='Data'
              //path='/data'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
