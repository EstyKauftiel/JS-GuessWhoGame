const imageContainer = document.getElementById("image-container"); 
let sumPoints = 120, countSuccesses = 0;
let flagHeadband = false, flagEyes = false, flagBags = false, flagMouth = false;
let flagWrongRedHeadband = false, flagWrongGreenHeadband = false, flagWrongBlueHeadband = false, flagWrongPurpleHeadband = false,
  flagWrongRedEyes = false, flagWrongGreenEyes = false, flagWrongBlueEyes = false, flagWrongPurpleEyes = false,
  flagWrongRedBags = false, flagWrongGreenBags = false, flagWrongBlueBags = false, flagWrongPurpleBags = false,
  flagWrongRedMouth = false, flagWrongGreenMouth = false, flagWrongBlueMouth = false, flagWrongPurpleMouth = false;

const allFeatures = [
  "../imgs/features2/green headband.png",
  "../imgs/features2/purple headband.png",
  "../imgs/features2/blue headband.png",
  "../imgs/features2/red headband.png",
  "../imgs/features2/green eyes.png",
  "../imgs/features2/purple eyes.png",
  "../imgs/features2/blue eyes.png",
  "../imgs/features2/red eyes.png",
  "../imgs/features2/green handbag.png",
  "../imgs/features2/purple handbag1.png",
  "../imgs/features2/blue handbag1.png",
  "../imgs/features2/red handbag1.png",
  "../imgs/features2/green mouth.png",
  "../imgs/features2/purple mouth.png",
  "../imgs/features2/blue mouth.png",
  "../imgs/features2/red mouth.png"
];
createFeatures();

let p = document.createElement("p");
p.innerHTML="YOUR SCORE:";
p.style.fontSize="25px";
let br=document.createElement("br");
let br2=document.createElement("br");

document.getElementById("score").appendChild(br);
document.getElementById("score").appendChild(p);
document.getElementById("score").style.textAlign="center";
document.getElementById("score").style.color="white";


const myGirl=document.createElement("img")
myGirl.src="../imgs/girl2.png";
myGirl.style.width='550px';
myGirl.style.height='600px';
document.getElementById("girlSpan").appendChild(myGirl);

function createFeatures() {
  let counter = 0;
  allFeatures.forEach(imageUrl => {
    counter++;
    const imgElement = document.createElement("img");
    imgElement.classList.add("images")
    imgElement.setAttribute("src", imageUrl);
    imgElement.setAttribute("id", counter);
    imgElement.addEventListener("click", () => guessedFeatures(imageUrl, imgElement.id));
    imageContainer.appendChild(imgElement);
    if (counter <= 4)
      imgElement.classList.add("headband")
    else if (counter <= 8)
      imgElement.classList.add("eyes")
    else if (counter <= 12)
      imgElement.classList.add("handbag")
    else
      imgElement.classList.add("mouth")
    if (counter % 4 == 0) {
      let br = document.createElement("br");
      imageContainer.appendChild(br);
    }
  });
}

const headband = [
  "../imgs/features2/green headband.png",
  "../imgs/features2/purple headband.png",
  "../imgs/features2/blue headband.png",
  "../imgs/features2/red headband.png"
];
const eyes = [
  "../imgs/features2/green eyes.png",
  "../imgs/features2/purple eyes.png",
  "../imgs/features2/blue eyes.png",
  "../imgs/features2/red eyes.png"
];
const mouths = [
  "../imgs/features2/green mouth.png",
  "../imgs/features2/purple mouth.png",
  "../imgs/features2/blue mouth.png",
  "../imgs/features2/red mouth.png"
];
const bags = [
  "../imgs/features2/green handbag.png",
  "../imgs/features2/purple handbag1.png",
  "../imgs/features2/blue handbag1.png",
  "../imgs/features2/red handbag1.png"
];


const generatedHeadband = generateFeature(headband);
const generatedEyes = generateFeature(eyes);
const generatedMouth = generateFeature(mouths);
const generatedBags = generateFeature(bags);

function generateFeature(features) {
  const randomIndex = Math.floor(Math.random() * features.length);
  return features[randomIndex];
}

function guessedFeatures(imageUrl, id) {
  if (id < 5)
    guessedHeadbandFunc(imageUrl, id);
  else if (id < 9)
    guessedEyesFunc(imageUrl,id);
  else if (id < 13)
    guessedBagsFunc(imageUrl, id);
  else
    guessedMouthFunc(imageUrl, id);
}

function guessedHeadbandFunc(imageUrl, id) {
  if (generatedHeadband == imageUrl) {
    if (flagHeadband == false) {
      countSuccesses++;
      flagHeadband = true;
      let img1 = document.createElement('img')
      img1.setAttribute("src", imageUrl)
      document.getElementById("headbandSpan").appendChild(img1)
    }
    right_sound();
    if (countSuccesses == 4) 
    {
       timeout_id2 = setTimeout("win_sound()", 2200);
       timeout_id1 = setTimeout("win()", 5000); 
    }
  }
  else {
    if (flagHeadband == false) {
      switch (id) {
        case "1":
          {
            if (flagWrongGreenHeadband == false) {
              flagWrongGreenHeadband = true;
              sumPoints -= 10;
              pointsFunc();
            }
            break;
          }
        case "2":
          {
            if (flagWrongPurpleHeadband == false) {
              flagWrongPurpleHeadband = true;
              sumPoints -= 10;
              pointsFunc();
            }
            break;
          }
        case "3":
          {
            if (flagWrongBlueHeadband == false) {
              flagWrongBlueHeadband = true;
              sumPoints -= 10;
              pointsFunc();
            }
            break;
          }
        case "4":
          {
            if (flagWrongRedHeadband == false) {
              flagWrongRedHeadband = true;
              sumPoints -= 10;
              pointsFunc();
            }
            wrong_sound();
            break;
          }
        default:
          {
            break;
          }

      }
    }
    wrong_sound();
  }
}

