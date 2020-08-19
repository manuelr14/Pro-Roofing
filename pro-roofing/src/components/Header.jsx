import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Pro Roofing</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">About Us</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Claim Status</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Get Info</NavLink>
            </NavItem>

          </Nav>
          <NavItem>
              <NavLink href="/components/">Log in</NavLink>
            </NavItem>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default Header;