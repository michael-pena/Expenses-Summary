import React from "react";
import { styled } from "@mui/material/styles";
import TextField from "@mui/material/TextField";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import CardBoxContainer from "../UI/CardBoxContainer";
import Box from "@mui/material/Box";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Input from "@mui/material/Input";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const FileUploader = () => {
  const [value, setValue] = React.useState(new Date());

  const FormSection = styled(Box)({
    marginTop: "1rem",
    border: "1px solid grey",
    paddingBottom: "1rem",
    display: "inline-block",
    padding: "1rem",
    borderRadius: "12px",
    ".form-element": {
      marginTop: "3rem",
    },
  });

  return (
    <CardBoxContainer>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography variant="h6">Upload New CSV Statement File</Typography>
        </AccordionSummary> 
        <AccordionDetails>
        <form>
          <FormSection>
            <div className="form-element">
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  views={["year", "month"]}
                  label="Year and Month"
                  minDate={new Date("2012-03-01")}
                  maxDate={new Date("2023-06-01")}
                  value={value}
                  onChange={(newValue) => {
                    setValue(newValue);
                  }}
                  renderInput={(params) => (
                    <TextField {...params} helperText={null} />
                  )}
                />
              </LocalizationProvider>
            </div>
            <div className="form-element">
              <Input type="file" accept=".csv" id="contained-button-file" />
            </div>
            <div className="form-element">
              <input type="submit" value="Submit"></input>
            </div>
          </FormSection>
        </form>
        </AccordionDetails>   
      </Accordion>
    </CardBoxContainer>
  );
};

export default FileUploader;
