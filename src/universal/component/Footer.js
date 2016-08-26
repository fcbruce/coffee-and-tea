/*
 *
 * Author : Lv Li <t-lvli@microsoft.com>
 *
 * Time : Fri, Aug 26, 2016  8:29:09 PM
 *
 */
import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';

export default class Footer extends React.Component {
  render() {
    return (
      <Navbar inverse fixedBottom>
        <Navbar.Collapse>
          <Nav>
            <NavItem href="/">fcbruce</NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
