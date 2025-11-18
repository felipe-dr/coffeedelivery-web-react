import styled, { css } from 'styled-components'

export type ButtonVariants = {
  variant?: 'primary' | 'secondary' | 'icon'
}

const buttonModifiers = {
  primary: css`
    padding: 0.75rem 2.813rem;
    font: ${(props) => props.theme.text.buttonG};
    color: ${(props) => props.theme.colors.white};
    background: ${(props) => props.theme.colors.yellow};

    &:hover {
      background: ${(props) => props.theme.colors.yellowDark};
    }
  `,
  secondary: css`
    padding: 0 0.5rem;
    font: ${(props) => props.theme.text.buttonS};
    color: ${(props) => props.theme.colors.baseText};
    background: ${(props) => props.theme.colors.baseButton};

    & > svg {
      color: ${(props) => props.theme.colors.purple};
    }

    &:hover {
      color: ${(props) => props.theme.colors.baseSubtitle};
      background: ${(props) => props.theme.colors.baseHover};
    }
  `,
  icon: css`
    padding: 0.5rem;
    color: ${(props) => props.theme.colors.baseCard};
    background: ${(props) => props.theme.colors.purpleDark};

    & > svg {
      width: 1.375rem;
      height: 1.375rem;
    }

    &:hover {
      background: ${(props) => props.theme.colors.purple};
    }
  `,
}

export const Button = styled.button<ButtonVariants>`
  ${({ variant }) => css`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 0.25rem;
    text-transform: uppercase;
    border: 0;
    border-radius: 6px;
    cursor: pointer;
    transition: background-color 0.1s;

    ${!!variant && buttonModifiers[variant]};
  `}

  :disabled {
    cursor: not-allowed;
    opacity: 0.4;
  }
`
