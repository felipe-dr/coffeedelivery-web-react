import styled from 'styled-components'

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`

export const Input = styled.input`
  padding: 0.75rem;
  width: 100%;
  font: ${(props) => props.theme.text.s};
  color: ${(props) => props.theme.colors.baseText};
  background: ${(props) => props.theme.colors.baseInput};
  border: 1px solid ${(props) => props.theme.colors.baseButton};
  border-radius: 4px;
  transition: border-color 0.2s;

  &::placeholder {
    color: ${(props) => props.theme.colors.baseLabel};
  }

  &:focus {
    border-color: ${(props) => props.theme.colors.yellowDark};
  }
`

export const InputOptionalLabel = styled.span`
  padding: 0.75rem;
  position: absolute;
  right: 0;
  font-size: 0.75rem;
  font-style: italic;
  color: ${(props) => props.theme.colors.baseLabel};
`
