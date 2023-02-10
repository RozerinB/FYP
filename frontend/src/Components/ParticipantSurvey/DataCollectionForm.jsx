import React from 'react'
import Typography from '@mui/material/Typography';
import "./Survey.css"
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import SelectField from '../FormFields/SelectField.jsx';
import RadioField from '../FormFields/RadioField.jsx';
import { countries, ageList, genders, textDirectionalities, ethnicGroups, nationalities, yesOrNo, noOfDevices, deviceType, competency, languages } from './Questions';
import DataGridField from '../FormFields/DataGridField.jsx';

export default function DataCollection(props) {
  const {
    formField: {
      age,
      gender,
      preferred_writing_language,
      preferred_reading_language,
      country,
      nationality,
      nationality_from_birth,
      ethnicity,
      text_directionality,
      device_ownership_status,
      device_sharing_status,
      internet_stability,
      broadband_contract,
      age_first_used_technology,
      age_when_first_owned_device, 
      device_type_owned,
      device_access,
      competency_level,
      design_principles,
    }
  } = props;

  return (
    <div className='survey-heading'> 
        <Typography variant="h6">
        <Box sx={{ fontWeight: 'bold', m: 1, p:2 }}> Data Collection </Box>
      </Typography>
      <div className='survey-questions'> 
      <Typography variant="subtitle1">
        <Box sx={{ fontWeight: 'bold'}}> About you </Box>
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SelectField name={age.name} label={age.label} data={ageList} placeholder={age.placeholder} fullWidth />
        </Grid>
        <Grid item xs={12} >
          <SelectField name={gender.name} label={gender.label} data={genders} placeholder={gender.placeholder} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <SelectField name={preferred_writing_language.name} label={preferred_writing_language.label} data ={languages} placeholder={preferred_writing_language.placeholder} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <SelectField name={preferred_reading_language.name} label={preferred_reading_language.label} data ={languages} placeholder={preferred_reading_language.placeholder} fullWidth />
        </Grid>
        <Grid item xs={12} >
          <SelectField
            name={country.name}
            label={country.label}
            data={countries}
            placeholder={country.placeholder}
            fullWidth
          />
        </Grid> 
        <Grid item xs={12} >
          <SelectField
            name={nationality.name}
            label={nationality.label}
            data={nationalities}
            placeholder={nationality.placeholder}
            fullWidth
          />
        </Grid> 
        <Grid item xs={12} >
          <SelectField
            name={nationality_from_birth.name}
            label={nationality_from_birth.label}
            data={nationalities}
            placeholder={nationality.placeholder}
            fullWidth
          />
        </Grid> 
        <Grid item xs={12} >
          <SelectField
            name={ethnicity.name}
            label={ethnicity.label}
            data={ethnicGroups}
            placeholder={ethnicity.placeholder}
            fullWidth
          />
        </Grid> 
        <Grid item xs={12} >
          <SelectField
            name={text_directionality.name}
            label={text_directionality.label}
            data={textDirectionalities}
            placeholder={text_directionality.placeholder}
            fullWidth
          />
        </Grid> 
      </Grid>
      <Typography variant="subtitle1">
          <Box sx={{ mt: 1,fontWeight: 'bold'}}> Technology </Box>
        </Typography>
      <Grid container spacing={3}>
      <Grid item xs={12} >
          <SelectField
            name={age_first_used_technology.name}
            label={age_first_used_technology.label}
            data={ageList}
            placeholder={age_first_used_technology.placeholder}
            fullWidth
          />
        </Grid> 
        <Grid item xs={12}>
          <RadioField name={internet_stability.name} label={internet_stability.label} data = {yesOrNo} placeholder={internet_stability.placeholder} fullWidth />
        </Grid>
        <Grid item xs={12} >
          <RadioField name={broadband_contract.name} label={broadband_contract.label} data = {yesOrNo} placeholder={broadband_contract.placeholder} fullWidth />
        </Grid>
        <Grid item xs={12} >
          <RadioField
            name={competency_level.name}
            label={competency_level.label}
            data={competency}
            placeholder={competency_level.placeholder}
            fullWidth
          />
        </Grid> 
      </Grid>
      <Typography variant="subtitle1">
          <Box sx={{ mt: 1, fontWeight: 'bold'}}> Devices </Box>
      </Typography>
      <Grid container spacing={3}> 
      <Grid item xs={12} >
          <SelectField
            name={age_when_first_owned_device.name}
            label={age_when_first_owned_device.label}
            data={ageList}
            fullWidth
          />
        </Grid> 
        <Grid item xs={12} >
          <SelectField
            name={device_ownership_status.name}
            label={device_ownership_status.label}
            data={noOfDevices}
            placeholder={device_ownership_status.placeholder}
            fullWidth
          />
        </Grid> 
        <Grid item xs={12} >
          <RadioField
            name={device_sharing_status.name}
            label={device_sharing_status.label}
            data={yesOrNo}
            placeholder={device_sharing_status.placeholder}
            fullWidth
          />
        </Grid> 
        <Grid item xs={12} >
          <RadioField
            name={device_type_owned.name}
            label={device_type_owned.label}
            data={deviceType}
            placeholder={device_type_owned.placeholder}
            fullWidth
          />
        </Grid> 
        <Grid item xs={12} >
          <RadioField
            name={device_access.name}
            label={device_access.label}
            data={deviceType}
            placeholder={device_access.placeholder}
            fullWidth
          />
        </Grid> 
      </Grid>
      <Typography variant="subtitle1">
          <Box sx={{ mt: 1, fontWeight: 'bold'}}> Design Principles </Box>
        </Typography>
        <Grid container spacing={3}> 
        <Grid item xs={12} >
          <DataGridField name={design_principles.name} label={design_principles.label} data = {design_principles.principleLabel.filter((i) => i.name)}/>
          </Grid>   
        </Grid>  
    </div>
    </div>
  )
}


 