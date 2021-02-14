import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import Header from './Header';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300&family=Roboto:wght@100&display=swap');

  * {
    margin: 0;
  }

  html {
    --mocha: #8c5c4a;
    --cream: #d99e89;
    --brown: #40251b;
    --turquoise: #208C77;
    --darkTurquoise: #1b4039;
    --bs: 0 12px 24px 0 rgba(0, 0, 0, 0.09);
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
  padding: 2rem;
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
