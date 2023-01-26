import React from 'react'
import Typography from '@mui/material/Typography';
import "./Survey.css"
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import InputField from './InputField.jsx';
import SelectField from './SelectField.jsx';
import { countries, ageList, genders, textDirectionalities } from './Questions';

export default function Survey1(props) {
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
            data={countries}
            fullWidth
          />
        </Grid> 
        <Grid item xs={12} sm={6}>
          <SelectField
            name={ethnicity.name}
            label={ethnicity.label}
            data={countries}
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
        <Grid item xs={12} sm={6}>
          <SelectField name={internetStability.name} label={internetStability.label} data = {ageList} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField name={broadbandContract.name} label={broadbandContract.label} data = {genders} fullWidth />
        </Grid>
        <Grid item xs={12} sm={6}>
          <SelectField
            name={ageForTech.name}
            label={ageForTech.label}
            data={ageList}
            fullWidth
          />
        </Grid> 
        <Grid item xs={12} sm={6}>
          <SelectField
            name={competency.name}
            label={competency.label}
            data={countries}
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
            data={ageList}
            fullWidth
          />
        </Grid> 
        <Grid item xs={12} sm={6}>
          <SelectField
            name={deviceTypeOwnership.name}
            label={deviceTypeOwnership.label}
            data={ageList}
            fullWidth
          />
        </Grid> 
        <Grid item xs={12} sm={6}>
          <SelectField
            name={deviceShare.name}
            label={deviceShare.label}
            data={ageList}
            fullWidth
          />
        </Grid> 
        <Grid item xs={12} sm={6}>
          <SelectField
            name={deviceAccess.name}
            label={deviceAccess.label}
            data={ageList}
            fullWidth
          />
        </Grid> 
        <Grid item xs={12} sm={6}>
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


 