import React from 'react';

import { connect } from 'react-redux';
import { toggleStep, toggleType } from "../../store/actions";

import { Radio, FormControlLabel, RadioGroup } from '@material-ui/core';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

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

const Select = ({ tipo, step, dispatch }) => {
  return (
    <SelectEvent>
      <form onSubmit={(e) => { e.preventDefault(); dispatch(toggleStep(2)) }}>
        <h1>Selecione o tipo de evento</h1>
        <ThemeProvider theme={radioTheme}>
          <RadioGroup value={tipo} onChange={(e) => dispatch(toggleType(e.target.value))}>
            <FormControlLabel value="online" control={<Radio />} label="Online" />
            <FormControlLabel value="presencial" control={<Radio />} label="Presencial" />
          </RadioGroup>
        </ThemeProvider>
        <button>Próximo</button>
      </form>
    </SelectEvent>
  );
};

export default connect(state => ({step: state.step, tipo: state.tipo }))(Select);