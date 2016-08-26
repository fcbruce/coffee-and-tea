/*
 *
 * Author : Lv Li <t-lvli@microsoft.com>
 *
 * Time : Fri, Aug 26, 2016  3:52:00 PM
 *
 */
import React from 'react';
import { Route } from 'react-router';

import Home from './component/Home';

export default function () {
  return (
    <Route path="/" component={Home} />
  );
}
