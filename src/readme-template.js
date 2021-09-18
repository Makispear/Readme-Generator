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
//   tests: 'sfvbjsf
// }
//--------------------------------------------------------------------------

// FUNCTION FOR CHOOSING LICENSE BADGE BASED ON USER CHOICE 
checkLicenseBadge = checker => {
  switch(checker) {
    case ("Apache 2.0 License"):
      return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
    case ('GNU General Public License v3'):
      return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
    case ("The MIT License"):
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
    case ('BSD 2-Clause License'):
      return `[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`
    case ("BSD 3-Clause License"): 
      return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`
    case ("Boost Software License 1.0"):
      return `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`
    case ('Creative Commons Zero v1.0 Universal'): 
      return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`
    case ('Eclipse Public License 2.0'):
      return `![License](https://img.shields.io/badge/License-EPL%202.0-green)`
    case ('GNU Affero General Public License v3.0'): 
      return `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
    case ('GNU General Public License 2.0'): 
      return `[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
    case ('GNU Lesser General Public License 2.1'): 
      return `[![License](https://img.shields.io/badge/License-LGPL%202.1-yellowgreen)](https://opensource.org/licenses/BSD-2-Clause)`
    case ("Mozilla Public License 2.0"): 
      return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
    case ("The Unlicense"): 
      return `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`
    default:
      return ''
  }
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
* Visit My [GitHub Profile](https://github.com/${username.trim()})
* For any questions regarding this project, you can reach me via my personal [e-mail](mailto:${email.toLowerCase()}) 

## License
${checkLicenseBadge(license)}
${license} 

## Tests
${tests}
  `
}

module.exports = answers =>  generate(answers)