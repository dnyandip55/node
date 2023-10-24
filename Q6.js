//6.Create a Node.js application to search particular word in fille and display result
// on console.
const fs = require('fs');

const filePath = './new.txt'; 
const wordToSearch = 'Node'; 

fs.readFile(filePath, 'utf8', (err, data) => {
  if (err) {
    return console.error('Error reading the file:', err);
  }
  const lines = data.split('\n');
  lines.forEach((line, lineNumber) => {
    if (line.includes(wordToSearch)) {
      console.log(`Found '${wordToSearch}' on line ${lineNumber + 1}: ${line}`);
    }
  });
});
