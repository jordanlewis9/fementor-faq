const head1 = document.querySelector('.accordion__header--1');
const head2 = document.querySelector('.accordion__header--2');
const head3 = document.querySelector('.accordion__header--3');
const head4 = document.querySelector('.accordion__header--4');
const head5 = document.querySelector('.accordion__header--5');

const sections = [head1, head2, head3, head4, head5];

let currentTarget = 0;

const toggleAccordion = (e) => {
  const clickedTarget = e.target.closest('.accordion__header');
  const clickedTargetNumber = clickedTarget.dataset.tab;
  let clickedSection = document.querySelector(`.accordion__content--${clickedTargetNumber}`);
  let clickedSVG = document.querySelector(`.accordion__svg--${clickedTargetNumber}`);
  if ( currentTarget === 0 ) {
    clickedSection.classList.add('is_selected');
    clickedSVG.classList.add('svg_selected');
    currentTarget = clickedTarget.dataset.tab
  } else if (currentTarget === clickedTargetNumber) {
    clickedSection.classList.remove('is_selected');
    clickedSVG.classList.remove('svg_selected');
    currentTarget = 0;
  } else {
    let oldSection = document.querySelector(`.accordion__content--${currentTarget}`);
    let oldSVG = document.querySelector(`.accordion__svg--${currentTarget}`);
    oldSection.classList.remove('is_selected');
    oldSVG.classList.remove('svg_selected');
    clickedSection.classList.add('is_selected');
    clickedSVG.classList.add('svg_selected');
    currentTarget = clickedTargetNumber;
  }
}

sections.forEach((section) => section.addEventListener('click', toggleAccordion));