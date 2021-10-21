const fs = require('fs');
const pug = require('pug');

const html = pug.renderFile('index.pug',{name:"superDupont"});

fs.writeFileSync("index.html", html);
