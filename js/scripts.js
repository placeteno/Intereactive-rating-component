let submitBtn = document.getElementById('submit-btn');
let cardTwo = document.getElementById('card2');
let ratingOne = document.getElementById('n1');
let ratingTwo = document.getElementById('n2');
let ratingThree = document.getElementById('n3');
let ratingFour = document.getElementById('n4');
let ratingFive = document.getElementById('n5');
let ratingNbr = document.querySelector('span');


function updateRating(event) {
  let rating = event.target.innerHTML;
  ratingNbr.innerHTML = rating;
  }

function changeCards() {
  cardTwo = cardTwo.style.zIndex = '1';
}

ratingOne.addEventListener('click', updateRating);
ratingTwo.addEventListener('click', updateRating)
ratingThree.addEventListener('click', updateRating)
ratingFour.addEventListener('click', updateRating)
ratingFive.addEventListener('click', updateRating)
submitBtn.addEventListener('click', changeCards);