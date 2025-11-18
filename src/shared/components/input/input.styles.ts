import styled from 'styled-components'

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`

export const InputLabelContainer = styled.label`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.baseInput};
  border: 1px solid ${({ theme }) => theme.colors.baseButton};
  border-radius: 4px;
  transition: border-color 0.2s;

  &[data-state='focused'] {
    border-color: ${({ theme }) => theme.colors.yellowDark};
  }

  &[data-state='blurred'] {
    border-color: ${({ theme }) => theme.colors.baseButton};
  }
`

export const Input = styled.input`
  padding: 0.75rem;
  width: 100%;
  font: ${(props) => props.theme.text.s};
  color: ${(props) => props.theme.colors.baseText};
  background: transparent;
  border: none;

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

export const InputErrorMesage = styled.p`
  margin-top: 0.375rem;
  font: ${(props) => props.theme.text.xs};
  font-weight: 400;
  color: red;
`
