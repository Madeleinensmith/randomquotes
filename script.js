// var quotes = ["Change your life today. Don't gamble on the future, act now, without delay.",
// "Infuse your life with action. Don't wait for it to happen. Make it happen. Make your own future. Make your own hope. Make your own love. And whatever your beliefs, honor your creator, not by passively waiting for grace to come down from upon high, but by doing what you can to make grace happen... yourself, right now, right down here on Earth.",
// "Good, better, best. Never let it rest. 'Til your good is better and your better is best.",
// "Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.",
// "Beginning today, treat everyone you meet as if they were going to be dead by midnight. Extend to them all the care, kindness and understanding you can muster, and do it with no thought of any reward. Your life will never be the same again.",
// "With the new day comes new strength and new thoughts.",
// "The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
// "Neither man nor woman is perfect or complete without the other. Thus, no marriage or family, no ward or stake is likely to reach its full potential until husbands and wives, mothers and fathers, men and women work together in unity of purpose, respecting and relying upon each other's strengths.",
// "Security is mostly a superstition. It does not exist in nature, nor do the children of men as a whole experience it. Avoiding danger is no safer in the long run than outright exposure. Life is either a daring adventure, or nothing.",
// "I prefer to be true to myself, even at the hazard of incurring the ridicule of others, rather than to be false, and to incur my own abhorrence. "]
// var randomQuote = Math.random()
// console.log(randomQuote);

var quotes = ["Change your life today. Don't gamble on the future, act now, without delay.",
"Infuse your life with action. Don't wait for it to happen. Make it happen. Make your own future. Make your own hope. Make your own love. And whatever your beliefs, honor your creator, not by passively waiting for grace to come down from upon high, but by doing what you can to make grace happen... yourself, right now, right down here on Earth.",
"Good, better, best. Never let it rest. 'Til your good is better and your better is best.",
"Believe in yourself! Have faith in your abilities! Without a humble but reasonable confidence in your own powers you cannot be successful or happy.",
"Beginning today, treat everyone you meet as if they were going to be dead by midnight. Extend to them all the care, kindness and understanding you can muster, and do it with no thought of any reward. Your life will never be the same again.",
"With the new day comes new strength and new thoughts.",
"The will to win, the desire to succeed, the urge to reach your full potential... these are the keys that will unlock the door to personal excellence.",
"Neither man nor woman is perfect or complete without the other. Thus, no marriage or family, no ward or stake is likely to reach its full potential until husbands and wives, mothers and fathers, men and women work together in unity of purpose, respecting and relying upon each other's strengths.",
"Security is mostly a superstition. It does not exist in nature, nor do the children of men as a whole experience it. Avoiding danger is no safer in the long run than outright exposure. Life is either a daring adventure, or nothing.",
"I prefer to be true to myself, even at the hazard of incurring the ridicule of others, rather than to be false, and to incur my own abhorrence. "]
var button = document.getElementById("button");

button.addEventListener("click", function(){
  //returns a decimal between 0 and 1
  var randomQuote = Math.random();
  console.log(randomQuote);

  //gives bigger number, through multiplication
  var randomNumBig = randomQuote * quotes.length;
  console.log(randomNumBig);

  //rouns number to an integer
  var randomRound = Math.floor(randomNumBig);
  console.log(randomRound);

  //returning a name with the equation
  console.log(quotes [randomRound]);

  document.querySelector("p").innerHTML = (quotes[randomRound]);
});
