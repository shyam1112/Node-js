
const fs=require('fs');

fs.writeFileSync('./thapa/bio.txt','Hello nodejs.. ');
fs.appendFileSync('./thapa/bio.txt','Shyam Sardhara')
const buf_data= fs.readFileSync('./thapa/bio.txt');

console.log(buf_data.toString());
