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
  let clickedContent = document.querySelector(`.accordion__content--${clickedTargetNumber}`);
  let clickedSVG = document.querySelector(`.accordion__svg--${clickedTargetNumber}`);
  if ( currentTarget === 0 ) {
    clickedTarget.classList.add('header_selected');
    clickedContent.classList.add('accordion_content_reveal');
    clickedContent.classList.remove('accordion__content');
    clickedSVG.classList.add('svg_transition_up');
    currentTarget = clickedTarget.dataset.tab;
    setTimeout(() => {
      clickedContent.classList.remove('accordion_content_reveal');
      clickedContent.classList.add('is_selected');
      clickedSVG.classList.add('svg_selected');
      clickedSVG.classList.remove('svg_transition_up');
    }, 149)
  } else if (currentTarget === clickedTargetNumber) {
    clickedContent.classList.remove('is_selected');
    clickedContent.classList.add('accordion__content');
    clickedSVG.classList.add('svg_transition_down');
    clickedTarget.classList.remove('header_selected');
    currentTarget = 0;
    setTimeout(() => {
      clickedSVG.classList.remove('svg_selected');
      clickedSVG.classList.remove('svg_transition_down');
    }, 149)
  } else {
    let oldContent = document.querySelector(`.accordion__content--${currentTarget}`);
    let oldSVG = document.querySelector(`.accordion__svg--${currentTarget}`);
    let oldTarget = document.querySelector(`.accordion__header--${currentTarget}`);
    oldContent.classList.remove('is_selected');
    oldContent.classList.add('accordion__content');
    oldSVG.classList.add('svg_transition_down');
    // oldSVG.classList.remove('svg_selected');
    oldTarget.classList.remove('header_selected');
    clickedContent.classList.remove('accordion__content');
    clickedContent.classList.add('accordion_content_reveal');
    clickedSVG.classList.add('svg_transition_up');
    // clickedSVG.classList.add('svg_selected');
    clickedTarget.classList.add('header_selected');
    currentTarget = clickedTargetNumber;
    setTimeout(() => {
      oldSVG.classList.remove('svg_selected');
      oldSVG.classList.remove('svg_transition_down');
      clickedContent.classList.add('is_selected');
      clickedContent.classList.remove('accordion_content_reveal');
      clickedSVG.classList.remove('svg_transition_up');
      clickedSVG.classList.add('svg_selected');
    }, 149)
  }
}

sections.forEach((section) => section.addEventListener('click', toggleAccordion));