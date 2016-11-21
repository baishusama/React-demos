// //main.js 
// var greeter = require('./Greeter.js');
// document.getElementById('root').appendChild(greeter());


// // ES6 + React

import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

import './main.css';//使用 require 导入 css 文件

render(<Greeter />, document.getElementById('root'));