function handleStart() {
    const startDiv = document.getElementById('start');
    const mainDiv = document.getElementById('main');
    const music = document.getElementById("background-music");
    
    music.muted = false;
    music.play();

    startDiv.style.display = 'none';
    mainDiv.style.display = 'flex';
}

document.getElementById('start-btn').addEventListener('click', handleStart);

let noClickCount = 0;

function handleNoClick() {
    noClickCount++;
    
    const noBtn = document.querySelector('#no-btn');
    const yesBtn = document.querySelector('#yes-btn');
    const mainImage = document.querySelector('.main-image');
    
    if (noClickCount <= 2) {
        // Reduce #no-btn, increase #yes-btn
        noBtn.style.transform = `scale(${1 - noClickCount * 0.3})`;
        yesBtn.style.transform = `scale(${1 + noClickCount * 0.3})`;
        
        // Change image
        mainImage.src = mainImage.src.replace(/\d\.png/, `${noClickCount + 1}.png`);
    } else if (noClickCount === 3) {
        // Hide #no-btn, change image to 4.png
        noBtn.style.display = 'none';
        mainImage.src = mainImage.src.replace(/\d\.png/, '4.png');
    }
}

// Attach event listener to #no-btn
document.querySelector('#no-btn').addEventListener('click', handleNoClick);

function handleYesClick() {
    const responseDiv = document.getElementById('response');
    const mainDiv= document.getElementById('main');

    mainDiv.style.display = 'none';
    responseDiv.style.display = 'block';
}
// Attach event listener to #yes-btn
document.querySelector('#yes-btn').addEventListener('click', handleYesClick);