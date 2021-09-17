const generate = (answers) => {
  return `
  #${answers.title}
  ## Description
  ${answers.description}

  ${answers.confirmTableContent}

  ##Installation
  ${answers.installation}

  ## Usage 
  ${answers.usage}

  ## Contribution Guidelines
  ${answers.contribution}

  ## License
  ${answers.license}
  `
}

module.exports = answers =>  generate(answers)