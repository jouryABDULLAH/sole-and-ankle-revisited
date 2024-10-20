import React from 'react';
import styled from 'styled-components/macro';
import Icon from '../Icon';
import { COLORS, QUERIES, WEIGHTS } from '../../constants';
import Logo from '../Logo';
import SuperHeader from '../SuperHeader';
import MobileMenu from '../MobileMenu';
import UnstyledButton from '../UnstyledButton';

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <Side>
          <Logo />
        </Side>
        <Nav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </Nav>
        <MobileNav>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={1} />
          </UnstyledButton>
          <UnstyledButton >
            <Icon id="search" strokeWidth={1} />
          </UnstyledButton>
          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={1} />
          </UnstyledButton>
        </MobileNav>
        <Side />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => setShowMobileMenu(false)}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  border-bottom: 1px solid var(--gray-300);
  
  overflow: auto;
  @media (${QUERIES.tabletAndDown}){
      gap: calc(32 / 16 * 1rem);
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: clamp(
    1rem,
    6vw - 1.25rem,
    4rem
  );
  margin: 0px 48px;

  @media (${QUERIES.tabletAndDown}){
    display: none;
  }
`;

const MobileNav = styled.nav`
  display: none;

  @media (${QUERIES.tabletAndDown}){
    display: flex;
    margin-left: auto;
    gap: calc(${16} / ${16} * ${1 + 'rem'});
    margin-top: auto;
    margin-bottom: auto;
  }
`;

const Side = styled.div`
  flex: 1;

  @media (${QUERIES.tabletAndDown}){
    flex-grow: 0;
  }
  
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--gray-900);
  font-weight: var(--weight-medium);

  &:first-of-type {
    color: var(--secondary);
  }
`;

export default Header;
