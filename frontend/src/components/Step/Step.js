import React from 'react';

import { connect } from 'react-redux';

import FormOnline from '../../components/Form/Form';
import Select from '../../components/Select/Select';

const Step = ({ step, dispatch }) => {
  if (step === 1) {
    return (
      <Select />
    );
  } else {
    return (
      <FormOnline />
    );
 }
};

export default connect(state => ({ step: state.step, tipo: state.tipo }))(Step);