class Materializer {
    activated = false;
    constructor(target) {
	this.target = target;
    }
    activate() { this.activated = true; }
    materialize() {
        if (this.activated == true) {
            return this.target;
        } else {
            return;
        }
    }
}

const m = new Materializer('Kevin');
console.log(m.activated); // would print "false"

m.activate();
console.log(m.activated); // would print "true"

console.log(m.materialize()); // would print "Kevin"