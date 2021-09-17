// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateReadme = require('./src/readme-template.js');
const writeFile = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptUser = () => {
    console.log(`
    =======================
    Answer these questions: 
    =======================
    `)
    return inquirer
    .prompt([
        {
            // USERNAME 
            type: 'input',
            name: 'username',
            message: 'Enter your GitHub username? (required)',
            validate: username => {
                if (username) {
                    return true
                } else {
                    console.log('Please enter your GitHub username!')
                    return false
                }
            }
        },
        {
            // EMAIL 
            type: 'input',
            name: 'email',
            message: 'Enter your email address? (required)',
            validate: email => {
                if (email) {
                    return true
                } else {
                    console.log('Please enter your email address!')
                    return false
                }
            }
        },
        {
            // TITLE 
            type: "input",
            name: "title",
            message: `Enter your project's title? (required)`,
            validate: titleInput => {
            if (titleInput) {
                return true
            } else {
                console.log("Please enter your project's title")
                return false
            }}
        },
        {
            // DESCRIPTION 
            type: "input",
            name: 'description',
            message: 'What do you want to add in the "description" section? (required)',
            validate: description => {
                if (description) {
                    return true
                } else {
                    console.log('Please enter a description for your project!')
                    return false
                }
            }
        },
        {
            // TABLE OF CONTENT 
            type: "confirm",
            name: 'confirmTableContent',
            message: 'Would you like to add a "table of content" section? (Optional)',
            default: true
        },
        {
            // INSTALLATION 
            type: "input",
            name: 'installation',
            message: 'How do you install your project? Enter installation instructions. (required)',
            validate: installationInput => {
                if (installationInput) {
                    return true
                } else {
                    console.log('Please Enter Installation Instructions For Your Project!')
                    return false
                }
            }
        },
        {
            // USAGE 
            type: "input",
            name: 'usage',
            message: 'How do you use your project? Add instructions. (required)',
            validate: usageInput => {
                if (usageInput) {
                    return true
                } else {
                    console.log('Please Enter Usage Instructions For Your Project!')
                    return false
                }
            }
        },
        {
            // CONTRIBUTION 
            type: 'input',
            name: 'contribution',
            message: 'What are your contribution guidelines?'
        },
        {
            // LICENSE 
            type: "rawlist",
            name: 'license',
            message: 'What license do you want your project to have? (required)',
            choices: [
"Apache 2.0 License", // [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)
"GNU General Public License v3", // [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
"The MIT License", // [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
"BSD 2-Clause License", // [![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)
"BSD 3-Clause License", // [![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
"Boost Software License 1.0",   //[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)
"Creative Commons Zero v1.0 Universal", //[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)
"Eclipse Public License 2.0", // [![License](https://img.shields.io/static/v1?label=License&message=Epl%202.1&color=red)](https://opensource.org/licenses/BSD-2-Clause)
"GNU Affero General Public License v3.0",   // [![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)
"GNU General Public License 2.0", // [![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)
"GNU Lesser General Public License 2.1", // [![License](https://img.shields.io/badge/License-LGPL%202.1-yellowgreen)](https://opensource.org/licenses/BSD-2-Clause)
"Mozilla Public License 2.0", // [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)
"The Unlicense" // [![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)
                ]
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Provide some tests for your project: (required)',
            validate: testInput => {
                if (testInput) {
                    return true
                } else {
                    console.log('Please Enter At Least One Test For Your Project!')
                    return false
                }
            }
        }
       
    ])
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {

}


// TODO: Create a function to initialize app
let init = () => {
    promptUser()
    // .then(answers => console.log(answers))
    .then(answers => generateReadme(answers))
    .then(template => console.log(template))
}

// Function call to initialize app
init();
