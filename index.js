// TODO: Include packages needed for this application
const inquirer = require('inquirer');

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
            message: '1) What is your GitHub username? (required)',
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
            message: '2) What is your email address? (required)',
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
            message: `3) What is the name of your project's title? (required)`,
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
            message: '4) What do you want to add in the "description" section? (required)',
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
            message: '5) Would you like to add a "table of content" section? (Optional)',
            default: true
        },
        {
            when: ({confirmTableContent}) => {
                if (confirmTableContent === true) {
                    console.log('true')
                    // return a function 
                    return
                } else {
                    console.log('false')
                    // return false 
                    return 
                }
            }
        },
        {
            // INSTALLATION 
            type: "input",
            name: 'installation',
            message: '6) How do you install your project? (required)',
            validate: installationInput => {
                if (installationInput) {
                    return true
                } else {
                    console.log('Please Enter A Description For Your Project!')
                    return false
                }
            }
        },
        {
            // USAGE 
            type: "input",
            name: 'usage',
            message: '7) How do you use your project? Add instructions. (required)',
            validate: usageInput => {
                if (usageInput) {
                    return true
                } else {
                    console.log('Please Enter A Description For Your Project!')
                    return false
                }
            }
        },
        {
            // CONTRIBUTION 
            type: 'input',
            name: 'contribution',
            message: '8) What are the contribution guidelines?'
        },
        {
            // LICENSE 
            type: "rawlist",
            name: 'license',
            message: '9) What license do you want your project to have? (required)',
            choices: ["choice 1", "choice 2", "choice 3"]
        },
        {
            type: 'confirm',
            name: 'tests',
            message: '10) Do you want to add tests to your project?',
            default: false
        }
        // { add test functio here }
    ])
}


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}


// TODO: Create a function to initialize app
let init = () => {
    promptUser()
    .then(answers => console.log(answers))
}

// Function call to initialize app
init();
