/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */

import ProductStyles from './styles/ProductStyles';
import ButtonStyles from './styles/ButtonStyles';

const Product = ({ product }) => {
  const { photo, author, title } = product;
  return (
    <ProductStyles>
      <img src={photo.image.publicUrlTransformed} alt={photo.altText} />
      <h4>{title}</h4>
      <p
        style={{
          color: 'grey',
          margin: '7px',
        }}
      >
        {author}
      </p>
      {/* <hr /> */}
      <div className="buttonList">
        <ButtonStyles>
          <a href="#">More info</a>
        </ButtonStyles>
      </div>
    </ProductStyles>
  );
};

export default Product;
