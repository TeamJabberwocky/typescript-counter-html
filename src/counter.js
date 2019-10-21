var dec = document.getElementById("minus");
var inc = document.getElementById("plus");
var htmlcount = document.getElementById("counter");
var reset = document.getElementById("reset");
var Counter = /** @class */ (function () {
    function Counter() {
        this.count = 0;
        if (localStorage.getItem('number') !== null) {
            this.count = parseInt(localStorage.getItem('number'));
            console.log('something in local storage', this.count);
        }
        else {
            console.log('nothing in local storage', this.count);
        }
    }
    Counter.prototype.increment = function () {
        this.count += 1;
        console.log(this.count);
        this.render();
    };
    Counter.prototype.decrement = function () {
        this.count -= 1;
        console.log(this.count);
        this.render();
    };
    Counter.prototype.zero = function () {
        this.count = 0;
        this.render();
    };
    Counter.prototype.render = function () {
        var display = this.count.toString();
        localStorage.setItem('number', display);
        return htmlcount.innerText = display;
    };
    return Counter;
}());
var countie = new Counter();
countie.render();
dec.addEventListener("click", function (e) { return countie.decrement(); });
inc.addEventListener("click", function (e) { return countie.increment(); });
reset.addEventListener("click", function (e) { return countie.zero(); });
console.log('Welcome!');
