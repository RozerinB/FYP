import React from 'react'
import Typography from '@mui/material/Typography';
import "./Survey.css"
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import SelectField from './SelectField.jsx';
import RadioField from './RadioField.jsx';
import { countries, ageList, genders, textDirectionalities, ethnicGroups, nationalities, yesOrNo, noOfDevices, deviceType, technicalCompetency, languages } from './Questions';
import DataGridField from './DataGridField.tsx';

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
          <SelectField name={languageToWrite.name} label={languageToWrite.label} data ={languages} placeholder={languageToWrite.placeholder} fullWidth />
        </Grid>
        <Grid item xs={12}>
          <SelectField name={languageToRead.name} label={languageToRead.label} data ={languages} placeholder={languageToRead.placeholder} fullWidth />
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
            name={ethnicity.name}
            label={ethnicity.label}
            data={ethnicGroups}
            placeholder={ethnicity.placeholder}
            fullWidth
          />
        </Grid> 
        <Grid item xs={12} >
          <SelectField
            name={textDirectionality.name}
            label={textDirectionality.label}
            data={textDirectionalities}
            placeholder={textDirectionality.placeholder}
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
            name={ageForTech.name}
            label={ageForTech.label}
            data={ageList}
            placeholder={ageForTech.placeholder}
            fullWidth
          />
        </Grid> 
        <Grid item xs={12}>
          <RadioField name={internetStability.name} label={internetStability.label} data = {yesOrNo} placeholder={internetStability.placeholder} fullWidth />
        </Grid>
        <Grid item xs={12} >
          <RadioField name={broadbandContract.name} label={broadbandContract.label} data = {yesOrNo} placeholder={broadbandContract.placeholder} fullWidth />
        </Grid>
        <Grid item xs={12} >
          <RadioField
            name={competency.label}
            data={technicalCompetency}
            label={competency.label}
            placeholder={competency.placeholder}
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
            name={ageForDevice.name}
            label={ageForDevice.label}
            data={ageList}
            fullWidth
          />
        </Grid> 
        <Grid item xs={12} >
          <SelectField
            name={deviceOwnership.name}
            label={deviceOwnership.label}
            data={noOfDevices}
            placeholder={deviceOwnership.placeholder}
            fullWidth
          />
        </Grid> 
        <Grid item xs={12} >
          <RadioField
            name={deviceShare.name}
            label={deviceShare.label}
            data={yesOrNo}
            placeholder={deviceShare.placeholder}
            fullWidth
          />
        </Grid> 
        <Grid item xs={12} >
          <RadioField
            name={deviceTypeOwnership.label}
            label={deviceTypeOwnership.label}
            data={deviceType}
            placeholder={deviceTypeOwnership.placeholder}
            fullWidth
          />
        </Grid> 
        <Grid item xs={12} >
          <RadioField
            name={deviceAccess.label}
            label={deviceAccess.label}
            data={deviceType}
            placeholder={deviceAccess.placeholder}
            fullWidth
          />
        </Grid> 
      </Grid>
      <Typography variant="subtitle1">
          <Box sx={{ mt: 1, fontWeight: 'bold'}}> Design Principles </Box>
        </Typography>
        <Grid container spacing={3}> 
        <Grid item xs={12} >
          <DataGridField />
          </Grid>   
        </Grid>  
    </div>
    </div>
  )
}


 