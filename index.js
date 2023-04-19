const inquirer = require('inquirer');
const fs = require('fs');
const template = fs.readFileSync('./template.md', 'utf8');
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is the name of your application?',
            name: 'appName'
        },
        {
            type: 'input',
            message: 'Provide a brief description of your application.',
            name: 'description'
        },
        {
            type: 'input',
            message: 'What are the main features of your application?',
            name: 'features'
        },
        {
            type: 'input',
            message: 'How can someone install your application?',
            name: 'installation'
        },
        {
            type: 'input',
            message: 'How can someone use your application?',
            name: 'usage'
        },
        {
            type: 'input',
            message: 'What are the contribution guidelines for your applicaion?',
            name: 'contGuide'
        },
        {
            type: 'input',
            message: 'What liscense is your application distributed under?',
            name: 'liscense'
        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'githubUsername'
        },
        {
            type: 'input',
            message: 'What is your email address?',
            name: 'email'
        }
    ])
    .then(answers => {
        const readmeContent = template
      .replace('{appName}', answers.appName)
      .replace('{description}', answers.description)
      .replace('{features}', answers.features)
      .replace('{installation}', answers.installation)
      .replace('{usage}', answers.usage)
      .replace('{contGuide}', answers.contGuide)
      .replace('{license}', answers.license)
      .replace('{githubUsername}', answers.githubUsername)
      .replace('{email}', answers.email);
          

        fs.writeFile('README.md', readmeContent, error => {
            if (error) {
                console.error(error);
            } else {
                console.log('README.md file has been created.');
            }
        });
    });