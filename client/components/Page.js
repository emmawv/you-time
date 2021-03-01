import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
  }

  html {
    --mocha: #A6837B;
    --cream: #F2D3CB;
    --brown: #593F39;
    --turquoise: #7BA696;
    --darkTurquoise: #30594A;
    --bs: 5px 5px 24px 0 rgba(0, 0, 0, 0.09);
    --maxWidth: 1000px;
    --titleFont: 'Inter',--apple-system, BlinkMacSystemFont, 'Segoe UI',Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetice Neue', sans-serif;
    --textFont: 'Roboto', --apple-system, BlinkMacSystemFont, 'Segoe UI',Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetice Neue', sans-serif;
    box-sizing: border-box;
    font-family: var(--textFont);
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  a {
    text-decoration: none;
  }

  button {
    font-family: var(--titleFont);
  }
`;

const InnerStyles = styled.div`
  max-width: var(--maxWidth);
  margin: 0 auto;
  padding: 100px 2rem;
`;

const Page = ({ children }) => (
  <div>
    <GlobalStyles />
    <Header />
    <InnerStyles>{children}</InnerStyles>
  </div>
);

Page.propTypes = {
  children: PropTypes.any,
  // Could be an array of nodes or a single node.
};

export default Page;
