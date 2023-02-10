import React from 'react'
import Typography from '@mui/material/Typography';
import "./Survey.css"
import { Box } from '@mui/system';
import { Grid } from '@mui/material';
import RadioField from '../FormFields/RadioField.jsx';
import { experience, experience2, proudness, health, scale, educationAge, jobList, importanceKey, agreementKey } from './Questions';
import ListField from '../FormFields/ListField.jsx';
import SelectField from '../FormFields/SelectField';

export default function CulturalDimensions(props) {
  const {
    formField: {
        time_personal_home_life,
        respected_by_superiors,
        good_performance, 
        employment,
        pleasant_people,
        work_interesting,
        consulted_by_superiors,
        desirable_area,
        respected_by_family,
        chances_for_promotion,
        keeping_time_for_fun,
        moderation, 
        service_to_friend,
        thrift,
        nervous_tense,
        happiness,
        prevention_due_to_circumstances,
        state_of_health,
        proud_citizen,
        contradicting_superior,
        good_manager,
        persistent_efforts,
        organization_structure,
        organization_rules,
        education,
        job
    }
  } = props;

  return (
    <div className='survey-heading'> 
        <Typography variant="h6">
        <Box sx={{ fontWeight: 'bold', m: 1, p:2 }}> Data Collection </Box>
      </Typography>
      <div className='survey-questions'> 
      <Typography variant="subtitle1">
        <Box sx={{ mt: 1, fontWeight: 'bold'}}> The following fields are optional, but if you could provide more data, I would be able to provide more information within the Global Data for UX Researchers to view.</Box>
        </Typography>
      <Typography variant="subtitle1">
        <Box sx={{ mt: 1, fontWeight: 'bold'}}> Please think of an ideal job, disregarding your present job, if you have one. In choosing an ideal job, how important would it be to you to...  </Box>
        </Typography>
        <Grid container> 
        <Grid item xs={12} >
          <ListField
              data={importanceKey}
              fullWidth
              row={true}
            />
        </Grid> 
        </Grid>
        <Grid container spacing={3}> 
        <Grid item xs={12} >
        <RadioField
            name={time_personal_home_life.name}
            label={time_personal_home_life.label}
            data={scale}
            fullWidth
            row={true}
          />
          </Grid>  
        <Grid item xs={12} >
        <RadioField
            name={respected_by_superiors.name}
            label={respected_by_superiors.label}
            data={scale}
            fullWidth
            row={true}
          />
        </Grid>    
        <Grid item xs={12} >
        <RadioField
            name={good_performance.name}
            label={good_performance.label}
            data={scale}
            fullWidth
            row={true}
          />
        </Grid> 
        <Grid item xs={12} >
        <RadioField
            name={employment.name}
            label={employment.label}
            data={scale}
            fullWidth
            row={true}
          />
        </Grid> 
        <Grid item xs={12} >
        <RadioField
            name={pleasant_people.name}
            label={pleasant_people.label}
            data={scale}
            fullWidth
            row={true}
          />
        </Grid> 
        <Grid item xs={12} >
        <RadioField
            name={work_interesting.name}
            label={work_interesting.label}
            data={scale}
            fullWidth
            row={true}
          />
        </Grid> 
        <Grid item xs={12} >
        <RadioField
            name={respected_by_superiors.name}
            label={respected_by_superiors.label}
            data={scale}
            fullWidth
            row={true}
          />
        </Grid> 
        <Grid item xs={12} >
        <RadioField
            name={consulted_by_superiors.name}
            label={consulted_by_superiors.label}
            data={scale}
            fullWidth
            row={true}
          />
        </Grid> 
        <Grid item xs={12} >
        <RadioField
            name={desirable_area.name}
            label={desirable_area.label}
            data={scale}
            fullWidth
            row={true}
          />
        </Grid> 
        <Grid item xs={12} >
        <RadioField
            name={respected_by_family.name}
            label={respected_by_family.label}
            data={scale}
            fullWidth
            row={true}
          />
        </Grid> 
        <Grid item xs={12} >
        <RadioField
            name={chances_for_promotion.name}
            label={chances_for_promotion.label}
            data={scale}
            fullWidth
            row={true}
          />
        </Grid> 
        </Grid>
        <Typography variant="subtitle1">
          <Box sx={{ mt: 1, fontWeight: 'bold'}}> In your private life, how important is each of the following to you: </Box>
        </Typography>
     <Grid container spacing={3}> 
        <Grid item xs={12} >
        <RadioField
            name={keeping_time_for_fun.name}
            label={keeping_time_for_fun.label}
            data={scale}
            fullWidth
            row={true}
          />
        </Grid> 
        <Grid item xs={12} >
        <RadioField
            name={moderation.name}
            label={moderation.label}
            data={scale}
            fullWidth
            row={true}
          />
        </Grid> 
        <Grid item xs={12} >
        <RadioField
            name={moderation.name}
            label={moderation.label}
            data={scale}
            fullWidth
            row={true}
          />
        </Grid> 
        <Grid item xs={12} >
        <RadioField
            name={service_to_friend.name}
            label={service_to_friend.label}
            data={scale}
            fullWidth
            row={true}
          />
        </Grid> 
        <Grid item xs={12} >
        <RadioField
            name={thrift.name}
            label={thrift.label}
            data={scale}
            fullWidth
            row={true}
          />
        </Grid> 
            <Grid item xs={12}> 
                <SelectField
                name={nervous_tense.name}
                label={nervous_tense.label}
                data={experience}
                placeholder={nervous_tense.placeholder}
                fullWidth
                row={false}
            />
            </Grid>
            <Grid item xs={12}> 
                <SelectField
                name={happiness.name}
                label={happiness.label}
                data={experience}
                placeholder={happiness.placeholder}
                fullWidth
                row={false}
            />
            </Grid>
            <Grid item xs={12}> 
                <SelectField
                name={prevention_due_to_circumstances.name}
                label={prevention_due_to_circumstances.label}
                data={experience2}
                placeholder={prevention_due_to_circumstances.placeholder}
                fullWidth
                row={false}
            />
            </Grid>
            <Grid item xs={12}> 
                <SelectField
                name={state_of_health.name}
                label={state_of_health.label}
                data={health}
                placeholder={state_of_health.placeholder}
                fullWidth
                row={false}
            />
            </Grid>
            <Grid item xs={12}> 
                <SelectField
                name={proud_citizen.name}
                label={proud_citizen.label}
                data={proudness}
                placeholder={proud_citizen.placeholder}
                fullWidth
                row={false}
            />
            </Grid>
            <Grid item xs={12}> 
                <SelectField
                name={contradicting_superior.name}
                label={contradicting_superior.label}
                data={experience}
                placeholder={contradicting_superior.placeholder}
                fullWidth
                row={false}
                />
            </Grid>
        </Grid>  
        <Typography variant="subtitle1">
          <Box sx={{ mt: 1, fontWeight: 'bold'}}> To what extent do you agree or disagree with each of the following statements?</Box>
        </Typography>
        <Grid container> 
        <Grid item xs={12} >
          <ListField
              data={agreementKey}
              fullWidth
              row={true}
            />
        </Grid> 
        </Grid>
        <Grid container spacing={3}>
            <Grid item xs={12} >
            <RadioField
                name={good_manager.name}
                label={good_manager.label}
                data={scale}
                fullWidth
                row={true}
                />
            </Grid>
            <Grid item xs={12} >
            <RadioField
                name={persistent_efforts.name}
                label={persistent_efforts.label}
                data={scale}
                fullWidth
                row={true}
                />
            </Grid>
            <Grid item xs={12} >
            <RadioField
                name={organization_structure.name}
                label={organization_structure.label}
                data={scale}
                fullWidth
                row={true}
                />
            </Grid>
            <Grid item xs={12} >
            <RadioField
                name={organization_rules.name}
                label={organization_rules.label}
                data={scale}
                fullWidth
                row={true}
                />
            </Grid>     
        </Grid>
        <Grid container spacing={3}>
        <Grid item xs={12} >
            <SelectField
                name={education.name}
                label={education.label}
                data={educationAge}
                placeholder={education.placeholder}
                fullWidth
                row={false}
                />
        </Grid>   
        <Grid item xs={12} >
            <SelectField
                name={job.name}
                label={job.label}
                data={jobList}
                placeholder={job.placeholder}
                fullWidth
                row={false}
                />
        </Grid>   
        </Grid>
    </div>
    </div>
  )
}


 