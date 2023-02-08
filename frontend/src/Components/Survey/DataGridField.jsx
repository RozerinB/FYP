import * as React from "react";
import { FormControl, FormLabel } from "@mui/material";
import RadioField from "./RadioField";
import { at } from 'lodash';
import { useField } from 'formik';

const PrincipleLabel = [
{
    name: "principle1",
    label: "Principle 1: Equitable Use -  The design is useful and marketable to people with diverse abilities.",
    guideline: ""
  },
{
    name: "principle2",
    label: "Principle 2: Flexibility in Use - The design accommodates a wide range of individual preferences and abilities.",
    guideline: ""
  },
 {
    name: "principle3",
    label: "Principle 3: Simple and Intuitive Use - Use of the design is easy to understand, regardless of the user’s experience, knowledge, language skills, or current concentration level.",
    guideline: ""
  },
 {
    name: "principle4",
    label: "Principle 4: Perceptible Information - The design communicates necessary information effectively to the user, regardless of ambient conditions or the user’s sensory abilities.",
    guideline: ""
  },
{
    name: "principle5",
    label: "Principle 5: Tolerance for Error - The design minimizes hazards and the adverse consequences of accidental or unintended actions.",
    guideline: ""
  },
{
    name: "principle6",
    label: "Principle 6: Low Physical Effort - The design can be used efficiently and comfortably and with a minimum of fatigue.",
    guideline: ""
  },
{
    name: "principle7",
    label: "Principle 7: Size and Space for Approach and Use - Appropriate size and space are provided for approach, reach, manipulation, and use regardless of user’s body size, posture, or mobility.",
    guideline: ""
  },
]
export let ranking = [];

for (let i = 1; i <= 7; i++) {
    ranking.push({ value: i.toString() , label: i.toString() });
}
export default function DataGridField(props) {
  const { label } = props;
  const [meta] = useField(props);
  const [touched, error] = at(meta, 'touched', 'error');
  const isError = touched && error && true;
  console.log('meta.error', meta)
  return (
    <FormControl error={isError}> 
    <FormLabel > {label } </FormLabel>
      {PrincipleLabel.map((item) => (
      <RadioField
          name={item.name}
          label={item.label}
          data={ranking}
          fullWidth
          sx={{m: 2}}
          row={true}
          error={meta.touched && meta.error && true}
        />
    ))}
        </FormControl>
  )
}
