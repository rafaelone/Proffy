import React, { useRef, useCallback, useState } from 'react';

import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import { Container, Main, InputBlock, ScheduleItem } from './styles';
import { FiUser, FiLink2, FiBook } from 'react-icons/fi';
import { FaWhatsapp, FaRegMoneyBillAlt, FaCalendarWeek } from 'react-icons/fa';
import { MdSchedule } from 'react-icons/md';
import warningIcon from '../../assets/images/icons/warning.svg';

import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/TextArea';
import Select from '../../components/Select';
import api from '../../services/api';

interface ClassFormData {
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
  subject: string;
  cost: string;
}

const PageTeacherForm: React.FC = () => {
  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '', to: '' },
  ]);
  const formRef = useRef<FormHandles>(null);

  const addNewScheduleItem = useCallback(() => {
    setScheduleItems([...scheduleItems, { week_day: 0, from: '', to: '' }]);
  }, [scheduleItems]);

  const setScheduleItemValue = useCallback(
    (position: number, field: string, value: string) => {
      const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
        if (index === position) {
          return { ...scheduleItem, [field]: value };
        }
        return scheduleItem;
      });
      setScheduleItems(updatedScheduleItems);
    },
    [scheduleItems]
  );

  const handleSubmit = useCallback(
    (data: ClassFormData) => {
      api
        .post('classes', {
          name: data.name,
          avatar: data.avatar,
          whatsapp: data.whatsapp,
          bio: data.bio,
          subject: data.subject,
          cost: Number(data.cost),
          schedule: scheduleItems,
        })
        .then(() => {
          alert('Cadastro realizado com sucesso!');
        })
        .catch(() => {
          alert('Erro no cadastro');
        });
    },
    [scheduleItems]
  );

  return (
    <Container>
      <PageHeader
        title="Que incrível que você quer dar aulas."
        description="O primeiro passo é preencher esse formulário de inscrição"
      />
      <Main>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <fieldset>
            <legend>Seus dados</legend>

            <InputBlock>
              <Input
                name="name"
                type="text"
                icon={FiUser}
                placeholder="Nome Completo"
              />
            </InputBlock>
            <InputBlock>
              <Input
                name="avatar"
                type="text"
                icon={FiLink2}
                placeholder="Avatar"
              />
            </InputBlock>
            <InputBlock>
              <Input
                name="whatsapp"
                type="text"
                icon={FaWhatsapp}
                placeholder="Whatsapp"
              />
            </InputBlock>
            <InputBlock id="bio">
              <Textarea name="bio" placeholder="Biografia" />
            </InputBlock>
          </fieldset>
          <fieldset>
            <legend>Sobre a aula</legend>
            <InputBlock id="subject">
              <Select
                name="subject"
                options={[
                  { value: 'Artes', label: 'Artes' },
                  { value: 'Biologia', label: 'Biologia' },
                  { value: 'Ciências', label: 'Ciências' },
                  { value: 'Educação Física', label: 'Educação Física' },
                  { value: 'Física', label: 'Física' },
                  { value: 'Geografia', label: 'Geografia' },
                  { value: 'História', label: 'História' },
                  { value: 'Matemática', label: 'Matemática' },
                  { value: 'Português', label: 'Português' },
                  { value: 'Química', label: 'Química' },
                ]}
                icon={FiBook}
                placeholder="Matéria"
              />
            </InputBlock>
            <InputBlock>
              <Input
                name="cost"
                type="text"
                icon={FaRegMoneyBillAlt}
                placeholder="Custo"
              />
            </InputBlock>
          </fieldset>
          <fieldset>
            <legend>
              Horários disponíveis
              <button type="button" onClick={addNewScheduleItem}>
                + Novo horário
              </button>
            </legend>
            {scheduleItems.map((scheduleItem, index) => (
              <ScheduleItem key={scheduleItem.week_day}>
                <Select
                  name="week_day"
                  onChange={(e) =>
                    setScheduleItemValue(index, 'week_day', e.target.value)
                  }
                  value={scheduleItem.week_day}
                  options={[
                    { value: '0', label: 'Domingo' },
                    { value: '1', label: 'Segunda-feira' },
                    { value: '2', label: 'Terça-feira' },
                    { value: '3', label: 'Quarta-feira' },
                    { value: '4', label: 'Quinta-feira' },
                    { value: '5', label: 'Sexta-feira' },
                    { value: '6', label: 'Sábado' },
                  ]}
                  icon={FaCalendarWeek}
                  placeholder="Matéria"
                />
                <Input
                  onChange={(e) =>
                    setScheduleItemValue(index, 'from', e.target.value)
                  }
                  value={scheduleItem.from}
                  name="from"
                  type="time"
                  icon={MdSchedule}
                  placeholder="Das"
                />
                <Input
                  onChange={(e) =>
                    setScheduleItemValue(index, 'to', e.target.value)
                  }
                  value={scheduleItem.to}
                  name="to"
                  type="time"
                  icon={MdSchedule}
                  placeholder="Até"
                />
              </ScheduleItem>
            ))}
          </fieldset>
          <footer>
            <p>
              <img src={warningIcon} alt="Aviso importante" />
              Importante! <br />
              Preencha todos os dados
            </p>
            <button type="submit">Salvar cadastro</button>
          </footer>
        </Form>
      </Main>
    </Container>
  );
};

export default PageTeacherForm;
