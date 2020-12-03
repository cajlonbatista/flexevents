import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import { HeaderContainer } from './styles';

import addicon from '../../global/assets/add.svg';
import feedicon from '../../global/assets/feed.svg';
import logoicon from '../../global/assets/logo.svg';

export default function Header(props) {
  const location = useLocation();

  const menu = [
    {
      path: '/',
      title: 'Events',
      icon: feedicon,
    },
    {
      path: '/add',
      title: 'Create',
      icon: addicon,
    },
  ]

  return (
    <HeaderContainer>
      <div>
        <img src={logoicon} alt='Your Events'/>
        Your Events
      </div>
      <article>

      </article>
      <div>
        {
          menu.map(item => (
            <>
              {
                (item.path === location.pathname)
                  ?
                  <Link to={item.path}>
                    <img src={item.icon} alt={item.title} style={{ background: '#FF5F5F'}}/>
                  </Link>
                  :
                  <Link to={item.path}>
                    <img src={item.icon} alt={item.title} />
                  </Link>
              }
            </>
          ))
        }
      </div>
    </HeaderContainer>
  );
};
