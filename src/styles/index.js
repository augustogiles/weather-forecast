import styled from 'styled-components'

export const Title = styled.div `
  font-weight: normal;
`;

export const StyledCaroussel = styled.ul `
  display: flex;
  list-style: none;
  overflow-x: scroll;
  overflow-y: hidden;
  white-space: nowrap;
  
  height: inherit;
  margin: 0 -20px 0 -20px;

  &::-webkit-scrollbar {
    display: none;
  } 
  
  -webkit-overflow-scrolling: touch;
`