function createPaper() {
    const paper = document.createElement('img');
    paper.src = 'photos/favicon.png';
    paper.classList.add('paper');
    paper.style.left = Math.random() * 100 + '%';
    paper.style.width = 100 + 'px';
    document.querySelector('.paper-container').appendChild(paper);
  
    setTimeout(() => {
      paper.remove();
    }, 5000);
  }
  
  function generateFallingPapers() {
    setInterval(() => {
      createPaper();
    }, 4000);
  }
  
  generateFallingPapers();
  