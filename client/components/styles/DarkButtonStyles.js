import styled from 'styled-components';

const DarkButtonStyles = styled.button`
  border: 1px solid rgb(var(--turquoise));
  font-family: var(--titleFont);
  font-size: 0.8em;
  z-index: -10;
  transition: all 0.5s;
  background-color: white;
  margin-top: 5px;

  a {
    display: inline-block;
    color: rgb(var(--turquoise));
    transition: all 0.5s;
    padding: 10px 20px;
  }

  & :hover {
    background-color: rgb(var(--turquoise));
    a {
      color: white;
    }
  }

  &[disabled] {
    opacity: 0.5;
  }
`;

export default DarkButtonStyles;
