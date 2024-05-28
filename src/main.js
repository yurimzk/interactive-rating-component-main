document.addEventListener('DOMContentLoaded', function() {
  const rateOne = document.querySelector('.rate-one');
  const rateTwo = document.querySelector('.rate-two');
  const rateThree = document.querySelector('.rate-three');
  const rateFour = document.querySelector('.rate-four');
  const rateFive = document.querySelector('.rate-five');

  function toggleRateOne() {
    rateOne.addEventListener('click', () => {
      rateOne.classList.toggle('active-rate');
      rateTwo.classList.remove('active-rate');
      rateThree.classList.remove('active-rate');
      rateFour.classList.remove('active-rate');
      rateFive.classList.remove('active-rate');
    });
  }

  function toggleRateTwo() {
    rateTwo.addEventListener('click', () => {
      rateTwo.classList.toggle('active-rate');
      rateOne.classList.remove('active-rate');
      rateThree.classList.remove('active-rate');
      rateFour.classList.remove('active-rate');
      rateFive.classList.remove('active-rate');
    });
  }

  function toggleRateThree() {
    rateThree.addEventListener('click', () => {
      rateThree.classList.toggle('active-rate');
      rateOne.classList.remove('active-rate');
      rateTwo.classList.remove('active-rate');
      rateFour.classList.remove('active-rate');
      rateFive.classList.remove('active-rate');
    });
  }

  function toggleRateFour() {
    rateFour.addEventListener('click', () => {
      rateFour.classList.toggle('active-rate');
      rateOne.classList.remove('active-rate');
      rateTwo.classList.remove('active-rate');
      rateThree.classList.remove('active-rate');
      rateFive.classList.remove('active-rate');
    });
  }

  function toggleRateFive() {
    rateFive.addEventListener('click', () => {
      rateFive.classList.toggle('active-rate');
      rateOne.classList.remove('active-rate');
      rateTwo.classList.remove('active-rate');
      rateThree.classList.remove('active-rate');
      rateFour.classList.remove('active-rate');
    });
  }

  toggleRateOne();
  toggleRateTwo();
  toggleRateThree();
  toggleRateFour();
  toggleRateFive();
});
