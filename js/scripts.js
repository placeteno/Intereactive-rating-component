const cardOne = document.querySelector('.card-one');
const cardTwo = document.querySelector('.card-two');
const rating = document.querySelectorAll('#rating li');
const submitBtn = document.querySelector('.submit-btn a');
const span = document.querySelector('span');

rating.forEach(number => {
  number.addEventListener('click', e => {
    let dataNum = e.target.dataset.num;
    rating.forEach(number => number.classList.remove('selected'));
    number.classList.add('selected');
    span.textContent = dataNum;
  });
});

submitBtn.addEventListener('click', function () {
  cardTwo.classList.add('z-index');
});
