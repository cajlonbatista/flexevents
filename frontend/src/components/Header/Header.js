import React from 'react';

import { Link, useLocation } from 'react-router-dom';

import { IconButton } from '@material-ui/core';

import { HeaderContainer } from './styles';

import addicon from '../../global/assets/add.svg';
import feedicon from '../../global/assets/feed.svg';
import logoicon from '../../global/assets/logo.svg';
import MenuIcon from '@material-ui/icons/Menu';

export default function Header() {
  const location = useLocation();

  const menu = [
    {
      path: '/',
      title: 'Eventos',
      icon: feedicon,
    },
    {
      path: '/add',
      title: 'Criar',
      icon: addicon,
    },
  ]

  return (
    <HeaderContainer>
      <Link to='/'>
        <img src={logoicon} alt='Your Events' />
        <span>Flex Events</span>
      </Link>
      <article>
        <IconButton>
          <MenuIcon style={{color: 'white'}}></MenuIcon>
        </IconButton>
      </article>
      <div>
        {
          menu.map(item => (
            <div key={item.path}>
              {
                (item.path === location.pathname)
                  ?
                  <Link to={item.path} style={{ background: '#FFFFFF' }}>
                    <img src={item.icon} alt={item.title} />
                    <span>{item.title}</span>
                  </Link>
                  :
                  <Link to={item.path}>
                    <img src={item.icon} alt={item.title} />
                    <span>{item.title}</span>
                  </Link>
              }
            </div>
          ))
        }
      </div>
    </HeaderContainer>
  );
};
