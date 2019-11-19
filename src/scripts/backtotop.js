class Backtotop {
  constructor(element) {
    element.addEventListener('click', () => {
      this.scrollIt(element);
    });
  }

  scrollIt(element) {
    window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'top': 0
    });
  }
}

new Backtotop(document.querySelector('.ar-backtotop'));