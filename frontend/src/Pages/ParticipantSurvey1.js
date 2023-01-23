import React from 'react'
import HorizontalNonLinearStepper from '../Components/Stepper/Stepper';
import "../Components/Survey/Survey.css"

function ParticipantSurvey1() {
  return (
    <div className='survey-container'>
        <div className='sidebar'> </div>
        <div className='survey'> 
        {HorizontalNonLinearStepper(['About you', 'Technology', 'Internet', 'Devices', 'Universal Design Principles', 'Culture'])}
        <form>

        </form>
      </div>
      
      
    </div>
  )
}

export default ParticipantSurvey1
