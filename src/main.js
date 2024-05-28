document.addEventListener('DOMContentLoaded', function() {
  const rateOne = document.querySelector('.rate-one');
  const rateTwo = document.querySelector('.rate-two');
  const rateThree = document.querySelector('.rate-three');
  const rateFour = document.querySelector('.rate-four');
  const rateFive = document.querySelector('.rate-five');

  const btnSubmit = document.getElementById('submit');
  const appPage = document.getElementById('app');
  const thankYouPage = document.getElementById('thank-you');

  const rating = document.querySelector('.final-rating');

  function toggleRate(rateElement) {
    rateElement.addEventListener('click', () => {
        const ratingValue = parseInt(rateElement.textContent); // Alteração aqui
        const activeRate = document.querySelector('.active-rate');

        if (activeRate === rateElement) {
          rateElement.classList.remove('active-rate');
          rating.textContent = "Please select a rating";
        } else {
          rateElement.classList.add('active-rate');
          rating.textContent = `You selected ${ratingValue} out of 5`;
        if (activeRate) {
          activeRate.classList.remove('active-rate');
          }
        }
    });
}

  function submitRate() {
      btnSubmit.addEventListener('click', () => {
          appPage.classList.add('modal-wrapper');
          thankYouPage.classList.add('open');
      });
  }

  function initializeRatings() {
      toggleRate(rateOne);
      toggleRate(rateTwo);
      toggleRate(rateThree);
      toggleRate(rateFour);
      toggleRate(rateFive);
  }

  initializeRatings();
  submitRate();
});
