import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const Container = styled.div<ContainerProps>`
  background: var(--color-input-background);
  border: 1px solid var(--color-line-in-white);
  border-radius: 10px;
  padding: 0 1.6rem;
  width: 100%;
  color: #666360;
  display: flex;
  align-items: center;

  & + div {
    margin-top: 0.8rem;
  }

  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${(props) =>
    props.isFocused &&
    css`
      color: var(--color-primary);
      border-color: var(--color-primary);
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: var(--color-primary);
    `}

  select {
    width: 100%;
    height: 5.6rem;
    border-radius: 0.8rem;
    background: var(--color-input-background);
    border: none;
    outline: 0;
    padding: 0 1.6rem;
    font: 1.6rem Archivo;
    &::placeholder {
      color: var(--color-text-complement)
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;
  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
