import * as React from "react";
import { DataGrid, GridRowsProp, GridColDef } from "@mui/x-data-grid";
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';

const rows: GridRowsProp = [
  { id: 1, col1: "1st", col2: ""},
  { id: 2, col1: "2nd", col2: "" },
  { id: 3, col1: "3rd", col2: "" },
  { id: 4, col1: "4th", col2: "" },
  { id: 5, col1: "5th", col2: "" },
  { id: 6, col1: "6th", col2: "" },
  { id: 7, col1: "7th", col2: "" }
];

const columns: GridColDef[] = [
  { field: "id", hide: true },
  { field: "col1", headerName: "", width: 50},
  { field: "col2", headerName: "Principle 1: Equitable Use -  The design is useful and marketable to people with diverse abilities.", width: 150, },
  { field: "col3", headerName: "Principle 2: Flexibility in Use - The design accommodates a wide range of individual preferences and abilities.", width: 150 },
  { field: "col4", headerName: "Principle 3: Simple and Intuitive Use - Use of the design is easy to understand, regardless of the user’s experience, knowledge, language skills, or current concentration level.", width: 150 },
  { field: "col5", headerName: "Principle 4: Perceptible Information - The design communicates necessary information effectively to the user, regardless of ambient conditions or the user’s sensory abilities.", width: 150 },
  { field: "col6", headerName: "Principle 5: Tolerance for Error - The design minimizes hazards and the adverse consequences of accidental or unintended actions.", width: 150 },
  { field: "col7", headerName: "Principle 6: Low Physical Effort - The design can be used efficiently and comfortably and with a minimum of fatigue.", width: 150 },
  { field: "col8", headerName: "Principle 7: Size and Space for Approach and Use - Appropriate size and space are provided for approach, reach, manipulation, and use regardless of user’s body size, posture, or mobility.", width: 150 },
];

export default function DataGridField() {
  return (
    <div style={{ height: 500, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
    </div>
  );
}
