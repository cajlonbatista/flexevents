import React, { useState } from 'react';

import { Provider, connect } from 'react-redux'; 
import store from '../../store/steps';

import Step from '../../components/Step/Step';

const Create = (data, dispatch) => {

  return (
    <Provider store={store}>
      <Step/>
    </Provider>
  );
};


export default Create;
