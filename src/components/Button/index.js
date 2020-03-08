import styled from 'styled-components'

export const Button = styled.button`
  box-sizing: border-box;
  padding: 20px 52px;
  margin: 0 20px;
  max-height: 60px;
  min-width: 180px;
  
  font-size: 16px;
  font-weight: bold;
  
  border-radius: 8px;
  border-style: none;
  outline: none;
  cursor: pointer;

  border-color: #FFFFFF ;
  background: ${props => (props.selected ? '#DDDDDD' : '#FFFFFF')};
  border-width: 2px;

  box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.20);

  transition-property: box-shadow margin-top filter;
  transition-duration: .2s;

  &:hover {
    background-color: #DDDDDD;
    margin-top: 5px;
    margin-bottom: 0px;
    box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.20);
  }

  &:hover:active {
    background-color: #F0F0F0;
    margin-top: 5px;
    margin-bottom: 0px;
    box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.20);
  }
`;