import styled from 'styled-components'

export const Title = styled.div `
  font-weight: normal;
`;

export const StyledCaroussel = styled.div `
  width: 100%;

  .container {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    
    overflow-x: auto;
    &::-webkit-scrollbar {
      display: none;
    } 
  }
`