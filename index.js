// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./src/generateMarkdown.js');
const writeFile = require('./utils/generatePage.js');
 
// TODO: Create an array of questions for user input
const promptUser = () => {
    console.log(`
======================
Fill in the Following: 
======================
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
            message: 'What are your contribution guidelines? (required)',
            validate: contributionInput => {
                if (contributionInput) {
                    return true
                } else {
                    console.log('Please Enter Your Contribution Guidelines For Your Project!')
                    return false
                }
            }
        },
        {
            // LICENSE 
            type: "rawlist",
            name: 'license',
            message: 'What license do you want your project to have? (required)',
            choices: [
                "Apache 2.0 License",
                "GNU General Public License v3",
                "The MIT License",
                "BSD 2-Clause License", 
                "BSD 3-Clause License",
                "Boost Software License 1.0", 
                "Creative Commons Zero v1.0 Universal",
                "Eclipse Public License 2.0", 
                "GNU Affero General Public License v3.0",   
                "GNU General Public License 2.0", 
                "GNU Lesser General Public License 2.1", 
                "Mozilla Public License 2.0", 
                "The Unlicense" 
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
const writeToFile = data =>  writeFile(data)


// TODO: Create a function to initialize app
const init = () => {
    promptUser()
    .then(answers => generateMarkdown(answers))
    .then(generatedTemplate => writeToFile(generatedTemplate))
    .catch(err => console.log(err))
}

// Function call to initialize app
// THIS IS WHERE THE APP STARTS 
init();
