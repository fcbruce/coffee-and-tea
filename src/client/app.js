/*
 *
 * Author : Lv Li <t-lvli@microsoft.com>
 *
 * Time : Fri, Aug 26, 2016  3:48:12 PM
 *
 */

import ReactDOM from 'react-dom';
import React from 'react';
import { Router, browserHistory } from 'react-router';

import routes from '../universal/router';

ReactDOM.render(<Router routes={routes()} history={browserHistory} />,
  document.getElementById('app'));
