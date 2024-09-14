import './style.css'

// Wait until DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const linkedinBtn = document.getElementById('linkedinBtn');
    const githubBtn = document.getElementById('githubBtn');
  
    // Event listener for LinkedIn button
    linkedinBtn.addEventListener('click', () => {
      window.open('https://www.linkedin.com/in/ruben-carbajal', '_blank');
    });
  
    // Event listener for GitHub button
    githubBtn.addEventListener('click', () => {
      window.open('https://github.com/your-github-username', '_blank');
    });
  });
  