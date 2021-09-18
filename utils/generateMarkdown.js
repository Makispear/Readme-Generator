licenseInfoObj = [
  {
    license: 'Apache 2.0 License',
    link: '(https://https://opensource.org/licenses/Apache-2.0)',
    badge: '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]' //1
  },
  {
    license: 'GNU General Public License v3',
    link: '(https://www.gnu.org/licenses/gpl-3.0)',
    badge: "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]"//2
  },
  {
    license: 'The MIT License',
    link: `(https://opensource.org/licenses/MIT)`,
    badge: "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"//3
  },
  {
    license: 'BSD 2-Clause License',
    link: `(https://img.https://opensource.org/licenses/BSD-2-Clause)`,
    badge: "[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)]"//4
  },
  {
    license: 'BSD 3-Clause License',
    link: `(https://img.https://opensource.org/licenses/BSD-3-Clause)`,
    badge: "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]"//5
  },
  {
    license: 'Boost Software License 1.0',
    link: `(https://https://www.boost.org/LICENSE_1_0.txt)`,
    badge: "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]"//6
  },
  {
    license: 'Creative Commons Zero v1.0 Universal',
    link: `(https://https://creativecommons.org/publicdomain/zero/1.0/)`,
    badge: "[![License](https://img.shields.io/badge/License-EPL%202.0-green)]"//7
  },
  {
    license: 'Eclipse Public License 2.0',
    link: `(httpshttps://opensource.org/licenses/EPL-2.0)`,
    badge: "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)]"//8
  },
  {
    license: 'GNU Affero General Public License v3.0',
    link: `(httpshttps://www.gnu.org/licenses/agpl-3.0)`,
    badge: "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)]" //9
  },
  {
    license: 'GNU General Public License 2.0',
    link: `(httpshttps://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`,
    badge: '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)]' //10
  },
  {
    license: 'GNU Lesser General Public License 2.1',
    link: `(httpshttps://opensource.org/licenses/BSD-2-Clause)`,
    badge: "[![License](https://img.shields.io/badge/License-LGPL%202.1-yellowgreen)]" //11
  },
  {
    license: 'Mozilla Public License 2.0',
    link: `(https://https://opensource.org/licenses/MPL-2.0)`,
    badge: "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)]"
  },
  {
    license: 'The Unlicense',
    link: `(http://unlicense.org/)`,
    badge: "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)]"
  },
]

// filtering the license 
const filteredLicense = license => {
  const choice = licenseInfoObj.filter(obj => {
    if (obj.license === license) {
      return true
    }
  })
  return choice
}


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const renderLicenseBadge = license => {
const mapped = filteredLicense(license).map(result => result.badge)
return mapped
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
renderLicenseLink = license => {
  const mapped = filteredLicense(license).map(result => result.link)
  return mapped
}


renderContentTable = accepted => {
  if (!accepted) {
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

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return`
## License
${renderLicenseBadge(license)}${renderLicenseLink(license)}
${license}
* For more information about this license click the license badge!
`
}

// TODO: Create a function to generate markdown for README
generateMarkdown = data => {
  const {username, email, title, description, confirmTableContent, installation, usage, contribution, license, tests} = data

  return `
# ${title} 
${renderLicenseBadge(license)}${(renderLicenseLink(license))}

## Description
${description}

${renderContentTable(confirmTableContent)}

## Installation
${installation}

## Usage 
${usage}

## Contribution Guidelines
${contribution}

## Questions
* Visit My [GitHub Profile](https://github.com/${username.trim()})
* For any questions regarding this project, you can reach me via my personal [e-mail](mailto:${email.toLowerCase()}) 

${renderLicenseSection(license)}

## Tests
${tests}
`
}

module.exports = generateMarkdown;
