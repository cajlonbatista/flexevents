import React, { useEffect, useState } from 'react';

import axios from 'axios';
import isValidCep from '@brazilian-utils/is-valid-cep';
import { connect } from 'react-redux';
import { toggleStep } from "../../store/actions";

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { Chip, IconButton } from "@material-ui/core";
import PhoneInput from 'react-phone-number-input';
import { message, Spin } from "antd";

import addicon from "../../global/assets/add.svg";
import backicon from '../../global/assets/back.svg';

import { FormContainer, FormBox, FormDuoBox, SubmitButton } from './styles';
import 'react-phone-number-input/style.css';

const chipTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF5F5F",
      contrastText: "#303030",
    },
  },
  typography: {
    fontFamily: [
      'Inter'
    ].join(','),
    fontSize: 14
  },
});


const FormOnline = ({ type, step, dispatch }) => {
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [telephone, setTelephone] = useState();
  const [address, setAddress] = useState('');
  const [start, setStart] = useState();
  const [tag, setTag] = useState("");
  const [tags, setTags] = useState([]);
  const [edition, setEdition] = useState(1);
  const [cep, setCep] = useState(0);
  const [number, setNumber] = useState(0);
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState('/api/onevent');

  useEffect(() => {
    if (type === 'presencial') {
      setUrl('/api/prevent');
    }
  }, [type]);

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

  const onAddEnvent = (e) => {
    e.preventDefault();
    const cepvalidator = isValidCep(cep);

    if (telephone === false) {
      message.warn('Telefone incorreto !');
    } else if(tags.length === 0) {
      message.warn('Adicione as tags do evento !');
    } else if (type === 'prensencial' && cepvalidator === false) {
      message.warn('CEP incorreto !');
    }else {
      setLoading(true);
      axios.post(`${process.env.REACT_APP_EVENT}${url}`,
        {
          title,
          description,
          address,
          telephone,
          start,
          cep,
          number,
          tags,
          edition,
          status: 'active',
          type
        }  
      ).then(res => {
        setLoading(false);

        setTitle('');
        setDescription('');
        setTags([]);
        setEdition(1);
        setTelephone();
        setAddress('');
        setStart('');
        setCep(0);
        setNumber(0);

        message.success('Evento criado com sucesso !')
      }).catch(err => {
        console.log(err.message);
        setLoading(false);
      })
    }
      
  } 

  return (
    <FormContainer>
      <ThemeProvider theme={chipTheme}>
        <header>
          <div>
            <img src={backicon} alt='Voltar' onClick={e => dispatch(toggleStep(1)) }/>
          </div>
          <h1>Dados do Envento</h1>
        </header>

        <form onSubmit={onAddEnvent}>
          <Spin spinning={loading}>
            <FormBox>
              <label htmlFor='title'>Título</label>
              <input required type='text' value={title} name='title' onChange={e => setTitle(e.target.value)}/>
            </FormBox>
            <FormBox>
              <label htmlFor='description'>Descrição</label>
              <textarea required value={description} onChange={e => setDescription(e.target.value)} name='description'/>
            </FormBox>
            <FormBox>
              <label htmlFor='edition'>Edição</label>
              <input required type='number' value={edition} min='1' onChange={e => setEdition(e.target.value)} name='edition' />
            </FormBox>
            <FormDuoBox>
              <div>
                <label htmlFor='start'>Horário de Início</label>
                <input required type='datetime-local' value={start} onChange={e => setStart(e.target.value)} name='start'/>
              </div>
              <div>
                <label htmlFor='telephone'>Telefone</label>
                <PhoneInput required value={telephone} onChange={setTelephone} name='telephone' />
              </div>
            </FormDuoBox>

            {
              (type === 'online')
                ?
                <FormBox>
                  <label htmlFor='address'>Endereço Online</label>
                  <input required type='text' value={address} onChange={e => setAddress(e.target.value)} name='address' />
                </FormBox>
                :
                <FormDuoBox>
                  <div>
                    <label htmlFor='cep'>CEP</label>
                    <input required type='number' value={cep} onChange={e => setCep(e.target.value)} name='cep' />
                  </div>
                  <div>
                    <label htmlFor='number'>Número</label>
                    <input required type='number' value={number} onChange={e => setNumber(e.target.value)} name='number' />
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

            <SubmitButton>Criar evento</SubmitButton>
          </Spin>
        </form>
      </ThemeProvider>
    </FormContainer>
  );
};

export default connect(state => ({ step: state.step, type: state.tipo }))(FormOnline);