/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { QUERIES } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {


  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
        <Menu aria-label='menu'>
          <UnstyledButton onClick={onDismiss}>
            <Icon id="close" strokeWidth={1} >
              Dismiss menu
            </Icon>
          </UnstyledButton>
          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>
          <Footer>
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </Footer>
      </Menu>
    </Overlay>
    
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  inset: 0;
  background-color: rgba(0,0,0,0.5);
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: end;
`;

const Menu = styled(DialogContent)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  width: 300px;
  height: 100%;
  background-color: var(--white);
  padding: calc( ${16} / ${16} * ${1}rem);

  & > button {
    margin-left: auto;
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: calc(${8} / ${16} * ${1}rem);
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

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: ;
`;

const FooterLink = styled.a`
  color: grey;
  font-size: 1rem;
  text-decoration: none;
  font-weight: var(--weight-normal);
  gap: calc(${4} / ${16} * ${1}rem);
`;
export default MobileMenu;
