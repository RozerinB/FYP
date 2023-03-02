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
              title='Overview'
              text = "It is assumed that creating designs following universal design principles will “enable usability engineers to create applications that are usable by everyone regardless of their abilities” (Story, 1998). It can be argued that the integration of these principles is not always successful therefore making the design unusable by the population who don’t have the abilities. Individuals abilities to use technology can be assessed through multiple factors, including the users’ level of exposure to technology, which is associated with or varies by, location and wealth. This application will allow the data collection of the users’ level of exposure to technology and the data will be visualised to allow the user to evaluate the data and provide feedback to the researcher as well as aid the designs of UX designers."
              label='Data'
            />
            <CardItem
              title = "Participants"
              text="The main aim of this survey is to measure your exposure levels to technology depending on your location and wealth. You will be asked a set of questions about yourself, your level of access to technology and different devices, internet stability and your culture. Some of these questions will be optional and you can skip them if you wish. Once you have submitted your answers, it will be added to the database and stored securely for the system to then generate updated data visualisations for you and UX researchers to view. You will be able to provide further feedback on the data for me to evaluate the reliability and validity of the data collected.If you have any questions about the survey, please contact me at: 1905101@brunel.ac.uk. Thank you for your time and participation."
              label='Participants'
            />
            <CardItem
              title='Evaluators'
              text="To measure the aim of this project, you will be asked to evaluate the data collected and the usefulness of the data to your profession. You will be able to view the data by selecting the country you wish to view and the data will be displayed in various formats such as bar graphs, pie charts and scatter plots. You will be able to provide feedback on the data and the survey to help me improve the survey and the data collected. If you have any questions about the survey, please contact me at: 1905101@brunel.ac.uk"
              label='Evaluators'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
