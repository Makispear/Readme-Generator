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


checkLicense = checker => {
  if (!checker) {
    return ''
  } else {
    return '* [license coming soon](#license)'
  }
}

checkTableContent = (checker, infoObj) => {
  if (!checker) {
    return ''
  } else {
    return `
  ## Table of Content
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribution Guidelines](#contribution-guidelines)
  * [questions](#questions)
  ${checkLicense(infoObj.license)}
  * [Tests](#tests)
  ` 
  }
}

const generate = (answers) => {
const {username, email, title, description, confirmTableContent, installation, usage, contribution, license, tests} = answers

  return `
  # ${title}
  ## Description
  ${description}

  ${checkTableContent(confirmTableContent, answers)}

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
  ${license}

  ## Tests
  ${tests}
  `
}

module.exports = answers =>  generate(answers)