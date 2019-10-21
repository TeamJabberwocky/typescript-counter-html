const dec = document.getElementById("minus");
const inc = document.getElementById("plus");
const htmlcount = document.getElementById("counter");
const reset = document.getElementById("reset");

class Counter {
  count: number;
  constructor() {
    this.count = 0;
    if (localStorage.getItem('number') !== null) {
      this.count = parseInt(localStorage.getItem('number'));
      console.log('something in local storage', this.count);
  } else {
      console.log('nothing in local storage', this.count);
  }
}

  increment() {
    this.count += 1;
    console.log(this.count);
    this.render();
  }
  
  decrement() {
    this.count -= 1;
    console.log(this.count)
    this.render();
  }

  zero() {
    this.count = 0;
    this.render();
  }

  render() {
    var display = this.count.toString();
    localStorage.setItem('number', display);
    return htmlcount.innerText = display;
  }
}

const countie = new Counter();
countie.render()
dec.addEventListener("click", (e: Event) => countie.decrement());
inc.addEventListener("click", (e: Event) => countie.increment());
reset.addEventListener("click", (e: Event) => countie.zero());
console.log('Welcome!');
