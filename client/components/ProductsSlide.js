import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Product from './Product';

const ALL_PRODUCTS_QUERY = gql`
  query ALL_PRODUCTS_QUERY {
    allProducts {
      id
      title
      author
      description
      price
      photo {
        id
        image {
          publicUrlTransformed
        }
        altText
      }
    }
  }
`;

const SlideStyles = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 60px;
  text-align: center;
`;

const ProductSlide = () => {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY); // useQuery returns data, errors and if it is currently loading so we destructure it.
  if (loading) return <p>Loading...</p>; // TODO: Change for loader.
  if (error) return <p>Error: {error.message}</p>;
  return (
    <SlideStyles>
      {data.allProducts.slice(0, 3).map((elm) => (
        <Product key={elm.id} product={elm} />
      ))}
      ;
    </SlideStyles>
  );
};

export default ProductSlide;
