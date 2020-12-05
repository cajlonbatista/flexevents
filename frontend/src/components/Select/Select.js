import React from 'react';

import { connect } from 'react-redux';
import { toggleStep, toggleType } from "../../store/actions";

import { Radio, FormControlLabel, RadioGroup } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';

import { radioTheme }  from '../../themes/themes';
import { SelectEvent } from './styles';


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