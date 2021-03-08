import styled from 'styled-components';
import Hero from '../components/Hero';
import ProductsSlide from '../components/ProductsSlide';
import LightButtonStyles from '../components/styles/LightButtonStyles';

const SectionStyles = styled.div`
  text-align: center;

  & > section {
    padding: 50px 100px 0;
  }

  hr {
    width: 70px;
    margin: 20px auto;
    height: 1.5px;
    background: rgba(var(--mocha));
    border-style: none;
  }

  .fav {
    background-color: white;
  }

  .browse {
    background: rgb(var(--mocha));
    color: white;
    min-height: 200px;

    h2 {
      margin-bottom: 15px;
    }

    a {
      font-size: 1.2em;
    }
  }

  .reviews {
    min-height: 200px;
    padding-top: 100px;
  }
`;

const HomePage = () => (
  <>
    <Hero />
    <SectionStyles>
      <section className="fav">
        <h2>Our favourites of the month</h2>
        <hr />
        <ProductsSlide />
      </section>
      <section className="browse">
        <h2>Prefer to choose yourself?</h2>
        <LightButtonStyles>
          <a href="/products">Browse all books</a>
        </LightButtonStyles>
      </section>
      <section className="reviews">
        <h2>Need some text here</h2>
      </section>
    </SectionStyles>
  </>
);

export default HomePage;
