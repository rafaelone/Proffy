import React from 'react';

import { Container, FormHeader, Main } from './styles';
import PageHeader from '../../components/PageHeader';
import TeacherItem from '../../components/TeacherItem';

const TeacherList: React.FC = () => {
  return (
    <Container>
      <PageHeader title="Estes são os proffys disponíveis">
        <FormHeader onSubmit={() => {}}>
          <div>
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>
          <div>
            <label htmlFor="week_day">Dia da semana</label>
            <input type="text" id="week_day" />
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
