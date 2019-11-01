const express = require('express');
const path = require('path');
module.exports = app => app.use('/public', express.static(path.join(__dirname, '../public')));