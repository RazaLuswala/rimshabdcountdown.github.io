
const countdown = document.getElementById("countdown");
const messageBox = document.getElementById("daily-message");

const birthday = new Date("May 4, 2026 00:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = birthday - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s until this beautiful person's birthday!`;
}

setInterval(updateCountdown, 1000);

// Daily messages (from April 15 to May 4)
const messages = {
    "4/13": "Every thing turns to gold by your touch !",
    "4/14": "No girl can outshine you, those moons get light from you !",
    "4/15": "You're one of the kindest souls I've ever met.",
    "4/16": "Your presence makes ordinary days special.",
    "4/17": "Every chat with you brightens my mood.",
    "4/18": "Your thoughts are always so deep and meaningful.",
    "4/19": "You are calm, strong, and beautiful inside out.",
    "4/20": "I’m lucky to have you as my closest friend.",
    "4/21": "Thank you for always being genuine.",
    "4/22": "You’re the kind of person this world needs more of.",
    "4/23": "Your words stay with me longer than you know.",
    "4/24": "You make even silence feel warm.",
    "4/25": "You're more special than I can put into words.",
    "4/26": "You carry light within you that no sun can match.",
    "4/27": "May you always smile like you deserve to, may the entire world serve you with love u deserve.",
    "4/28": "You're a rare bouquet of grace and strength, dimond is inspired by you.",
    "4/29": "Your presence is peace itself, we can write Rimsha instead of peace.",
    "4/30": "Even the stars envy your glow, coz they can't shine like your eyes.",
    "5/1":  "Your friendship is a gift I’ll never take for granted.",
    "5/2":  "Thank you for existing the way you do.",
    "5/3":  "May you receive the bestest wishes and love in the upcoming year, One day left for the most special soul to celebrate.",
    "5/4":  "Happy Birthday 🎂🎈🎉🌟✨, Rimsha👑! The countdown is now over, as the Greatest & Kindest Queen's special day is here. The world is better with you in it, so be happy in this year and in every year of your life. 🎉"
};

function revealMessage() {
    const today = new Date();
    const key = `${today.getMonth() + 1}/${today.getDate()}`;
    messageBox.innerText = messages[key] || "A little too early... come back tomorrow 🌸";
}
7
