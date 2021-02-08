import PropTypes from 'prop-types';
import Header from './Header';

const Page = ({ children }) => (
  <div>
    <Header />
    <h1>{children}</h1>
  </div>
);

Page.propTypes = {
  children: PropTypes.any,
  // Could be an array of nodes or a single node.
};

export default Page;
