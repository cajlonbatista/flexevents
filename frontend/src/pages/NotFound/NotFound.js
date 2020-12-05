import React from 'react';

import notfoundicon from '../../global/assets/notfound.svg';

import { NotFoundContainer }from './styles'

const NotFound = () => {
  return (
    <NotFoundContainer>
      <img src={notfoundicon} alt='Not Found'/>
    </NotFoundContainer>
  );
};


export default NotFound;