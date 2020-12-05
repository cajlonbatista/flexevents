import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { Menu, MenuItem, Dialog, AppBar, IconButton, Toolbar, Chip } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import PhoneInput from 'react-phone-number-input';
import { Close } from '@material-ui/icons';
import { message, Spin } from 'antd';

import moreicon from '../../global/assets/more.svg';
import addicon from "../../global/assets/add.svg";

import { FormContainer, FormBox, FormDuoBox, SubmitButton } from '../Form/styles';
import { poupTheme, chipTheme, dialogTheme } from '../../themes/themes';
import { CardContainer, DialogContent } from './styles';

const Card = (props) => {

  const {
    data
  } = props;
  var {
    _id,
    title,
    description,
    start,
    type,
    edition,
    address,
    number,
    cep,
    telephone
  } = data;

  const [endereco, setEndereco] = useState({});
  const [poup, setPoup] = useState(null);
  const [dialog, setDialog] = useState(false);

  const [deleted, setDeleted] = useState(false);

  const [loading, setLoading] = useState(false);


  const [rtitle, setTitle] = useState(title);
  const [rdescription, setDescription] = useState(description);
  const [rstart, setStart] = useState(start);
  const [redition, setEdition] = useState(edition);
  const [raddress, setAddress] = useState(address);
  const [rcep, setCep] = useState(cep);
  const [rtelephone, setTelephone] = useState(telephone);
  const [rnumber, setNumber] = useState(number);
  const [tag, setTag] = useState('');
  const [tags, setTags] = useState([]);

  useEffect(() => {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', `http://cep.la/${cep}`, true);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = function () {
      if ((xhr.readyState == 0 || xhr.readyState == 4) && xhr.status == 200)
        setEndereco(JSON.parse(xhr.responseText));
    }
    xhr.send(null);
  }, []);

  const poupClose = () => {
    setPoup(null);
  }

  const poupOpen = (e) => {
    setPoup(e.currentTarget);
  }

  const dialogClose = () => {
    setDialog(false);
  };

  const dialogOpen = () => {
    setDialog(true);
  };

  const addTags = () => {
    var validate = "";
    for (const j of tag) {
      if (j !== " ") {
        validate += j;
      }
    }
    if (validate !== "") {
      tags.push(tag.toLocaleLowerCase());
      setTags([...tags]);
      setTag("");
    }
  };

  const onDestroy = (e) => {
    var url = '';
    if (type === 'online') {
      url = '/api/onevent'
    } else {
      url = '/api/prevent'
    }
    axios.delete(`${process.env.REACT_APP_EVENT}${url}/${_id}`)
      .then(res => {
        message.success('Evento apagado com sucesso !');
        setDeleted(true);
      }).catch(err => {
        message.error('Error ao apagar evento !');
      })
  }

  const onRefresh = (e) => {
    e.preventDefault();
    var url = '';
    if (type === 'online') {
      url = '/api/onevent'
    } else {
      url = '/api/prevent'
    }
    if (tags.length === 0) {
      message.warn('Adicione as tags !');
    } else {
      setLoading(true);
      axios.put(`${process.env.REACT_APP_EVENT}${url}/${_id}`, {
        title: rtitle,
        start: rstart,
        address: raddress,
        description: rdescription,
        cep: rcep,
        number: rnumber,
        edition: redition,
        telephone: rtelephone,
        status: 'active',
        type,
        tags
      }).then(res => {
        console.log(res.data);
        message.success('Evento editado com sucesso !');
        setLoading(false);
        dialogClose();
        window.location.reload();
      }).catch(err => {
        console.log(err);
      })
    }
  }

  if (deleted === false) {
    return (
      <CardContainer>
        <header>
          {
            (type === 'online')
              ?
              <div style={{ background: '#31e0ab' }} onClick={poupOpen}>
                <img src={moreicon} width='20px' alt='more' />
              </div>
              :
              <div style={{ background: '#ff5f5f' }} onClick={poupOpen}>
                <img src={moreicon} width='20px' alt='more' />
              </div>
          }
          <span> {new Date(start).toLocaleDateString()} {new Date(start).toLocaleTimeString()}</span>
        </header>
        <article>
          <div>
            <h1>{title}</h1>
            {
              (type === 'online')
                ?
                <p style={{ textTransform: 'capitalize' }} onClick={poupOpen}>
                  {edition}º Edição {type}
                </p>
                :
                <p style={{ textTransform: 'capitalize' }}>
                  {edition}º Edição {type}
                </p>
            }
            <p>Contato: {telephone}</p>
            {
              (type === 'online')
                ?
                <span>Local: <a href={address} rel='noreferrer' target='_blank'>{address}</a></span>
                :
                <span>Local: {(endereco.logradouro == undefined) ? <i>Endereço Inválido</i> : `${endereco.logradouro}, ${endereco.bairro}, ${endereco.cidade}-${endereco.uf}, N ${number}`}</span>
            }
          </div>
          <p>{description}</p>
        </article>
        <ThemeProvider theme={poupTheme}>
          <Menu
            anchorEl={poup}
            keepMounted
            open={Boolean(poup)}
            onClose={poupClose}
          >
            <MenuItem onClick={() => {
              poupClose();
              dialogOpen();
            }} >Editar</MenuItem>
            <MenuItem onClick={() => {
              poupClose();
              onDestroy();
            }} >Apagar</MenuItem>
          </Menu>
        </ThemeProvider>
        <ThemeProvider theme={dialogTheme}>
          <Dialog style={{ zIndex: 13 }} fullScreen open={dialog} onClose={dialogClose}>
            <AppBar style={{boxShadow: "none"}}>
              <Toolbar>
                <IconButton edge="start" color="inherit" onClick={dialogClose} aria-label="close">
                  <Close />
                </IconButton>
            </Toolbar>
            </AppBar>
            <DialogContent>
              <FormContainer>
                <ThemeProvider theme={chipTheme}>
                  <form onSubmit={onRefresh}>
                    <Spin spinning={loading}>
                      <FormBox>
                        <label htmlFor='title'>Título</label>
                        <input required type='text' value={rtitle} name='title' onChange={e => setTitle(e.target.value)} />
                      </FormBox>
                      <FormBox>
                        <label htmlFor='description'>Descrição</label>
                        <textarea required value={rdescription} onChange={e => setDescription(e.target.value)} name='description' />
                      </FormBox>
                      <FormBox>
                        <label htmlFor='edition'>Edição</label>
                        <input required type='number' value={redition} min='1' onChange={e => setEdition(e.target.value)} name='edition' />
                      </FormBox>
                      <FormDuoBox>
                        <div>
                          <label htmlFor='start'>Horário de Início</label>
                          <input required type='datetime-local' value={rstart} onChange={e => setStart(e.target.value)} name='start' />
                        </div>
                        <div>
                          <label htmlFor='telephone'>Telefone</label>
                          <PhoneInput required value={rtelephone} onChange={setTelephone} name='telephone' />
                        </div>
                      </FormDuoBox>

                      {
                        (type === 'online')
                          ?
                          <FormBox>
                            <label htmlFor='address'>Endereço Online</label>
                            <input required type='text' value={raddress} onChange={e => setAddress(e.target.value)} name='address' />
                          </FormBox>
                          :
                          <FormDuoBox>
                            <div>
                              <label htmlFor='cep'>CEP</label>
                              <input required type='number' min='1' value={rcep} onChange={e => setCep(e.target.value)} name='cep' />
                            </div>
                            <div>
                              <label htmlFor='number'>Número</label>
                              <input required type='number' min='1' value={rnumber} onChange={e => setNumber(e.target.value)} name='number' />
                            </div>
                          </FormDuoBox>
                      }

                      <section>
                        <article>
                          <label htmlFor="tags">Tags</label>
                          <div>
                            <input
                              name="tags"
                              title="Coloque tags para facilitar na busca do evento"
                              autoComplete="off"
                              value={tag}
                              onKeyDown={e => (e.key === 'Enter') ? addTags : console.log(e)}
                              onChange={(e) => {
                                setTag(e.target.value);
                              }}
                            />
                            <IconButton type='button' title="Adicionar tag" onClick={addTags}>
                              <img src={addicon} alt='Adicionar tag' />
                            </IconButton>
                          </div>
                        </article>

                        <article>
                          {tags.map((tag) => (
                            <Chip
                              color="primary"
                              onDelete={(e) => {
                                tags.splice(tags.indexOf(tag), 1);
                                setTags([...tags]);
                              }}
                              key={tag}
                              label={tag}
                            />
                          ))}
                        </article>
                      </section>
                      <SubmitButton>Atualizar evento</SubmitButton>
                    </Spin>
                  </form>
                </ThemeProvider>
              </FormContainer>
            </DialogContent>
          </Dialog>
        </ThemeProvider>
      </CardContainer>
    );
  } else {
    return (
      <></>
    );
  }
};

export default Card;