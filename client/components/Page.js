import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
  }

  html {
    --mocha: 171, 143, 120;
    --cream: 209, 192, 178;
    --turquoise: 120, 163, 171;
    --darkTurquoise: 40, 65, 69;
    --lightGray: 208, 204, 195;
    --darkGray: 122,108,95;
    --brown: 94, 74, 57;
    --bs: 5px 5px 24px 0 rgba(0, 0, 0, 0.09);
    --maxWidth: 100vw;
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
  letter-spacing: 1px;
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
