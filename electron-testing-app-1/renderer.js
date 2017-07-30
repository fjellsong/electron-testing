// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

const crypto = require('crypto');
const $ = require('jquery');

console.log($('#hashbtn').attr('id'));


const secret = 'abcdefgajsdifojaoisdfjoasdfjosajidfo';
const hash = crypto.createHmac('sha256', secret).update('I love cupcakes').digest('hex');
console.log(hash);
