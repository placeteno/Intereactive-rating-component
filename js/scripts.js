let submitBtn = document.getElementById('submit-btn');
let cardTwo = document.getElementById('card2');
let ratingNbr = document.querySelector('span');
let ratingOne = document.getElementById('n1');
let ratingTwo = document.getElementById('n2');
let ratingThree = document.getElementById('n3');
let ratingFour = document.getElementById('n4');
let ratingFive = document.getElementById('n5');


function updateRating() {
  ratingOne = ratingOne.className = 'active-rating';
  let rating = document.getElementById("n1").innerHTML;
  ratingNbr.innerHTML = rating;
}


function changeCards() {
  cardTwo = cardTwo.style.zIndex = '1';
}

ratingOne.addEventListener('click', updateRating);
submitBtn.addEventListener('click', changeCards);