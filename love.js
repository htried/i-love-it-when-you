var c = 0;

var when = [
  "make perfect french press coffee",
  "crinkle your eyes with a smile",
  "call me Halibut",
  "start crying because you're laughing so hard",
  "take car maintenance seriously",
  "tell me about your day",
  "walk like a gremlin",
  "send me check-in texts throughout the day",
  "are near me",
  "live your beliefs as fully as you can",
  "smell like cocoa butter",
  "get as excited as I do about Isobel walking and talking",
  "have a heart that beats so hard I can feel it while we're hugging",
  "take the high harmony on Shallow",
  "open my mind to new things",
  "beat me every time at bananagrams",
  "tell me stories that I've heard a dozen times (I always want to hear them again)",
  "care about the wellbeing of others",
  "give me a kiss goodbye",
  "give me two kisses goodbye",
  "take pride in your siblings",
  "fill everyone you surround with love",
  "feel calm",
  "spend all day driving around doing mutual aid",
  "push me to keep my Duolingo streak up",
  "speak your mind, even when it's hard",
  "dance with me until we're both sweating from the exertion",
  "go in the \"Other Room\" when one of us needs to pee",
  "lose your mind because you're eating an amazing bagel",
  "are the world's best media critic",
  "succeed",
  "do the Kermit dance to the succession theme song",
  "get out of bed by saying \"1, 2, 3, motivate!\"",
  "tell me that I have beautiful eyes",
  "buy yourself a treat",
  "laugh at my jokes, even though we both know they aren't actually funny",
  "make messes",
  "send me Instagram Reels of babies and animals",
  "are honest with your feelings",
  "tip more than 20%",
  "(lovingly) debate politics with me",
  "take notes in beautiful cursive",
  "investigate yourself",
  "explain intricate Twitter beef to me",
  "get excited about things",
  "are present",
  "drink sour monkeys with me",
  "sit on the floor and play guitar and sing",
  "use the panorama photo function to be either really short or really long",
  "wonder at the beauty of the mountains and the sea",
  "touch my hair",
  "warm up cold sheets",
  "read with me",
  "support me when I take a risk",
  "scream with me at the end of \"I Know the End\"",
  "roll the windows down",
  "text me from across the room",
  "clean up messes",
  "indulge me when I go down Wikipedia rabbit holes",
  "do a split",
  "educate me on the importance of the musical canon",
  "make a mess",
  "tell me when I get so caught in the moment that I've started shouting",
  "construct a Spotify playlists that are a <em>work of art</em>",
  "tell me that I'm smart",
  "cook a meal for your loved ones",
  "edit my writing",
  "add vibrato to held notes when you're singing",
  "help",
  "tell me to buy that thrift store item",
  "touch my hand",
  "tell people to get that tattoo",
  "slow dance with me",
  "hug me hard",
  "go to sleep with me",
  "send me something that made you smile",
  "think about me",
  "are yourself"
  ]


function shuffle(array) {
  array.sort(() => Math.random() < 0.5);
}

// shuffle on start
$(function () {
  shuffle(when);
});


$(document).click(function (e) {
  // Check for left button
  if (e.button == 0) {

    //    console.log(c + ": " + when[c]);

    $("<p>" + when[c] + "</p>").hide().prependTo("#when-you").fadeIn(2000);

    c++;

    if (c == when.length) {

      $("<p>love me too </p>").hide().prependTo("#when-you").fadeIn(2000);

      $("body").css('background', '#000');
      $("#g p").css('color', '#fff');

      $(document).unbind("click");

    }

  }
});
