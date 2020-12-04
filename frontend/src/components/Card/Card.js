eimport React from 'react';

import { CardContainer } from './styles';

const Card = (props) => {
  const {
    data
  } = props;
  const {
    _id,
    title,
    description,
    start,
    type,
  } = data;
  
  return (
    <CardContainer to={`event/${_id}`}>
      <header>
        {
          (type === 'online')
            ?
            <span style={{ background: '#1ec998' }}>{type}</span>
            :
            <span style={{ background: '#ff5f5f' }}>{type}</span>
        }
        <span>{new Date(start).toLocaleDateString()}</span>
      </header>
      <article>
        <h1>{title}</h1>
        <p>{description}</p>
      </article>
    </CardContainer>
  );
  
};

export default Card;