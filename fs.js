const fs = require('fs');
const path = require('path');

const firstFilePath = path.join(__dirname, 'content', 'first-file.txt');
const secondFilePath = path.join(__dirname, 'content', 'second-file.txt');

const firstFileContent = fs.readFileSync(firstFilePath, 'utf8');
const secondFileContent = fs.readFileSync(secondFilePath, 'utf8');

console.log(firstFileContent);
console.log(secondFileContent);

fs.writeFileSync(
    path.join(__dirname, 'content', 'result.txt'),
    `Here is the result: ${firstFileContent}, ${secondFileContent}`
);
