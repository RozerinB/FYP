import React from 'react'
import Typography from '@mui/material/Typography';
import "./Survey.css"
import { Box } from '@mui/system';
import { Grid, Tooltip, IconButton } from '@mui/material';
import SelectField from '../FormFields/SelectField.jsx';
import RadioField from '../FormFields/RadioField.jsx';
import { countries, ageList, genders, textDirectionalities, ethnicGroups, nationalities, yesOrNo, noOfDevices, deviceType, competency, languages, technologyAge } from './Questions';
import DataGridField from '../FormFields/DataGridField.jsx';
import FormCheckBox from '../FormFields/FormCheckBox.jsx';
import InfoIcon from '@mui/icons-material/Info';
import cookie from "react-cookies";

export default function DataCollection(props) {
  const {
    formField: {
      age,
      gender,
      preferred_writing_language,
      preferred_reading_language,
      country,
      nationality,
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
      <Typography variant="caption">
        <Box sx={{ pl:5 }}> *Please note that if you close the tab, all the data you have inputted will be lost </Box>
      </Typography>
      <div className='survey-questions'> 
        <Grid container>
          <Grid item xs={11}>
            <Typography variant="subtitle1">
              <Box sx={{ fontWeight: 'bold'}}> About you </Box>
            </Typography>
          </Grid>
          <Grid item xs="auto">
            <Tooltip title="Through examining demographic factors such as age, gender, nationality, ethnicity, and more, this section will allow for the identification of how these variables can influence technology user experiences. With this knowledge, Usability Engineers can develop designs that are culturally sensitive and considerate of diverse age groups, genders, and ethnicities, thus catering to a global audience.">
              <IconButton>
                <InfoIcon />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
        <input
        type="hidden"
        value={cookie.load("csrftoken")}
        name="csrfmiddlewaretoken"
        />
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
      <Grid container sx={{mt: 1}}>
        <Grid item xs={11}>
          <Typography variant="subtitle1">
            <Box sx={{ mt: 1,fontWeight: 'bold'}}> Technology </Box>
          </Typography>
        </Grid>
        <Grid item xs="auto">
          <Tooltip title="By analyzing the age at which individuals first use technology and their level of internet access, this section will facilitate drawing conclusions about how exposure to technology can be evaluated. This information can be leveraged to investigate the relationship between the age at which technology was first introduced and individuals' proficiency levels, enabling Usability Engineers to develop an offline-first strategy in areas with unreliable internet access.">
            <IconButton>
              <InfoIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
      <Grid item xs={12} >
          <SelectField
            name={age_first_used_technology.name}
            label={age_first_used_technology.label}
            data={technologyAge}
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
      <Grid container sx={{mt: 1}}>
        <Grid item xs={11}>
          <Typography variant="subtitle1">
            <Box sx={{ mt: 1, fontWeight: 'bold'}}> Devices </Box>
          </Typography>
        </Grid>
        <Grid item xs="auto">
          <Tooltip title="Gathering data about the types of devices users possess and have access to can aid in designing tailored interfaces for specific locations and devices. By examining demographic information such as age, gender, and location, we can further deduce the number of devices owned by users. Such insights can assist in creating user-centric designs that cater to the device preferences of specific demographics.">
            <IconButton>
              <InfoIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid container spacing={3}> 
      <Grid item xs={12} >
          <SelectField
            name={age_when_first_owned_device.name}
            label={age_when_first_owned_device.label}
            data={technologyAge}
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
          <FormCheckBox
            name={device_type_owned.name}
            label={device_type_owned.label}
            fieldName="device_type_owned"
            data={deviceType}
            placeholder={device_type_owned.placeholder}
            fullWidth
          />
        </Grid> 
        <Grid item xs={12} >
          <FormCheckBox
            name={device_access.name}
            label={device_access.label}
            fieldName="device_access"
            data={deviceType}
            placeholder={device_access.placeholder}
            fullWidth
          />
        </Grid> 
      </Grid>
      <Grid container sx={{mt: 1}}>
        <Grid item xs={11}>
        <Typography variant="subtitle1">
          <Box sx={{ mt: 1, fontWeight: 'bold'}}> Design Principles </Box>
        </Typography>
        </Grid>
        <Grid item xs="auto">
          <Tooltip title="Connell et al. (1997) pointed out that universal design strives to create products and environments that are accessible to all individuals, including those with varying device types and cultural backgrounds, without requiring any specialized design modifications. The seven principles of universal design are listed below, and comprehending their significance may assist Usability Engineers in developing designs that cater to specific demographic groups.">
            <IconButton>
              <InfoIcon />
            </IconButton>
          </Tooltip>
        </Grid>
      </Grid>
      <Grid container spacing={3}> 
        <Grid item xs={12} >
          <DataGridField name={design_principles.name} label={design_principles.label} data = {design_principles.principleLabel.filter((i) => i.name)}/>
          </Grid>   
       </Grid>  
    </div>
    </div>
  )
}


 