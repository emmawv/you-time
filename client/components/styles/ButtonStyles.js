import styled from 'styled-components';

const ButtonStyles = styled.button`
  border: 1px solid var(--turquoise);
  color: var(--turquoise);
  font-family: var(--titleFont);
  font-size: 0.8em;
  z-index: -10;
  transition: all 0.5s;
  background-color: white;
  margin-top: 5px;

  a {
    display: inline-block;
    color: var(--turquoise);
    transition: all 0.5s;
    padding: 10px 20px;
  }

  & :hover {
    background-color: var(--turquoise);
    a {
      color: white;
    }
  }

  &[disabled] {
    opacity: 0.5;
  }
`;

export default ButtonStyles;
