import styled from 'styled-components'

export const InputNumberWrapper = styled.div`
  width: max-content;
  display: flex;
  align-items: center;
  gap: 4px;
  font: ${(props) => props.theme.text.m};
  font-weight: 400;
  color: ${(props) => props.theme.colors.baseTitle};
  background: ${(props) => props.theme.colors.baseButton};
  border-radius: 6px;
`

export const InputNumberBaseButton = styled.button`
  display: flex;
  padding: 0.5rem;
  color: ${(props) => props.theme.colors.purple};
  background: transparent;
  border-radius: 6px;
  border: 0;
  cursor: pointer;
  transition: color 0.1s;

  &:hover {
    color: ${(props) => props.theme.colors.purpleDark};
  }
`
