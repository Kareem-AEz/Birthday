const blob= document.getElementById("blob");

document.body.onpointermove = Event => {
    const {clientX, clientY} = Event;

    blob.animate({
        left: `${clientX}px`,
        top: `${clientY}px`
    }, {duration: 3000, fill: "forwards"});
}

const elements= [
    "🎉 Happy birthday to someone who makes every day brighter! May your special day be as wonderful as you are. 🥳",
    "🎂 Wishing you a year filled with love, laughter, and all the things that bring you joy. Happy birthday! 🎈",
    "🕰️ Another year older, another year wiser. May your birthday be filled with wisdom and happiness! 🎁",
    "🥂 On your birthday, may you be surrounded by friends, family, and all the love in the world. Cheers to a fantastic year ahead! 🎉",
    "🍰 Birthdays are nature's way of telling us to eat more cake! Enjoy every delicious moment of your special day. 🎂",
    "🌟 Here's to a year filled with new adventures and exciting opportunities. Happy birthday, and may all your dreams come true! 🎈",
    "🌼 A birthday is a time to reflect on the precious moments of the past and embrace the exciting journey ahead. Happy birthday! 🎂",
    "🕯️ As you blow out the candles, may all your wishes come true. Happy birthday and make it a day to remember! 🎁",
    "🌞 You're not getting older; you're getting better! Wishing you a birthday filled with endless joy and happiness. 🥳",
    "🌈 May this year bring you more laughter, more love, and more reasons to smile. Happy birthday! 🎉",
    "🌍 To the world, you may just be one person, but to me, you are the world. Happy birthday, my dear friend! 🎈",
    "🌟 Age is merely the number of years the world has been enjoying you. Keep spreading your warmth and positivity. Happy birthday! 🎁",
    "🎁 Every day is a gift, but today is the one we unwrap with extra excitement. Happy birthday, and savor every moment! 🥂",
    "🌟 May your birthday be the start of a year filled with good luck, good health, and much happiness. Enjoy your special day! 🎂",
    "🌟 Here's to another 365 days of adventures, smiles, and beautiful memories. Happy birthday! 🎈",
    "✨ Birthdays are like stars in the sky; you may not always see them, but you know they're there to brighten your life. Happy birthday! 🌠",
    "🍰 Wishing you a day that's as sweet as the cake and as bright as the candles on it. Happy birthday! 🎉",
    "🥳 You're not just a year older; you're a year wiser, more fabulous, and more fantastic. Happy birthday! 🌟",
    "🌟 Age is just a number, and you're proving that every day. Keep shining brightly. Happy birthday! 🎈",
    "🎈 May your birthday be filled with love, laughter, and all the things that make life beautiful. Cheers to a remarkable year ahead! 🥂",
    "🌟 Your birthday is the perfect time to shine and let your inner light brighten the world. Happy birthday, superstar! 🎉🌟",
    "🎂 May your day be as sweet as the cake, as colorful as balloons, and as joyful as confetti! Happy birthday! 🍰🎈🎊",
    "🎁 Another year, another adventure! May this year bring you exciting journeys and wonderful memories. Happy birthday, explorer! 🌍✈️",
    "🌸 On your special day, may your heart be as light as a feather, and your dreams take flight like a butterfly. Happy birthday! 🦋🌼",
    "🥂 Cheers to a fabulous year filled with laughter, love, and lots of sparkling moments. Happy birthday, dear friend! 🥳🥂🎈",
    "🌈 Embrace this new chapter with open arms and a heart full of hope. Your future is as bright as a rainbow! Happy birthday! 🌈🌟",
    "🎈 Birthdays are like a fresh start button in the game of life. Press it with excitement and make the most of your year! 🎮🎁",
    "🚀 Blast off into a year of new adventures, achievements, and cosmic joy! Happy birthday, space explorer! 🌌🚀🎉",
    "🌞 May your birthday be as warm and sunny as your smile, and may your day be filled with endless positivity. Happy birthday! ☀️🎂",
    "🌟 Here's to celebrating the incredible person you are and all the wonderful things you've achieved. Happy birthday, star! 🌟🎈",
    "🐾 Another year, another lap around the sun! May your journey be as wild and exciting as a safari. Happy birthday, adventurer! 🌍🦁",
    "🎶 Let the music of life play on your special day, and may the rhythm of happiness never stop. Happy birthday, music lover! 🎵🎉",
    "🎨 Your life is a beautiful canvas, and every day is a stroke of vibrant colors. Keep painting your masterpiece! Happy birthday, artist! 🎨🌈",
    "🎂 Age is just a number, and you're proving that with style and grace. Here's to you and all your amazing qualities. Happy birthday! 🥳🎁",
    "🚲 Life is a journey, and a birthday is the perfect pit stop to appreciate the scenery and plan the next adventure. Happy birthday, traveler! 🌄🚗",
    "🌟 Every day with you is a gift, but today, let's unwrap the joy and celebrate like there's no tomorrow. Happy birthday! 🎁🎉🥂",
    "🌼 May your birthday bloom with happiness, and may your life be filled with beautiful moments and cherished memories. Happy birthday! 🌸🎂",
    "🍀 May luck and laughter follow you wherever you go in the coming year. Happy birthday, and may your days be filled with good fortune! 🍀🎈🎉",
    "🌠 As the stars twinkle in the night sky, may your dreams twinkle with hope and promise. Happy birthday, dreamer! 🌌✨🎁",
    "🎈 Today, you're not just a year older; you're a year wiser and a year more fabulous! Happy birthday, ageless wonder! 🥳🎂🌟",
    "🎉 Another year, another reason to celebrate your incredible journey! May your birthday be filled with love, laughter, and unforgettable moments. Happy birthday! 🎂",
    "🎈 On this special day, I hope your heart is as light as a balloon, and your day is as colorful as a rainbow. Happy birthday, my dear friend! 🌈🥳",
    "🎁 Birthdays are the milestones of life, and you've reached another amazing one. May this year be filled with new achievements and wonderful memories. Happy birthday! 🎊",
    "🌟 Shine bright like the star you are on your special day! May your birthday be filled with happiness, surrounded by loved ones. 🌟🎂",
    "🍰 Life is short, so savor every bite of cake and every moment of joy on your birthday. Wishing you sweetness and laughter today and always. Happy birthday! 🎉🎈",
    "🥂 Raise a glass to the fantastic person you've become! May this year bring you success, good health, and endless happiness. Happy birthday! 🥳🍾",
    "🎈 Like a fine wine, you only get better with age. Cheers to another year of awesomeness! Happy birthday, my timeless friend! 🍷🎉",
    "🎁 Every candle on your cake represents a year of blessings, laughter, and love. May your birthday be as bright as those candles. Happy birthday! 🕯️🎂",
    "🌟 Another trip around the sun and you're still shining brightly! May your birthday be filled with warmth, joy, and the love of those who cherish you. 🌞🥳",
    "🎂 Today is your day to eat cake, make a wish, and celebrate another amazing year of life. May your dreams come true! Happy birthday! 🍰🎉",
    "🌈 Life is a beautiful journey, and birthdays are the colorful stops along the way. May your path be filled with love and adventure. Happy birthday, explorer! 🌍🎈",
    "🌟 Birthdays are a reminder of the precious gift of life. Embrace it, celebrate it, and make every moment count. Happy birthday, my dear! 🎁🎉",
    "🚀 Blast off into another year of greatness! May your birthday be filled with thrilling adventures and discoveries. Happy birthday, explorer of the unknown! 🌌🚀",
    "🥳 Happy birthday to someone who brings joy and happiness wherever they go! May your special day be just as bright as your smile. 🌞🎂",
    "🎈 Like a fine work of art, you've crafted a beautiful life. Here's to adding more vibrant colors to your canvas! Happy birthday, artist of life! 🎨🌟",
    "🎶 Life is a symphony, and your birthday is the most beautiful note in it. May your day be filled with sweet melodies and harmonious moments. Happy birthday, maestro! 🎵🎂",
    "🌟 Today, you're not just a year older; you're a year wiser and more amazing than ever. Keep shining brightly! Happy birthday, superstar! 🌟🎉",
    "🎁 Your birthday is a gift to the world because you brighten it with your presence. May your day be as special as you are. Happy birthday! 🎈🎂",
    "🍰 Another year, another layer of sweetness added to your life. May your day be filled with delicious moments and unforgettable memories. Happy birthday! 🎉🥳",
    "🌈 As you celebrate another year, may your days be filled with rainbows of hope, love, and endless possibilities. Happy birthday! 🌈🌟"
]

