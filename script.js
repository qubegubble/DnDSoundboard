// script.js

// Sample data for sounds (Replace with actual file paths and icons)
const sounds = {
    ambient: [
        { name: 'Enchanted Forest', file: 'assets/sounds/ambient/enchanted_forest.mp3', icon: 'ambient/enchanted_forest.png' },
        { name: 'Mystic Mountains', file: 'assets/sounds/ambient/mystic_mountains.mp3', icon: 'mystic_mountains.png' },
        { name: 'Dark Cave', file: '', icon: ''},
        { name: 'Relentless Sea', file: '', icon: ''},
        { name: 'Dragon peak Mountains', file: '', icon: ''},
        { name: 'Lively Tavern', file: '', icon: ''},
        { name: 'Beach', file: '', icon: ''},
        { name: 'Black Market', file: '', icon: ''},
        { name: 'Village Center', file: '', icon: ''}
        // Add more sounds
    ],
    battle: [
        { name: 'Clash of Swords', file: 'assets/sounds/battle/clash_of_swords.mp3', icon: 'clash_of_swords.png' },
        { name: 'Dragon\'s Fury', file: 'assets/sounds/battle/dragons_fury.mp3', icon: 'dragons_fury.png' },
        { name: 'Battle of Thiefs', file: '', icon: ''},
        { name: 'Desperation', file: '', icon: ''},
        { name: 'Goblin Battle', file: '', icon: ''},
        { name: 'Battle at Baldurs Gate', file: '', icon: ''},
        { name: 'Battle at Sea', file: '', icon: ''},
        { name: 'Skills of Wizards', file: '', icon: ''},
        { name: 'Fury of Gods', file: '', icon: ''}
        // Add more sounds
    ],
    puzzle: [
        { name: 'Ancient Riddles', file: 'assets/sounds/puzzle/ancient_riddles.mp3', icon: 'ancient_riddles.png' },
        { name: 'Cryptic Whispers', file: 'assets/sounds/puzzle/cryptic_whispers.mp3', icon: 'cryptic_whispers.png' },
        // Add more sounds
    ],
    effects: [
        { name: 'Treasure Found', file: 'assets/sounds/effects/treasure_found.mp3', icon: 'treasure_found.png' },
        { name: 'Enemy Growl', file: 'assets/sounds/effects/enemy_growl.mp3', icon: 'enemy_growl.png' },
        { name: 'Dragon\'s Roar', file: '', icon: '' },
        { name: 'Owlbear Howl', file: '', icon: '' },
        { name: 'Wraiths Desperation', file: '', icon: '' },
        { name: 'Falling Trees', file: '', icon: '' },
        { name: 'Arrow flying by', file: '', icon: '' },
        { name: 'Zombie Scream', file: '', icon: '' },
        { name: 'Heavy Footsteps in a forest', file: '', icon: '' },
        { name: 'Heavy Footsteps in a Tavern', file: '', icon: ''},
        { name: '', file: '', icon: ''}
        // Add more sounds
    ],
};

// Function to create sound buttons
function createSoundButtons() {
    for (const category in sounds) {
        const grid = document.getElementById(`${category}-grid`);
        sounds[category].forEach(sound => {
            const button = document.createElement('div');
            button.classList.add('sound-button');
            button.innerHTML = `
                <img src="assets/${sound.icon}" alt="${sound.name} icon" class="sound-icon">
                <span class="sound-name">${sound.name}</span>
            `;
            button.addEventListener('click', () => playSound(sound.file));
            grid.appendChild(button);
        });
    }
}

// Function to play sound
let currentAudio = null;

function playSound(file) {
    if (currentAudio) {
        currentAudio.pause();
    }
    currentAudio = new Audio(file);
    currentAudio.play();
}

// Function to handle collapsible sections
function setupCollapsibleSections() {
    const collapseButtons = document.querySelectorAll('.collapse-button');
    collapseButtons.forEach(button => {
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            content.classList.toggle('active');
        });
    });
}

document.querySelectorAll('.collapse-button').forEach(button => {
    button.addEventListener('click', () => {
        const content = button.nextElementSibling;
        content.classList.toggle('show');

        if (content.classList.contains('show')) {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = null;
        }
    });
});

// Initialize the page
window.onload = function() {
    createSoundButtons();
    setupCollapsibleSections();
};

const fireplace = document.querySelector('.fireplace');

for (let i = 0; i < 20; i++) { // Adjust the number of sparks
    const spark = document.createElement('div');
    spark.classList.add('fireplace__spark');
    spark.style.left = `${Math.random() * 100}%`; // Random horizontal position
    spark.style.animationDelay = `${Math.random() * 2}s`; // Random delay
    fireplace.appendChild(spark);
}
