import '../stylesheets/javascript30.scss';

const panel = document.querySelectorAll('.panel');
let test = [];
let test1;

function toggleOpen() {
  if(test.length === 1) {
    test1 = test.shift();
    test1.classList.remove('open');
  }
  test.push(this);
  this.classList.toggle('open');
}

function toggleTransition(e) {
  if (e.propertyName.includes("flex")) {
    if(this !== test1) {
      this.classList.remove('active');
    }
    this.classList.toggle('active');
  }
}
panel.forEach(item => item.addEventListener("click", toggleOpen));
panel.forEach(item => item.addEventListener("transitionend", toggleTransition));