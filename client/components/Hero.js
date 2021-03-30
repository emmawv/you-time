import styled from 'styled-components';

const HeroStyles = styled.div`
  font-family: var(--textFont);
  font-size: 3em;
  width: 100vw;
  margin: 0;
  padding: 0;
  position: relative;
  text-align: center;

  &::before {
    content: ' ';
    display: block;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    min-height: 500px;
    z-index: -5;
    opacity: 0.5;
    background: url('https://res.cloudinary.com/utime/image/upload/v1614854500/UTime/kaboompics_Books_-_Coffee_-_Cinnamon_Roll_dwahl1.jpg')
      center/cover no-repeat;
  }

  section {
    z-index: 2;
    padding: 50px 0 80px;
    line-height: 60px;
  }
`;

const Hero = () => (
  <HeroStyles>
    <section>
      Make a coffee.
      <br />
      Light a candle.
      <br />
      Open a book.
      <br />
      This is your moment.
    </section>
  </HeroStyles>
);

export default Hero;
