// function to generate markdown for README
function generateMarkdown(data) {
  let markdown = `# ${data.title}
 
 `;
 
  const sections = [
     { title: 'Description', content: data.description },
     { title: 'Installation', content: data.installation },
     { title: 'Usage', content: data.usage },
     { title: 'License', content: data.license },
     { title: 'Contributing', content: data.contributing },
     { title: 'Tests', content: data.tests },
     { title: 'Questions', content: `If you have any questions, you can reach me via email at ${data.email}. You can also visit my GitHub profile at https://github.com/${data.github}.` }
  ];
 
  markdown += `## Table of Contents
 
 `;
 
  sections.forEach((section, index) => {
     markdown += `* [${section.title}](#${section.title.toLowerCase()})
 `;
  });
 
  markdown += `
 `;
 
  sections.forEach((section, index) => {
     markdown += `## ${section.title}
 
 ${section.content}
 
 `;
  });
 
  return markdown;
 }
 
 module.exports = generateMarkdown;