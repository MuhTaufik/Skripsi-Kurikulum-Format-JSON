var JSZip = require('jszip');
var Docxtemplater = require('docxtemplater');

var fs = require('fs');
var path = require('path');

var content = fs.readFileSync(path.resolve(__dirname, '../Syarat Mata Kuliah.docx'), 'binary');
var zip = new JSZip(content);

var doc = new Docxtemplater();
doc.loadZip(zip);

