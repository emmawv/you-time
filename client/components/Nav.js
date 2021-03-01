import Link from 'next/link';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';

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
  position: fixed;
  width: 100%;

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
    margin: 0 15px;
    display: inline-block;
  }

  .sub-bar {
    display: inline-block;
    min-width: 40%;
    flex-grow: 1;
    border: 1px solid rgb(255, 255, 255, 0.3);
    border-radius: 5px;
    color: black;
    margin: 0 10px;
    text-align: left;
    background: rgb(255, 255, 255, 0.5);
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

export default Nav;
