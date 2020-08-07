import React, { useRef } from 'react';

import { Container, FormHeader, Main } from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';
import Select from '../../components/Select';
import { FiBook } from 'react-icons/fi';
import { FaCalendarWeek } from 'react-icons/fa';
import { FormHandles } from '@unform/core';

const TeacherList: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  return (
    <Container>
      <PageHeader title="Estes são os proffys disponíveis">
        <FormHeader ref={formRef} onSubmit={() => {}}>
          <div>
            <label htmlFor="week_day">Dia da semana</label>
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
              icon={FaCalendarWeek}
              placeholder="Matéria"
            />
          </div>
          <div>
            <label htmlFor="week_day">Dia da semana</label>
            <Select
              name="week_day"
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
          </div>
          <div>
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </FormHeader>
      </PageHeader>
      <Main>
        <TeacherItem />
      </Main>
    </Container>
  );
};

export default TeacherList;
