/*
 *
 * Author : Lv Li <t-lvli@microsoft.com>
 *
 * Time : Fri, Aug 26, 2016 10:30:44 AM
 *
 */
const express = require('express');
const app = express();
const path = require('path');

app.use('/static', express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../view/index.html'));
});

app.listen(8964, () => {
  console.log('listen port 8964!');
});
