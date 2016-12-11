import '../stylesheets/javascript30.scss';

const controllers = document.querySelectorAll('.controller');

function handleValueUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, `${this.value}${suffix}` );
}

controllers.forEach(
  controller => controller.addEventListener('change',handleValueUpdate)
);
controllers.forEach(
  controller => controller.addEventListener('mousemove',handleValueUpdate)
);