import Link from 'next/link';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

const NavbarStyles = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 5px 10px;
  color: rgb(var(--darkGray));
  font-family: var(--titleFont);
  position: fixed;
  width: 100%;
  border-bottom: 1px solid rgba(var(--brown), 0.1);
  z-index: 50;
  font-family: var(--titleFont);

  a {
    color: rgb(var(--darkGray), 0.7);
    text-decoration: none;
    padding: 15px 5px;
    margin: 0 5px;
    display: inline-block;

    transition: all 0.3s;
  }

  a:hover {
    color: rgb(var(--darkGray));
    position: relative;
  }

  a:hover:after {
    content: ' ';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    border-bottom: 1.9px solid rgb(var(--darkGray));
    height: 80%;

    animation: underline 0.5s 1;
    animation-fill-mode: forwards;
    animation-timing-function: ease-out;
  }

  @keyframes underline {
    from {
      width: 0;
    }
    to {
      width: 87%;
    }
  }

  h2 {
    text-transform: uppercase;
    padding: 0;
    margin: 0 15px;
    display: inline-block;
  }

  .sub-bar {
    display: inline-block;
    width: 250px;
    border: 1px solid rgb(var(--darkGray), 0.7);
    border-radius: 15px;
    color: black;
    margin: 0 10px;
    text-align: left;
    background: rgb(var(--darkGray), 0.7);

    @media (max-width: 700px) {
      width: 150px;
    }
  }

  .sub-bar p {
    padding: 5px 10px;
    margin: 0;
    font-family: var(--textFont);
    color: white;
  }

  .sections {
    min-width: 70vw;
    flex-grow: 1;
    text-align: right;
    flex-shrink: 0;
  }
`;

const Nav = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    document.addEventListener('scroll', function () {
      if (document.scrollingElement.scrollTop >= 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    });
  }, [scroll]);

  return (
    <NavbarStyles
      style={{
        backgroundColor: scroll ? 'rgba(255, 255, 255, 0.95)' : 'transparent',
      }}
    >
      <Link href="/">
        <h2>UTime</h2>
      </Link>
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
};

export default Nav;
