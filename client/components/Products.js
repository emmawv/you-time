import { useQuery } from '@apollo/client';
import gql from 'graphql-tag';
import styled from 'styled-components';

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

const ProductsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 60px;
  text-align: center;
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;

  img {
    height: 180px;
    width: 110px;
    object-fit: cover;
    margin: 10px auto;
  }

  h4 {
    text-transform: uppercase;
  }
`;

const Products = () => {
  const { data, error, loading } = useQuery(ALL_PRODUCTS_QUERY); // useQuery returns data, errors and if it is currently loading so we destructure it.
  if (loading) return <p>Loading...</p>; // TODO: Change for loader.
  if (error) return <p>Error: {error.message}</p>;
  return (
    <div>
      <ProductsList>
        {data.allProducts.map((elm) => (
          <ProductCard key={elm.id}>
            <img
              src={elm.photo.image.publicUrlTransformed}
              alt={elm.photo.altText}
            />
            <h4>{elm.title}</h4>
            <p
              style={{
                color: 'var(--cream)',
                margin: '7px',
                fontSize: '0.8em',
              }}
            >
              {elm.author}
            </p>
            <hr
              style={{
                backgroundColor: 'var(--cream)',
                opacity: '0.4',
                width: '30px',
                margin: '0 auto',
                height: '1px',
                border: 'none',
              }}
            />
          </ProductCard>
        ))}
      </ProductsList>
    </div>
  );
};

export default Products;
