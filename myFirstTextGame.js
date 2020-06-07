//Message options.
const messages = {
  A: "Hey, do you like traveling?",
  B1: "Well, it was nice talking to ya",
  B2: "Ever wanted a free trip to Hawaii? ",
  B3: "If you can answer three questions correctly here today in Travel Trivia, YOU could win an all expense paid trip to Hawaii. Would you like to play ?",
  B4: "LETS GET TO IT !!!",
  C: "Great job. Two more to go.",
  DQ: "Is Hawaii a Country, Continent, Nation, State, City, or Region ? (case sensitive) ",
  EQ: "What year was Hawaii admitted to the USA ? (YYYY) ",
  FQ: "You seem pretty smart. The next question is inside of this van, will you get in the van ?",
  GQ: "Would you still like to go to Hawaii?",
  HQ: "You have to take a pill, will it be the blue or the red ?" ,
  IQ: "abc",
  I: "That's the correct answer. Would you like to keep playing?",
  J: "Dont be a quiter, your trip awaits.",
  JJ: "Dont just give up.",
  JJJ: "Last chance, are you sure you want to stop trying ?",
  JJJJ: "Good sport. Now lets try this again. Remember, your trip awaits.",
  JJJJJ: "Good sport. Remember...your trip awaits.",
  K: "That is not correct, try again.",
  L: "C'mon! Try one more time! Last try...",
  M: "You have some studying to do. Try again next year!",
  O:"YOU HAVE WON AN ALL EXPENSE PAID TRIP TO HAWAII!!!!! GET THOSE BAGS TOGETHER !!",
  //Story Information Alerts 
  P: "*THE VAN DOOR CLOSES IMMEDIATELY AND YOU ARE BLIND FOLDED AND TIED UP. THE VAN SWIFTLY DRIVES AWAY*",
  //Failing Stories/ Red Pill
  Q: "*A MAN JUMPS OUT OF THE VAN. YOU FRANTICLY RUN AND GET HIT BY A CAR*",
  R: "*YOU PASS OUT FROM FEAR AND WAKE UP ALONE IN A ALLEY MISSING A KIDNEY*",
  RR: "*YOU TAKE THE PILL AND PASS OUT. YOU SUDDENLY AWAKE MID-AIR FALLING FROM THE SKY*",
  RS: "*ARE YOU RIDICULOUS ROCKET LAUNCHERS ARE HORRIBLE CLOSE RANGE. EVERYTHING EXPLODES AND YOU DIE*",
  RSS: "*YOU SILLY PERSON, THE TIGER QUICKLY EATS YOU*",
  RSSS: "*THE GUN JAMS AND THE TIGER SLOWLY EATS YOU*",

  //Winning Stories/ Blue Pill
  S: "*YOU TAKE THE PILL AND PASS OUT. YOU SUDDENLY AWAKE FLOATING IN A BOAT IN AN OCEAN WITH A TIGER, A VOICE SPEAKS*",
  SS: "You have 4 choices of weapon for your life, choose wisely: Rocket Launcher, Shark, Knife, Gun ",
  SSS: "*A SHARK JUMPS OUT OF THE WATER KNOCKING THE TIGER IN AND EATING IT*",

}
function beginGame() {
  const response = confirm(messages.A);
  if (response) {introductions()} 
  else {
  alert(messages.B1)
}
  }
function introductions() {
  const response = confirm(messages.B2)
  if (response) {letsPlay()}
else {
  alert(messages.B1);
}
} 
function letsPlay() {
  const response = confirm(messages.B3)
  if (response) {
    alert(messages.B4);
    triviaTime();}
else {
  alert(messages.B1);
}
}
function triviaTime() {
const response = prompt(messages.DQ)
if (response === 'State') {
  const nextQuestion = confirm(messages.I)
  if (nextQuestion) {
    alert(messages.B4);
    questionTwo();} else {
      alert(messages.J);
      alert(messages.JJ);
      quitters();
    }
}
else {
  alert(messages.K);
  triviaTime();
}
}

function questionTwo() {
  const response = prompt(messages.EQ)
  if (response == 1959) {
    const nextQuestion = confirm(messages.I)
    if (nextQuestion) {
      alert(messages.B4);
      questionThree();} else {
        alert(messages.J);
        alert(messages.JJ);
        quitters();
      }
    
  }
  else {
    alert(messages.K);
    questionTwo()
  }
}
function questionThree() {
  const nextNextQuestion = confirm(messages.FQ)
  if (nextNextQuestion) {
    alert(messages.P);
    adventureTime();} else {
      alert(messages.Q)
    }
  }
function adventureTime() {
  const adventure = confirm(messages.GQ)
  if (adventure) {
    alert(messages.JJJJJ)
    adventureSplit()} else {
      alert(messages.R)
    }
}

function adventureSplit() {
  const realAdventure = prompt(messages.HQ)
  if (realAdventure == "blue") {
    alert(messages.S);
    bluePill()} 
  else if (realAdventure == "red")  {
    alert(messages.RR);
    redPill()}

}
function bluePill() {
  const blueAdventure = prompt(messages.SS)
  if (blueAdventure == "Rocket Launcher") {
    alert(messages.RS);}
  else if (blueAdventure == "Shark") {
    alert(messages.SSS);
    welcomeToHawaii();
  }
  else if (blueAdventure == "Knife"){
    alert(messages.RSS);}
  else if (blueAdventure == "Gun") {
    alert(messages.RSSS);}
  }
//When people want to quit we run this function.
function quitters() {
  const willYouQuit = confirm(messages.JJJ)
  if (willYouQuit) {
    alert(messages.B1)
  } else {
   alert(messages.JJJJ);
   triviaTime();}
    }




//Start the Game here.
beginGame();
