// Select the correct HTML elements based on your HTML file
const storyText = document.getElementById('text-box'); // Updated from 'story-text' to 'text-box'
const optionsContainer = document.getElementById('options-container');

console.log("Script loaded successfully!"); // Debugging line

// Dinner Date Story Object
const story = {
  start: {
    text: "Valentine’s Day is coming up, and I’ve been thinking… What’s your dream date? Something chill, adventurous, or maybe a mix of both?",
    options: [
      { text: "A cozy dinner under the stars", next: "romantic_evening_arrival" },
      { text: "A chill movie night at home", next: "movie_night_start" }, // Points to movie night
    ]
  },
  romantic_evening_arrival: {
    text: "We arrive at a beautiful outdoor spot. Twinkling lights glow above us, and soft music plays in the background. I gently pull out your chair and smile at you. 'I hope this feels right, my sweet strawberry,' I say softly. I wait for you to sit before taking my seat. You get comfortable, and I lean a little closer, looking at you. 'So, where does my little Shwe Yin Aye wanna sit then? Next to me or across from me?' I keep my hands on the table, waiting for your answer.",
    options: [
      { text: "Next to me", next: "sit_next_to_me" },
      { text: "Across from me", next: "sit_across_from_me" }
    ]
  },
  sit_next_to_me: {
    text: "You sit next to me, and I can’t help but smile. 'This feels nice, my sweet heart,' I say softly. I rest my arm on the table, my fingers barely touching yours. Then, I slowly turn my hand, letting my pinky wrap around yours for a moment before pulling away, acting like nothing happened. I glance at you with a little smirk. 'Comfy, my little dumpling?' I whisper, tilting my head.",
    options: [
      { text: "Smile shyly and nod", next: "order_drinks" },
      { text: "Poke my arm and say, ‘Someone’s clingy~.’", next: "tease_clingy" }
    ]
  },
  tease_clingy: {
    text: "I chuckle softly as you poke my arm. 'Oh, so now I’m clingy?' I tease back, raising an eyebrow. 'Guess I can’t help it when my little strawberry is sitting so close.' I give you a playful grin and lean back slightly, pretending to act all innocent. 'Alright, alright, I’ll behave... or maybe not,' I add with a wink. 'What do you think, my sweet cheesecake? Should I stop being so clingy?'",
    options: [
      { text: "Laugh and say, 'Nope, keep going!'", next: "order_drinks" },
      { text: "Roll your eyes and say, 'Definitely behave!'", next: "order_drinks" }
    ]
  },
  sit_across_from_me: {
    text: "You sit across from me, and I lean forward a bit, resting my arms on the table. 'Guess I’ll have to admire you from over here, my sweet cheesecake,' I joke, flashing you a playful smile. You laugh, and I swear my heart does a little flip. 'Not fair, baby boo,' I add, tilting my head. 'You get to be all cute over there while I sit here missing my little dumpling.' I let out a dramatic sigh, then grin. 'I should’ve kept my strawberry closer… now my life feels incomplete.' I rest my chin on my hand, gazing at you. 'What do you say, my darling Shwe Yin Aye? Gonna make me wait all night, or do I get a little love from across the table?'",
    options: [
      { text: "I smile and shake my head. 'You’re so dramatic'", next: "order_drinks" },
      { text: "Blush and look away", next: "blush_away" }
    ]
  },
  blush_away: {
    text: "Look at you, all shy, my little dumpling. Hiding like that won’t work on me, my sweet cheesecake. You know I could sit here all night just looking at you, right? My baby boo, always making my heart go crazy. Say something, my love, don’t just sit there being all cute. So, drinks, my darling Shwe Yin Aye? Or do I just sit here, lost in the most beautiful view?",
    options: [
      { text: "Nod and smile", next: "order_drinks" }
    ]
  },
  order_drinks: {
    text: "The waiter comes by with menus. 'What are you feeling for drinks, my little dumpling?' I ask with a grin. 'Chocolate or strawberry—they’re both sweet, just like you, my cheesecake.' You raise an eyebrow. 'Are you buttering me up?' you tease. I chuckle, tilting my head. 'Maybe… or maybe I just can’t help spoiling my darling Shwe Yin Aye.' So, what’s it gonna be, my love?",
    options: [
      { text: "Chocolate drink", next: "chocolate_drink_scene" },
      { text: "Strawberry drink", next: "strawberry_drink_scene" }
    ]
  },
  chocolate_drink_scene: {
    text: "You go for the chocolate drink. 'Aww, my chocolaty girl chose chocolate,' I say with a grin. 'Good choice, my little dumpling. Classic, just like you—sweet, warm, and impossible not to love.' I shake my head slightly. 'I knew you'd pick that,' I add. 'It just fits you. Soft, comforting, and something I could never get tired of. Just like you, my sweet cheesecake.' I lean in a little, resting my chin on my hand. 'Even a simple drink feels special because it’s yours.'",
    options: [
      { text: "Press your lips together and nod, full of confidence.", next: "order_food" },
      { text: "You laugh and say, 'See? I told you it was good!'", next: "order_food" }
    ]
  },
  strawberry_drink_scene: {
    text: "You pick the strawberry drink. I smile. 'Of course, my little strawberry picks strawberry.' I tap the table. 'Sweet, soft, and makes me want a taste… just like your lips.' You blink at me, and I smile bigger. 'What? Just saying the truth, my sweetheart.' You shake your head, but I see that little blush. 'How is it?' I ask. You take a sip, and I watch you closely. Then I sigh dramatically. 'Now I really want strawberry... but not from the cup.'",
    options: [
      { text: "Blush and look away", next: "order_food" },
      { text: "Pout and hold out the cup with a Cheeky smile", next: "order_food" }
    ]
  },
  order_food: {
    text: "I look at the menu and say, ‘Have you tried Shwe Yin Aye?’ I pause, then laugh. ‘Of course, you have… my little Shwe Yin Aye would never miss it.’ I smile at you. ‘I know it tastes good, but does it taste better than my strawberry?’ I lean in closer, my voice gentle. ‘No matter what the dish is… my strawberry will always be the sweetest for me.’",
    options: [
      { text: "Order Shwe Yin Aye", next: "shwe_yin_aye_scene" }
    ]
  },
  shwe_yin_aye_scene: {
    text: "The Shwe Yin Aye arrives, and I take a bite. The sweetness melts in my mouth, the coconut milk soft and creamy, the rice chewy, and the ice cool and refreshing. ‘Mmm… this is really good,’ I say, taking another bite. I glance at you with a smile. ‘Sweet, soft, and cool… just like you.’ I pause for a moment, then shake my head. ‘But no matter how good it is, nothing will ever be sweeter than my strawberry.’",
    options: [
      { text: "Feed me a bite", next: "dessert_choice" },
      { text: "Say 'Told you it was good'", next: "dessert_choice" }
    ]
  },
  dessert_choice: {
    text: "After finishing the Shwe Yin Aye, the waiter brings the dessert menu. 'Chocolate or strawberries again?' I joke. 'They remind me of you—sweet and hard to resist.' You laugh. 'Fine, I’ll pick one,' you say. What’s your choice?",
    options: [
      { text: "Chocolate lava cake", next: "cake_scene" },
      { text: "Strawberry cheesecake", next: "cheesecake_scene" }
    ]
  },
  cake_scene: {
    text: "You choose the chocolate lava cake. 'Great choice,' I say. You take a bite and say, 'Amazing.' I feed you a small piece and tease, 'See? Told you it was good.'",
    options: [
      { text: "Feed you a bite", next: "end_scene" },
      { text: "Say 'Nope! Get your own!'", next: "end_scene" }
    ]
  },
  cheesecake_scene: {
    text: "You go for the strawberry cheesecake. 'Strawberries really do suit you,' I say, winking. You take a bite and say, 'This is so good.' I laugh and nudge you. 'Careful, or I might steal the rest,' I tease. You narrow your eyes. 'Only if you share your dessert later,' you counter.",
    options: [
      { text: "Say 'This is the best part of the night!'", next: "end_scene" },
      { text: "Tease you for eating too fast", next: "end_scene" }
    ]
  },
  end_scene: {
    text: "The night feels like a dream, one I never want to wake up from. The soft glow of the lights, the warmth of your hand, the way your eyes shine when you smile—it all feels so perfect, so right. I take a slow breath, just taking in this moment, because I never want to forget it. I gently reach for your hand, holding it carefully like it’s the most precious thing in the world. I run my thumb over your fingers, feeling the warmth, the softness, the comfort that only you give me. 'Thank you for tonight, Grace,' I whisper, my voice full of meaning. 'Not just for tonight, but for being you. For being here with me. For making every little thing feel special.' I pause for a second, searching for the right words. 'I don’t think you even realize how much you mean to me. How every second with you is something I cherish. How just sitting here, talking, laughing, being with you—makes me the happiest person alive.' My fingers tighten around yours, like I never want to let go. 'You make my world brighter, my heart lighter. And I wouldn’t trade this feeling for anything.' You squeeze my hand, and I can see it in your eyes—you feel it too. This isn’t just a date. It’s something more. Something real. Something that makes me want to hold on forever.",
    options: [
      { text: "Restart the experience", next: "start" }
    ]
  }
};

