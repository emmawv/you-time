/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/prop-types */

import Link from 'next/link';
import ProductStyles from './styles/ProductStyles';
import ButtonStyles from './styles/DarkButtonStyles';
import PriceTag from './styles/PriceTag';
import ImageStyles from './styles/ImageStyles';
import formatMoney from '../lib/formatMoney';

const Product = ({ product }) => {
  const { photo, author, title, id, price } = product;
  return (
    <ProductStyles>
      <ImageStyles>
        <img src={photo?.image?.publicUrlTransformed} alt={photo.altText} />
        <PriceTag>{formatMoney(price)}</PriceTag>
      </ImageStyles>
      <h4>{title}</h4>
      <p
        style={{
          color: 'grey',
          margin: '7px',
        }}
      >
        {author}
      </p>
      <div className="buttonList">
        <ButtonStyles>
          <Link href="/products/{id}">
            <a href="#">More info</a>
          </Link>
        </ButtonStyles>
      </div>
    </ProductStyles>
  );
};

export default Product;
