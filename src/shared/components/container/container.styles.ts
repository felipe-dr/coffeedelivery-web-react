import styled from 'styled-components'

export const Container = styled.div`
  margin: 0 auto;
  max-width: ${(props) => props.theme.grid.container};
  padding-right: ${(props) => props.theme.grid.gutter};
  padding-left: ${(props) => props.theme.grid.gutter};
`
