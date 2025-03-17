
const selectPlan = (planNumber) => {

//const plans = document.querySelectorAll('.plan');
  

const planElement = document.querySelector('.plan--selected');
  if (planElement) {
    planElement.classList.remove('plan--selected');
  }


const selectedPlan = document.querySelector(`#plan${planNumber}`);
  if (selectedPlan) {
    selectedPlan.classList.add('plan--selected');
  }
}


selectPlan(1)


