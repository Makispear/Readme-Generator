const fs = require('fs')

// WRITE FILE 
const writeFile = markdown => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/README.md', markdown, err => {
            if (err) {
                reject(err)
                return
            }
            resolve(console.log("README.md file has been generated!"))
            }
        )
    })
}

module.exports = writeFile