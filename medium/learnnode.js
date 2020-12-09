var fs = require('fs')

// const files = fs.readFileSync('./planets.txt')

fs.readFile('planets.txt', 'utf8', (err,data) => {
    if (err) throw err;
    console.log(data);
})




