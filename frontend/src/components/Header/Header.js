import React, { useState } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { IconButton, SwipeableDrawer, List, ListItem } from '@material-ui/core';

import addicon from '../../global/assets/add.svg';
import feedicon from '../../global/assets/feed.svg';
import logoicon from '../../global/assets/logo.svg';
import MenuIcon from '@material-ui/icons/Menu';

import { HeaderContainer, ItemDrawer } from './styles';

export default function Header() {
  const location = useLocation();

  const [open, setOpen] = useState(false);

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

  const offDrawer = () => {
    setOpen(false);
  }
  const onDrawer = () => {
    setOpen(true);
  }

  return (
    <HeaderContainer>
      <Link to='/'>
        <img src={logoicon} alt='Your Events' />
        <span>Flex Events</span>
      </Link>
      <article>
        <IconButton onClick={onDrawer}>
          <MenuIcon style={{ color: 'white', fontSize: 30 }}></MenuIcon>
        </IconButton>
      </article>
      <SwipeableDrawer anchor='right' open={open} onClose={offDrawer} onOpen={onDrawer}>
        <List style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
          {
            menu.map(item => (
              <div key={item.path} style={{ width: 200 }}>
                {
                  (item.path === location.pathname)
                    ?
                    <ListItem button style={{ background: '#ff5f5f' }}  onClick={offDrawer}>
                      <ItemDrawer to={item.path} >
                        <img src={item.icon} alt={item.title} />
                        <span>{item.title}</span>
                      </ItemDrawer>
                    </ListItem>
                    :
                    <ListItem button onClick={offDrawer}>
                      <ItemDrawer to={item.path}>
                        <img src={item.icon} alt={item.title} />
                        <span>{item.title}</span>
                      </ItemDrawer>
                    </ListItem>
                }
              </div>
            ))
          }
        </List>
      </SwipeableDrawer>
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
