var dec = document.getElementById("minus");
var inc = document.getElementById("plus");
var htmlcount = document.getElementById("counter");
var reset = document.getElementById("reset");
var Counter = /** @class */ (function () {
    function Counter(count) {
        this.count = count;
    }
    Counter.prototype.increment = function () {
        console.log(this.count);
        this.count += 1;
        this.render();
    };
    Counter.prototype.decrement = function () {
        console.log(this.count);
        this.count -= 1;
        this.render();
    };
    Counter.prototype.zero = function () {
        this.count = 0;
        this.render();
    };
    Counter.prototype.render = function () {
        var display = this.count.toString();
        return htmlcount.innerText = display;
    };
    return Counter;
}());
var countie = new Counter(0);
dec.addEventListener("click", function (e) { return countie.decrement(); });
inc.addEventListener("click", function (e) { return countie.increment(); });
reset.addEventListener("click", function (e) { return countie.zero(); });
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
