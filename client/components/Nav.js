import Link from 'next/link';
import styled from 'styled-components';

const NavbarStyles = styled.nav`
  background: var(--mocha);
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 5px 10px;
  color: white;
  font-family: var(--titleFont);

  a {
    color: rgb(255, 255, 255, 0.7);
    text-decoration: none;
    padding: 15px 5px;
    margin: 0 5px;
    display: inline-block;

    transition: all 0.3s;
  }

  a:hover {
    color: white;
  }

  h2 {
    text-transform: uppercase;
    padding: 0;
    margin: 0;
    display: inline-block;
  }

  .sub-bar {
    display: inline-block;
    min-width: 40%;
    flex-grow: 1;
    border: 1px solid white;
    border-radius: 5px;
    background: white;
    color: black;
    margin: 0 10px;
    text-align: left;
  }

  .sub-bar p {
    padding: 5px 10px;
    margin: 0;
    font-family: var(--textFont);
    color: grey;
  }

  .sections {
    flex-basis: 80%;
    text-align: right;
  }
`;

const Nav = () => (
  <NavbarStyles>
    <div>
      <Link href="/">
        <h2>UTime</h2>
      </Link>
    </div>
    <div className="sections">
      <div className="sub-bar">
        <p>Search...</p>
      </div>
      <Link href="/products">Products</Link>
      <Link href="/sell">Sell</Link>
      <Link href="/orders">Orders</Link>
      <Link href="/account">Account</Link>
    </div>
  </NavbarStyles>
);

export default Nav;