function rand(phrases) {
    var num = phrases.length;
    x = Math.random() * num;
    y = Math.floor(x);
    return y;
}
const title= document.querySelector(".title");
title.addEventListener("mouseenter", () => {
    console.log("mouse enter");
    jsConfetti.addConfetti ({
        confettiColors: ['#ff69b4', '#ff1493', '#ff6f61', '#ff4500', '#ffc107', '#ff9800']
    })
})

const button= document.querySelector(".button_container");
const text= document.querySelector(".text");

const confetti_libs = [
    {
        confettiColors: ['#ff69b4', '#ff1493', '#ff6f61', '#ff4500', '#ffc107', '#ff9800'],
        emojis: ['🎉', '🍰', '🎈', '🎁', '🌟', '🥳']
    },
    {
        confettiColors: ['#00bcd4', '#009688', '#03a9f4', '#4caf50', '#2196f3', '#e91e63'],
        emojis: ['🎂', '🎊', '🌈', '🥂', '✨', '🎶']
    },
    {
        confettiColors: ['#ff5722', '#673ab7', '#795548', '#607d8b', '#ff5722', '#ffeb3b'],
        emojis: ['🎁', '🎆', '🎵', '🎉', '💖', '🎈']
    }
    // Add more objects with cheerful and relevant options as needed
];

button.addEventListener("click", () => {
    const randomIndex = rand(elements); // Get a random index
    text.innerHTML = elements[randomIndex]; // Set the innerHTML to the random message

    // Randomly choose one of the confetti libraries
    const randomConfettiLib = confetti_libs[Math.floor(Math.random() * confetti_libs.length)];

    // Randomly choose between confettiColors and emojis within the selected library
    const randomChoice = Math.random() < 0.5 ? randomConfettiLib.confettiColors : randomConfettiLib.emojis;

    // Trigger the confetti effect with the randomly chosen option
    jsConfetti.addConfetti({
        [randomChoice === randomConfettiLib.confettiColors ? 'confettiColors' : 'emojis']: randomChoice
    });

    console.log(randomIndex);
    console.log("Got clicked");
});



const canvas = document.getElementById('#confetti');
const jsConfetti = new JSConfetti()
