const fs = require('fs')
const inquirer = require('inquirer')
// HOW THE ANSWERS OBJECT WILL LOOK LIKE --------------------------------------
// {
//   username: 'masdgfar',
//   email: 'arsv',
//   title: 'earsfrasvxc',
//   description: 'vasdaverfgdvcx',
//   confirmTableContent: true,
//   installation: 'grvasdberfd',
//   usage: 'gebrfdscx',
//   contribution: 'ebrfdvxc',
//   license: 'choice 1',
//   tests: true
// }
//--------------------------------------------------------------------------


// checkTests = (checker) => {
//   if (!checker) {
//     return '' 
//   } else {
//     inquirer.prompt([
//     {
//       type: 'input',
//       name: 'testInput',
//       message: 'what would you want to test? (required)',
//       validate: testInput => {
//         if (testInput) {
//           return true
//         } else {
//           console.log('Please enter your tests!')
//           return false
//         }
//       }
//     }])
//   }
// }

// FUNCTION FOR CHOOSING LICENSE BADGE BASED ON USER CHOICE 
checkLicenseBadge = checker => {
  switch(checker) {
    case ("Apache 2.0 License"):
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    case ('GNU General Public License v3'):
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    default:
      return ''
  }
return 
}

// TABLE OF CONTENT IF USER CONFIRMS IT 
checkTableContent = (checker) => {
  if (!checker) {
    return ''
  } else {
    return `
  ## Table of Content
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution](#contribution-guidelines)
  * [Questions](#questions)
  * [License](#license)
  * [Tests](#tests)
  ` 
  }
}

const generate = (answers) => {
const {username, email, title, description, confirmTableContent, installation, usage, contribution, license, tests} = answers

  return `
# ${title} 
${checkLicenseBadge(license)}

## Description
${description}

${checkTableContent(confirmTableContent)}

## Installation
${installation}

## Usage 
${usage}

## Contribution Guidelines
${contribution}

## Questions
For any questions regarding this project please contact me via my [e-mail](${email}) 
For further question, please head to my GitHub [${username}](https://github.com/${username}) 

## License
${checkLicenseBadge(license)}
${license} 

## Tests
${tests}
  `
}

module.exports = answers =>  generate(answers)