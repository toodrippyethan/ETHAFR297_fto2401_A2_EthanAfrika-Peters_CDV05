document.addEventListener('DOMContentLoaded', function() {
    const funFacts = [
      "I love playing Hoceky.",
      "I enjoy Coding and solving problems.",
      "I'm a coding enthusiast."
    ];
  
    const funFactText = document.getElementById('fun-fact-text');
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    funFactText.textContent = funFacts[randomIndex];
  });

  