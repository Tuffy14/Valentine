// Levels array with custom messages
const levels = [
  {
    phrase: "MYLOVE",
    instructions: `💕 Oh no! Our sweet love message got all jumbled up, just like my heart when I see you! 💌✨  
      Gently pick up the love-filled letters and place them in the perfect order, my little cheesecake!   
      Arrange them just right, and you'll unlock a heart-melting surprise!   
      Have fun!`,
    popupMessage: "ကိုယ့်အချစ်, I want to tell you how lovely you are. You make my heart flutter with every smile. 💕"
  },
  {
    phrase: "STRAWBERRY",
    instructions: ` Oh no! Our fruity puzzle is all mixed up! Can you arrange the letters to spell out the sweetest berry?   
      Drag and drop the letters into the correct order to complete the challenge!  
      Good luck, fruit ninja! ✨`,
    popupMessage: "My love, just like a strawberry, you’re sweet, juicy, and absolutely irresistible. You make life so much sweeter! "
  },
  {
    phrase: "MYWIFEY", // New level with Burmese text
    instructions: `💕 Oopsie! My favorite nickname for you got all scrambled up—just like my feelings whenever you're near! 💌✨  
      Carefully pick up these love-soaked letters and arrange them in the right order, my sweet strawberry!  
      Put them together just right, and you'll reveal a term that's as special as you are to me.  
      Have fun, my little Baby Boo! 💖`,
    popupMessage: "My dearest wifey, you are my heart, my home, and my forever. Every moment with you feels like a dream come true. 💕"
  },
  {
    phrase: "CHEESECAKE", // Final level
    instructions: ` Oh no! This delicious dessert name is all jumbled up!   
      Can you unscramble the letters to spell out something delicious, my little dessert lover?`,
    popupMessage: "You solved the puzzle! Time to reveal your special message! ❤️"
  }
];

let currentLevel = 0;

// DOM Elements
const lettersContainer = document.getElementById('letters');
const dropZonesContainer = document.getElementById('drop-zones');
const popup = document.getElementById('popup');
const nextLevelButton = document.getElementById('next-level');
const dynamicButton = document.getElementById('dynamic-button'); // Dynamic button
const loveLetterPopup = document.getElementById('love-letter-popup');
const closeLoveLetterButton = document.getElementById('close-love-letter');
const instructionsText = document.getElementById('instructions-text');
const levelIndicator = document.getElementById('current-level');
const startPopup = document.getElementById('start-popup');
const closeStartPopupButton = document.getElementById('close-start-popup');
const gameInstructions = document.getElementById('game-instructions'); // Get the game instructions box

// New Level 4 Popup
const level4Popup = document.getElementById('level-4-popup');
const closeLevel4PopupButton = document.getElementById('close-level-4-popup');

// Initialize the first level
function initLevel(levelIndex) {
  const level = levels[levelIndex];
  const phrase = level.phrase;
  const scrambledLetters = phrase.split('').sort(() => Math.random() - 0.5);

  // Update instructions
  instructionsText.innerHTML = level.instructions;

  // Update level indicator
  levelIndicator.textContent = levelIndex + 1;

  // Clear previous elements
  lettersContainer.innerHTML = '';
  dropZonesContainer.innerHTML = '';

  // Create letter elements
  scrambledLetters.forEach((letter) => {
    const letterElement = document.createElement('div');
    letterElement.classList.add('letter');
    letterElement.textContent = letter;
    letterElement.draggable = true;
    letterElement.setAttribute('data-letter', letter);
    lettersContainer.appendChild(letterElement);

    // Drag start event
    letterElement.addEventListener('dragstart', (e) => {
      e.dataTransfer.setData('text/plain', letter);
      setTimeout(() => {
        letterElement.style.display = 'none'; // Hide while dragging
      }, 0);
    });

    // Drag end event (in case it's not dropped)
    letterElement.addEventListener('dragend', () => {
      if (!letterElement.classList.contains('placed')) {
        letterElement.style.display = 'flex'; // Make it reappear
      }
    });
  });

  // Create drop zones
  for (let i = 0; i < phrase.length; i++) {
    const dropZone = document.createElement('div');
    dropZone.classList.add('drop-zone');
    dropZone.dataset.index = i;
    dropZonesContainer.appendChild(dropZone);

    // Drag over event
    dropZone.addEventListener('dragover', (e) => {
      e.preventDefault();
    });

    // Drop event
    dropZone.addEventListener('drop', (e) => {
      e.preventDefault();
      const letter = e.dataTransfer.getData('text/plain');
      if (!dropZone.textContent) { // Only allow empty slots
        dropZone.textContent = letter;
        dropZone.classList.add('filled'); // Change color & style
        removeDraggedLetter(letter);
        checkPuzzleCompletion(phrase);
      }
    });
  }

  // Update dynamic button based on the level
  if (levelIndex === levels.length - 1) {
    dynamicButton.textContent = "Reveal the Message ❤️";
    dynamicButton.removeEventListener('click', skipToNextLevel);
    dynamicButton.addEventListener('click', revealLoveLetter);
  } else {
    dynamicButton.textContent = "Skip to Next Level ⏭️";
    dynamicButton.removeEventListener('click', revealLoveLetter);
    dynamicButton.addEventListener('click', skipToNextLevel);
  }
}

