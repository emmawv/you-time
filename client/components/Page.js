import PropTypes from 'prop-types';
import { createGlobalStyle } from 'styled-components';
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
    --titleFont: 'Inter', sans-serif;
    --textFont: 'Roboto', sans-serif;
  }
`;

const Page = ({ children }) => (
  <div>
    <GlobalStyles />
    <Header />
    <h1>{children}</h1>
  </div>
);

Page.propTypes = {
  children: PropTypes.any,
  // Could be an array of nodes or a single node.
};

export default Page;
