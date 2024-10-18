/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components/macro';
import { DialogOverlay, DialogContent } from '@reach/dialog';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';
import { COLORS, WEIGHTS } from '../../constants';

const MobileMenu = ({ isOpen, onDismiss }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
        <Menu>
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

const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background-color: rgba(0,0,0,0.5);
  height: 100%;
  width: 100%;
  z-index: 999;
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: fixed;
  top: 0;
  right:0;
  bottom: 0;
  width: 300px;
  height: 100%;
  background-color: white;
  z-index: 999999;
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
  color: ${COLORS.gray[900]};
  font-weight: ${WEIGHTS.medium};

  &:first-of-type {
    color: ${COLORS.secondary};
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
  font-weight: ${WEIGHTS.normal};
  gap: calc(${4} / ${16} * ${1}rem);
`;
export default MobileMenu;
