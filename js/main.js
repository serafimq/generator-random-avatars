const startPath = './assets';
const countBg = 3;
const countTop = 8;
const countMouthes = 6;
const countEyes = 5;
const countGlasses = 3;
const countEyebrows = 6;
const countBody = 6;
const countPets = 4;

const generateButton = document.getElementById('generate-button');
const downloadButton = document.getElementById('download-button');
const avatar = document.getElementById('avatar');
const avatarTop = document.getElementById('avatar-top');
const avatarMouth = document.getElementById('avatar-mouth');
const avatarEyes = document.getElementById('avatar-eyes');
const avatarGlasses = document.getElementById('avatar-glasses');
const avatarEyebrows = document.getElementById('avatar-eyebrows');
const avatarBody = document.getElementById('avatar-body');
const avatarPet = document.getElementById('avatar-pet');

const random = (count) => {
    return Math.floor(Math.random() * count) + 1;
}

const setElementSrc = (folder, count) => {
    return `${startPath}/${folder}/${random(count)}.svg`;
}

const generateAvatar = () => {
    avatar.style.backgroundImage = `url(${startPath}/bg/${random(countBg)}.jpg)`;
    avatarTop.src = setElementSrc('top', countTop);
    avatarMouth.src = setElementSrc('mouths', countMouthes);
    avatarEyes.src = setElementSrc('eyes', countEyes);
    avatarGlasses.src = setElementSrc('glasses', countGlasses);
    avatarEyebrows.src = setElementSrc('eyebrows', countEyebrows);
    avatarBody.src = setElementSrc('body', countBody);
    avatarPet.src = setElementSrc('pets', countPets);
}

addEventListener('load', () => generateAvatar());

generateButton.addEventListener('click', generateAvatar);
downloadButton.addEventListener('click', () => {
    html2canvas(avatar).then(canvas => {
        document.body.appendChild(canvas);
        const image = canvas.toDataURL();

        const link = document.createElement('a');
        link.download = 'avatar.png';
        link.href = image;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        document.body.removeChild(canvas);
    });
});