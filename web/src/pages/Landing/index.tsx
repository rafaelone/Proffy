import React from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Content,
  Proffy,
  HeroImage,
  ButtonsContainer,
} from './styles';

import LogoImg from '../../assets/images/logo.svg';
import LandingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIco from '../../assets/images/icons/purple-heart.svg';

const Landing: React.FC = () => {
  return (
    <Container>
      <Content>
        <Proffy>
          <img src={LogoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online.</h2>
        </Proffy>
        <HeroImage src={LandingImg} alt="Plataforma de estudos" />
        <ButtonsContainer>
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar" /> Estudar
          </Link>
          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas" /> Dar aulas
          </Link>
        </ButtonsContainer>
        <span>
          Total de 200 conexões já realizadas{' '}
          <img src={purpleHeartIco} alt="Coração roxo" />
        </span>
      </Content>
    </Container>
  );
};

export default Landing;
