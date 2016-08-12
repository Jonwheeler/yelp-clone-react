require('babel-polyfill');

import chai from "chai";
import chaiEnzyme from 'chai-enzyme';

chai.use(chaiEnzyme())

var context = require.context('./src', true, /\.spec\.js$/);
context.keys().forEach(context);
