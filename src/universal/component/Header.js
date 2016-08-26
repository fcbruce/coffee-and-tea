/*
 *
 * Author : Lv Li <t-lvli@microsoft.com>
 *
 * Time : Fri, Aug 26, 2016  7:52:28 PM
 *
 */
import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Header extends React.Component {
  render() {
    return (
      <Navbar inverse fixedTop>
        <Navbar.Brand>
          <a href="/">Coffee and Tea</a>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav>
            <NavItem href="/" >Home</NavItem>
          </Nav>
          <Nav pullRight>
            <NavItem href="https://github.com/fcbruce">GitHub</NavItem>
            <NavItem href="https://cn.linkedin.com/in/fcbruce">LinkedIn</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
