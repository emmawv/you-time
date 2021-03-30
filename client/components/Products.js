/* eslint-disable react/jsx-props-no-spreading */
import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';
import Product from './Product';

// QUERY:
// gql imports graphql-tag that turns our string into a proper graphQL query.
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

const ProductsListStyles = styled.div`
  display: grid;
  grid-gap: 70px;
  text-align: center;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  padding: 0 12%;
`;

const Products = () => {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY); // useQuery returns data, errors and if it is currently loading so we destructure it.
  if (loading) return <p>Loading...</p>; // TODO: Change for loader.
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <ProductsListStyles>
        {data.allProducts.map((elm) => (
          <Product key={elm.id} product={elm} />
        ))}
      </ProductsListStyles>
    </div>
  );
};

export default Products;
