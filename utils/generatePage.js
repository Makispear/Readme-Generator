const fs = require('fs')

// WRITE FILE 
const writeFile = markdown => {
    return new Promise((resolve, reject) => {
        fs.write('./dist/README.md', markdown, err => {
            if (err) {
                reject(err)
                return
            }
            resolve({
                ok: true,
                message: 'File created'
            })
            }
        )
    })
}

module.exports = writeFile