// Removes the dragged letter from the original position
function removeDraggedLetter(letter) {
  const letters = document.querySelectorAll('.letter');
  for (let l of letters) {
    if (l.textContent === letter && !l.classList.contains('placed')) {
      l.classList.add('placed'); // Mark as placed
      l.style.visibility = 'hidden'; // Hide instead of removing
      break; // Stop after hiding one occurrence
    }
  }
}

// Check if the puzzle is completed
function checkPuzzleCompletion(phrase) {
  const dropZones = Array.from(dropZonesContainer.children);
  const userPhrase = dropZones.map((zone) => zone.textContent).join('');
  if (userPhrase === phrase) {
    const level = levels[currentLevel];
    if (currentLevel === levels.length - 1) {
      // Show the Level 4 completion popup
      level4Popup.style.display = 'flex';
    } else {
      // Show the regular popup for other levels
      document.getElementById('popup-message').textContent = level.popupMessage;
      popup.style.display = 'flex'; // Show pop-up card
    }
  }
}

// Skip to the next level
function skipToNextLevel() {
  currentLevel++;
  if (currentLevel >= levels.length) {
    currentLevel = 0; // Loop back to the first level
  }
  initLevel(currentLevel);
}

// Reveal the love letter
function revealLoveLetter() {
  const loveLetterText = document.getElementById('love-letter-text');
  loveLetterText.innerHTML = `
    My dearest love,<br>
   From the moment I met you, my world changed in ways I never expected. You’re the light that makes everything brighter, the warmth I never want to lose, and the reason behind my happiest smiles. Every time you speak, it feels like the world slows down just a little, just for me to listen. And every time you look at me, my heart forgets how to beat for a second.

I don’t think I could ever put into words how much you mean to me. You’re my person—the one I trust, the one I want to tease forever, the one who makes life feel like something special. Thank you for being you. For being here. For making every moment feel like home.

Always,
Yours.
  `;
  loveLetterPopup.style.display = 'flex';
}

// Close the Level 4 popup
closeLevel4PopupButton.addEventListener('click', () => {
  level4Popup.style.display = 'none';
});

// Close the love letter popup
closeLoveLetterButton.addEventListener('click', () => {
  loveLetterPopup.style.display = 'none';
});

// Go to the next level when clicking the "Next Level" button
nextLevelButton.addEventListener('click', () => {
  popup.style.display = 'none';
  currentLevel++;
  if (currentLevel >= levels.length) {
    currentLevel = 0; // Loop back to the first level
  }
  initLevel(currentLevel);
});

// Close the start popup and show the game instructions when clicking the "Let’s Play 🎉" button
closeStartPopupButton.addEventListener('click', () => {
  startPopup.style.display = 'none'; // Hide the start popup
  gameInstructions.style.display = 'block'; // Show the game instructions box
  initLevel(currentLevel); // Initialize the first level
});

// Initialize the start popup on page load
window.addEventListener('load', () => {
  startPopup.style.display = 'flex'; // Show the start popup
});