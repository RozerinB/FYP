import React from 'react'
import Typography from '@mui/material/Typography';
import "./Survey.css"
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import InputField from './InputField.jsx';
import SelectField from './SelectField.jsx';
import RadioField from './RadioField.jsx';
import { countries, ageList, genders, textDirectionalities, ethnicGroups, nationalities, yesOrNo, noOfDevices, deviceType, technicalCompetency } from './Questions';

export default function DataCollection(props) {
  const {
    formField: {
      age,
      gender,
      languageToWrite,
      languageToRead,
      country,
      nationality,
      ethnicity,
      textDirectionality,
      deviceOwnership,
      deviceShare,
      internetStability,
      broadbandContract,
      ageForTech,
      ageForDevice, 
      deviceTypeOwnership,
      deviceAccess,
      competency,
      designPrinciples,
    }
  } = props;
  return (
    <div className='survey-heading'> 
        <Typography variant="subtitle1">
        <Box sx={{ fontWeight: 'bold', m: 1, p:2 }}> Data Collection </Box>
      </Typography>
      <div className='survey-questions'> 
      <Typography variant="subtitle1">
        <Box sx={{ fontWeight: 'bold', m: 1}}> About you </Box>
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <SelectField name={age.name} label={age.label} data = {ageList} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField name={gender.name} label={gender.label} data = {genders} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={languageToWrite.name} label={languageToWrite.label} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <InputField name={languageToRead.name} label={languageToRead.label} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={country.name}
            label={country.label}
            data={countries}
            fullWidth
          />
        </Grid> 
        <Grid item xs={12} sm={6}>
          <SelectField
            name={nationality.name}
            label={nationality.label}
            data={nationalities}
            fullWidth
          />
        </Grid> 
        <Grid item xs={12} sm={6}>
          <SelectField
            name={ethnicity.name}
            label={ethnicity.label}
            data={ethnicGroups}
            fullWidth
          />
        </Grid> 
        <Grid item xs={12} sm={6}>
          <SelectField
            name={textDirectionality.name}
            label={textDirectionality.label}
            data={textDirectionalities}
            fullWidth
          />
        </Grid> 
      </Grid>
      <Typography variant="subtitle1">
          <Box sx={{ fontWeight: 'bold', m: 1}}> Technology </Box>
        </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <SelectField name={internetStability.name} label={internetStability.label} data = {yesOrNo} fullWidth />
        </Grid>
        <Grid item xs={12} >
          <SelectField name={broadbandContract.name} label={broadbandContract.label} data = {yesOrNo} fullWidth />
        </Grid>
        <Grid item xs={12} >
          <SelectField
            name={ageForTech.name}
            label={ageForTech.label}
            data={ageList}
            fullWidth
          />
        </Grid> 
        <Grid item xs={12} >
          <RadioField
            name={competency.label}
            data={technicalCompetency}
            label={competency.label}
            fullWidth
          />
        </Grid> 
      </Grid>
      <Typography variant="subtitle1">
          <Box sx={{ fontWeight: 'bold', m: 1}}> Devices </Box>
      </Typography>
      <Grid container spacing={3}> 
      <Grid item xs={12} sm={6}>
          <SelectField
            name={ageForDevice.name}
            label={ageForDevice.label}
            data={ageList}
            fullWidth
          />
        </Grid> 
        <Grid item xs={12} sm={6}>
          <SelectField
            name={deviceOwnership.name}
            label={deviceOwnership.label}
            data={noOfDevices}
            fullWidth
          />
        </Grid> 
        <Grid item xs={12} >
          <RadioField
            name={deviceTypeOwnership.label}
            label={deviceTypeOwnership.label}
            data={deviceType}
            fullWidth
          />
        </Grid> 
        <Grid item xs={12} >
          <SelectField
            name={deviceShare.name}
            label={deviceShare.label}
            data={yesOrNo}
            fullWidth
          />
        </Grid> 
        <Grid item xs={12} >
          <RadioField
            name={deviceAccess.label}
            label={deviceAccess.label}
            data={deviceType}
            fullWidth
          />
        </Grid> 
        <Grid item xs={12} >
          <SelectField
            name={designPrinciples.name}
            label={designPrinciples.label}
            data={ageList}
            fullWidth
          />
        </Grid> 
       
      </Grid>
    </div>
    </div>
  )
}


 