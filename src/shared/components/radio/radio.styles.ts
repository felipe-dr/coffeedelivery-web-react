import styled from 'styled-components'

export const RadioContainer = styled.label`
  padding: 1rem;
  width: 100%;
  display: flex;
  gap: 0.75rem;
  align-items: center;
  color: ${({ theme }) => theme.colors.baseText};
  font: ${({ theme }) => theme.text.buttonS};
  text-transform: uppercase;
  background-color: ${({ theme }) => theme.colors.baseButton};
  border-radius: 6px;
  border: 1px solid transparent;
  transition: all 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.baseHover};
    cursor: pointer;
  }

  &[data-state='true'] {
    background-color: ${({ theme }) => theme.colors.purpleLight};
    border-color: ${({ theme }) => theme.colors.purple};
  }

  input {
    display: none;
  }

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }
`