function guessedEyesFunc(imageUrl, id) {
  if (generatedEyes == imageUrl) {
    if (flagEyes == false) {
      countSuccesses++;
      flagEyes = true;
      let img2 = document.createElement('img')
      img2.setAttribute("src", imageUrl)
      document.getElementById("eyesSpan").appendChild(img2)
    }
    right_sound();
    if (countSuccesses == 4)
    {
      timeout_id2 = setTimeout("win_sound()", 2200);
      timeout_id1 = setTimeout("win()", 5000);
    }
  }
  else {
    if (flagEyes == false) {
      switch (id) {
        case "5":
          {
            if (flagWrongGreenEyes == false) {
              flagWrongGreenEyes = true;
              sumPoints -= 10;
              pointsFunc();
            }
            break;
          }
        case "6":
          {
            if (flagWrongPurpleEyes == false) {
              flagWrongPurpleEyes = true;
              sumPoints -= 10;
              pointsFunc();
            }
            break;
          }
        case "7":
          {
            if (flagWrongBlueEyes == false) {
              flagWrongBlueEyes = true;
              sumPoints -= 10;
              pointsFunc();
            }
            break;
          }
        case "8":
          {
            if (flagWrongRedEyes == false) {
              flagWrongRedEyes = true;
              sumPoints -= 10;
              pointsFunc();
            }
            wrong_sound();
            break;
          }
        default:
          {
            break;
          }
      }
    }
    wrong_sound();
  }
}
function guessedBagsFunc(imageUrl,id) {
  if (generatedBags == imageUrl) {
    if (flagBags == false) {
      countSuccesses++;
      let img4 = document.createElement('img')
      img4.setAttribute("src", imageUrl)
      document.getElementById("bagsSpan").appendChild(img4)
      flagBags = true;
    }
    right_sound();
    if (countSuccesses == 4)
    {
       timeout_id2 = setTimeout("win_sound()", 2200);
       timeout_id1 = setTimeout("win()", 5000);
    }
  }
  else {
    if (flagBags == false) {
      switch (id) {
        case "9":
          {
            if (flagWrongGreenBags == false) {
              flagWrongGreenBags = true;
              sumPoints -= 10;
              pointsFunc();
            }
            break;
          }
        case "10":
          {
            if (flagWrongPurpleBags == false) {
              flagWrongPurpleBags = true;
              sumPoints -= 10;
              pointsFunc();
            }
            break;
          }
        case "11":
          {
            if (flagWrongBlueBags == false) {
              flagWrongBlueBags = true;
              sumPoints -= 10;
              pointsFunc();
            }
            break;
          }
        case "12":
          {
            if (flagWrongRedBags == false) {
              flagWrongRedBags = true;
              sumPoints -= 10;
              pointsFunc();
            }
            wrong_sound();
            break;
          }
        default:
          {
            break;
          }
      }
    }
    wrong_sound();
  }
}
function guessedMouthFunc(imageUrl,id) {
  if (generatedMouth == imageUrl) {
    if (flagMouth == false) {
      countSuccesses++;
      flagMouth = true;
      let img3 = document.createElement('img')
      img3.setAttribute("src", imageUrl)
      document.getElementById("mouthSpan").appendChild(img3)
    }
    right_sound();
    if (countSuccesses == 4)
    {
      timeout_id2 = setTimeout("win_sound()", 2200);
      timeout_id1 = setTimeout("win()", 5000);
    }
  }
  else {
    if (flagMouth == false) {
      switch (id) {
        case "13":
          {
            if (flagWrongGreenMouth == false) {
              flagWrongGreenMouth = true;
              sumPoints -= 10;
              pointsFunc();
            }
            break;
          }
        case "14":
          {
            if (flagWrongPurpleMouth == false) {
              flagWrongPurpleMouth = true;
              sumPoints -= 10;
              pointsFunc();
            }
            break;
          }
        case "15":
          {
            if (flagWrongBlueMouth == false) {
              flagWrongBlueMouth = true;
              sumPoints -= 10;
              pointsFunc();
            }
            break;
          }
        case "16":
          {
            if (flagWrongRedMouth == false) {
              flagWrongRedMouth = true;
              sumPoints -= 10;
              pointsFunc();
            }
            wrong_sound();
            break;
          }
        default:
          {
            break;
          }
      }
    }
    wrong_sound();
  }
}

function wrong_sound() {
  let audio = new Audio('../audio/fail2.mp3');
  audio.play();
  return;
}
function right_sound() {
  let audio = new Audio('../audio/success.mp3');
  audio.play();
}

function win_sound(){
  let audio = new Audio('../audio/win.mp3');
  audio.play();
}


pointsFunc = () => {

  document.getElementById("points").innerHTML =sumPoints;
  document.getElementById("points").style.color = "white";
  document.getElementById("points").style.textAlign="center";
}
function win() {
  window.location = "../html/win.html";
}

