const dec = document.getElementById("minus");
const inc = document.getElementById("plus");
const htmlcount = document.getElementById("counter");
const reset = document.getElementById("reset");

class Counter {
  count: number;
  constructor(count: number) {
    this.count = count;
  }

  increment() {
    console.log(this.count);
    this.count += 1;
    this.render();
  }

  
  decrement() {
    console.log(this.count)
    this.count -= 1;
    this.render();
  }

  zero() {
    this.count = 0;
    this.render();
  }

  render() {
    let display = this.count.toString();
    return htmlcount.innerText = display;
  }
}

const countie = new Counter(0);
dec.addEventListener("click", (e: Event) => countie.decrement());
inc.addEventListener("click", (e: Event) => countie.increment());
reset.addEventListener("click", (e: Event) => countie.zero());
console.log('hi');

// class Counter {
//     constructor() {
//         let dec = document.getElementById("decrement");
//         let inc = document.getElementById("increment");
//         let counter = document.getElementById("counter");
        // dec.addEventListener("click", (e) => this.decrement(this.counter));
//         inc.addEventListener("click", (e) => this.increment(this.counter));
//         console.log('hi')
//     }
    
//     increment() {
//         return this.counter += 1;
//     }
    
//     decrement() {
//         return this.counter -= 1;
//     }
    
// }

// console.log(new Counter)