// Movie Night Story Object
const movieNightScenes = {
  movie_night_start: {
    text: "We settle in for a cozy movie night. I set up the blankets, grab some snacks, and turn to you with a smile. 'Alright, my little strawberry, we have two choices tonight. Something magical or something emotional—what’s your pick?' I hold up two movie cases, one in each hand.",
    options: [
      { "text": "Your Name", "next": "your_name_start" },
      { "text": "Inside Out", "next": "inside_out_start" }
    ]
  },

  your_name_start: {
    text: "You pick 'Your Name,' and I smile. 'Good choice, my sweet cheesecake,' I say, setting up the movie. As the story unfolds, I glance at you, watching your expressions. The breathtaking sky, the red string of fate, the longing between them—it all feels so deep. I tilt my head. 'Do you believe in fate, my love?' I ask softly, my fingers lightly brushing yours on the blanket.",
    options: [
      { "text": "Nod and say 'Yes, I think some people are meant to meet.'", "next": "your_name_fate_belief" },
      { "text": "Shake your head and say 'I think we create our own fate.'", "next": "your_name_fate_choice" }
    ]
  },

  your_name_fate_belief: {
    text: "You nod, your eyes reflecting the soft glow of the screen. 'Yes, I think some people are meant to meet.' I smile, leaning a little closer. 'Then I must have been meant to find you, my sweet Shwe Yin Aye.' I gently take your hand, squeezing it lightly. 'And just like Taki and Mitsuha, no matter what, I’d always find my way back to you.'",
    options: [
      { "text": "Smile and squeeze my hand back", "next": "your_name_emotional_scene" },
      { "text": "Tease me and say 'What if I forgot you, huh?'", "next": "your_name_tease" }
    ]
  },

  your_name_fate_choice: {
    text: "You shake your head, looking thoughtful. 'I think we create our own fate.' I grin. 'Then that means I made the best choice ever by choosing you, huh?' I nudge you playfully. 'Even if fate didn’t push us together, I would’ve found you anyway, my little strawberry. Nothing could stop me from loving you.'",
    options: [
      { "text": "Laugh and nudge me back", "next": "your_name_emotional_scene" },
      { "text": "Shake your head and say 'You’re so cheesy.'", "next": "your_name_tease" }
    ]
  },

  your_name_tease: {
    text: "You tilt your head, giving me a teasing look. 'What if I forgot you, huh?' I gasp dramatically. 'Then I’d just have to make you fall for me all over again.' I tap your nose lightly. 'And don’t worry, my love. Even if you forgot, I’d remember for both of us.'",
    options: [
      { "text": "Roll your eyes but smile", "next": "your_name_emotional_scene" },
      { "text": "Say 'Fine, but you better try hard!'", "next": "your_name_emotional_scene" }
    ]
  },

  your_name_emotional_scene: {
    text: "The movie reaches its emotional peak, and I glance at you. The bittersweet music plays, and I gently rest my head against yours. 'No matter what happens, no matter where we go, I want to be with you, my sweet cheesecake.' I whisper, my fingers brushing against yours. 'Even if time tries to pull us apart, I’ll always find you.'",
    options: [
      { "text": "Hold my hand tightly", "next": "movie_night_ending" },
      { "text": "Look at me and whisper 'Me too'", "next": "movie_night_ending" }
    ]
  },

  movie_night_ending: {
    text: "Your Name and Inside Out—two stories, two journeys, yet both speak of love, memories, and holding onto what truly matters.\n\nYour Name showed us that no matter the distance, no matter the odds, love finds its way. Just like Taki and Mitsuha, who held onto each other even when the world tried to pull them apart, I will always find my way to you. No matter where life takes us, no matter how much time passes, you are the name written in my heart—one I will never forget.\n\nInside Out reminded us that every moment—joyful, sad, or bittersweet—shapes who we are. Riley learned that happiness isn’t about having only good times, but about embracing every emotion, every experience, and every change. Just like that, every second with you, every laugh, every blush, every teasing moment, even the awkward ones—it's all part of what makes us us. And I wouldn't trade a single moment of it.\n\nIn the end, both stories teach the same thing: to never let go of what’s precious, to always keep love close, and to cherish the memories that make us who we are. And for me, that’s you. No matter what happens, no matter where life takes us, I will always hold onto you  —  because you are my most beautiful story , Mwahhh Baby boo ကိုယ့်အချစ်.",

    options: [
      { "text": "Restart the experience", "next": "movie_night_start" }
    ]
  },

  // Inside Out Storyline (Added)
  inside_out_start: {
    text: "You pick 'Inside Out,' and I smile. 'Great choice, my sweet strawberry,' I say, setting up the movie. As the story unfolds, I glance at you, watching your expressions. The emotions, the memories, the struggles—it all feels so relatable. I tilt my head. 'Do you ever feel like Joy and Sadness are fighting inside you?' I ask softly, my fingers lightly brushing yours on the blanket.",
    options: [
      { "text": "Nod and say 'Sometimes it’s hard to balance them.'", "next": "inside_out_balance" },
      { "text": "Shake your head and say 'I think I’m mostly Joy.'", "next": "inside_out_joy" }
    ]
  },

  inside_out_balance: {
    text: "You nod thoughtfully. 'Sometimes it’s hard to balance them.' I smile, leaning a little closer. 'That’s okay, my sweet Shwe Yin Aye. Sometimes sadness helps us grow, and joy reminds us to cherish every moment.' I gently take your hand, squeezing it lightly. 'Just like how every emotion shapes us, every moment with you shapes me.'",
    options: [
      { "text": "Smile and squeeze my hand back", "next": "inside_out_emotional_scene" },
      { "text": "Tease me and say 'Are you turning this into a life lesson?'", "next": "inside_out_tease" }
    ]
  },

  inside_out_joy: {
    text: "You shake your head, looking cheerful. 'I think I’m mostly Joy.' I grin. 'Well, you definitely bring a lot of joy into my life, my little strawberry.' I nudge you playfully. 'But even Joy needs a little Sadness sometimes to appreciate the good moments, right?'",
    options: [
      { "text": "Laugh and nudge me back", "next": "inside_out_emotional_scene" },
      { "text": "Shake your head and say 'You’re so philosophical.'", "next": "inside_out_tease" }
    ]
  },

  inside_out_tease: {
    text: "You tilt your head, giving me a teasing look. 'Are you turning this into a life lesson?' I laugh softly. 'Maybe a little, my love. But isn’t it nice to think about how every emotion matters?' I tap your nose lightly. 'Even Sadness has its place, just like how every moment with you is special.'",
    options: [
      { "text": "Roll your eyes but smile", "next": "inside_out_emotional_scene" },
      { "text": "Say 'Fine, but don’t get too deep!'", "next": "inside_out_emotional_scene" }
    ]
  },

  inside_out_emotional_scene: {
    text: "As the credits roll, I squeeze your hand gently. 'Both of these movies… they remind me of us. The way they never gave up, the way they held onto love and memories, no matter what.' I smile. 'No matter what happens, my sweet cheesecake, I’ll always hold onto you.'",
        options: [
      { "text": "Hold my hand tightly", "next": "movie_night_ending" },
      { "text": "Look at me and whisper 'Me too'", "next": "movie_night_ending" }
    ]
  }
};

// Function to display a scene
function displayScene(sceneKey) {
  console.log("Displaying scene:", sceneKey); // Debugging line

  // Find the scene in either story object
  const scene = story[sceneKey] || movieNightScenes[sceneKey];
  if (!scene) {
    console.error(`Scene "${sceneKey}" not found.`);
    return;
  }

  storyText.innerHTML = scene.text; // Use innerHTML instead of textContent
  optionsContainer.innerHTML = "";

  scene.options.forEach(option => {
    const button = document.createElement("button");
    button.textContent = option.text;
    button.classList.add("option-button");

    button.addEventListener("click", () => {
      console.log(`Button clicked: "${option.text}". Navigating to "${option.next}".`);
      displayScene(option.next);
    });

    optionsContainer.appendChild(button);
  });
}

// Start the game
displayScene("start");