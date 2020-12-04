import React, { useState } from 'react';

import { Radio, FormControlLabel, RadioGroup } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import FormOnline from '../../components/Form/Form';

import { SelectEvent } from './styles';

const radioTheme = createMuiTheme({
  palette: {
    secondary: {
      main: '#FF5F5F',
    },
  },
  typography: {
    fontFamily: [
      'Inter'
    ].join(','),
    fontSize: 12.5
  },

});


export default function Create() {
  const [step, setStep] = useState(1);
  const [type, setType] = useState('online');

  const handleSelect = (e) => {
    setType(e.target.value);
  };

  if (step === 1) {
    return (
      <SelectEvent>
        <form onSubmit={(e) => { e.preventDefault(); setStep(2); }}>
          <h1>Selecione o tipo de evento</h1>
          <ThemeProvider theme={radioTheme}>
            <RadioGroup value={type} onChange={handleSelect}>
              <FormControlLabel value="online" control={<Radio />} label="Online" />
              <FormControlLabel value="presencial" control={<Radio />} label="Presencial" />
            </RadioGroup>
          </ThemeProvider>
          <button>Próximo</button>
        </form>
      </SelectEvent>
    );
  } else {
    return (
      <FormOnline type={type}/>
    );
  }

};