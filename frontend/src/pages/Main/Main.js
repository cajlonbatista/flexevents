import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { IconButton } from '@material-ui/core';
import { Search } from '@material-ui/icons';
import { SemipolarLoading } from 'react-loadingg';

import Card from '../../components/Card/Card';

import { MainContainer } from './styles';

export default function Main() {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState('/api/event/all');
  const [tag, setTag] = useState('');
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (filter === 'todos') {
      setUrl('/api/event/all');
    } else if (filter === 'online') {
      setUrl('/api/onevent/search');
    } else if (filter === 'presenciais') {
      setUrl('/api/prevent/search');
    }
    if (tag !== '') {
      setLoading(true);
      axios.get(`${process.env.REACT_APP_EVENT}${url}/${tag}`)
        .then(res => {
          setData([...res.data]);
          setLoading(false);
        }).catch(err => {
          console.log(err);
          setLoading(false);
        });
    } else {
      setLoading(true);
      axios.get(`${process.env.REACT_APP_EVENT}/api/event/all`)
        .then(res => {
          setData([...res.data]);
          setLoading(false);
        }).catch(err => {
          console.log(err);
          setLoading(false);
        });
    }
  }, [url, tag, filter]);

  return (
    <MainContainer>
      <article>
        <div>
          <h1>Meus eventos</h1>
          <select onChange={e => setFilter(e.target.value)}>
            <option>todos</option>
            <option>online</option>
            <option>presenciais</option>
          </select>
        </div>
        <div>
          <input placeholder='Pesquisar' value={tag} onChange={e => setTag(e.target.value.toString())}></input>
          <IconButton type='submit'>
            <Search />
          </IconButton>
        </div>
      </article>
      <section>
        {
          (loading === false)
            ?
            <article>
              {
                data.map(item => (
                  <Card key={item._id} data={item}/>
                ))
              }
            </article>
            :
            <SemipolarLoading  color='#FF5F5F' size='small'/>
        }
      </section>
    </MainContainer>
  );
};