// 写js功能
const $ = require('jquery')
const moment = require('moment')
require('./css/index.css')
// 引入less
require('./less/demo.less')
// 引入字体图标
require('./fonts/iconfont.css')
require('./fonts1/iconfont.css')

$('li:odd').css('color', 'blue')
$('li:even').css('color', 'green')
$('li:first').text(moment().format('YYYY-MM-DD'))

const fn = () => {
  console.log('123');
}