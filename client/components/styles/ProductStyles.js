import styled from 'styled-components';

const ProductStyles = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h4 {
    text-transform: uppercase;
    font-family: var(--titleFont);
  }

  /* hr {
    background-color: var(--mocha);
    opacity: 0.4;
    width: 30px;
    margin: 0 auto;
    height: 1px;
    border: none;
    z-index: -10;
  } */

  /* .buttonList {
    display: grid;
    width: 100%;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    grid-gap: 1px;

    & > * {
      font-size: 1rem;
      padding: 1rem;
    }
  }*/
`;

export default ProductStyles;
