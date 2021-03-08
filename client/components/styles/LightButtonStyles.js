import styled from 'styled-components';

const LightButtonStyles = styled.button`
  border: 1px solid rgba(255, 255, 255, 0.7);
  font-family: var(--titleFont);
  font-size: 0.8em;
  z-index: -10;
  transition: all 0.5s;
  background-color: rgba(255, 255, 255, 0.7);
  margin-top: 5px;

  a {
    display: inline-block;
    color: rgb(var(--darkGray));
    transition: all 0.5s;
    padding: 10px 20px;
  }

  & :hover {
    background-color: white;
    border: 1px solid white;
  }
`;

export default LightButtonStyles;
