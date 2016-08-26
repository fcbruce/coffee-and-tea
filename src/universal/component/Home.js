/*
 *
 * Author : Lv Li <t-lvli@microsoft.com>
 *
 * Time : Fri, Aug 26, 2016  3:55:00 PM
 *
 */
import React from 'react';
import {Navbar} from 'react-bootstrap';

import Header from './Header';
import Footer from './Footer';

export default class Home extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <div style={{float: "left", width: "20%", paddingTop: "300px", paddingBottom: "300px"}}> xxx </div>
        <Footer />
      </div>
    );
  }
}
