/* The for principles of "this";
 * in your own words. explain the four principle for the "this" keyword below.
 *
 * 1. Global binding is probably the easiest to understand. When "this" is used in the global scope, it binds to the window object.
 * 2. Implicit binding is, as Josh described it, "automatic". It's often found inside of an object.
 * 3. New binding has to do with constructors and the new keyword. It binds to the new object that gets created from the constructor function.
 * 4. Explicit binding has to do with the function methods .call, .apply, or .bind. It overrides what the this keyword points to by giving "this" another object to point to via these function methods.
 *
 * write out a code example of each explanation above
 */

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const implicitA = {
  age: 19,
  old: function() {
    return `I am ${this.age} years old.`;
  }
};

const implicitB = {
  age: 21,
  old: function() {
    return `I am ${this.age} years old.`;
  }
};

console.log(implicitA.old());
console.log(implicitB.old());

// Principle 3

// code example for New Binding
function Obj(props) {
  this.name = props.name;
  this.size = props.size;
  this.color = props.color;
  this.fly = function() {
    return `The ${this.name} has flown away.`;
  };
}

const rock = new Obj({ name: "Rock", size: "small", color: "grey" });
const dragon = new Obj({ name: "Dragon", size: "Large", color: "Red" });

console.log(rock.fly());
console.log(dragon.fly());

// Principle 4

// code example for Explicit Binding
rock.fly.call(dragon);
dragon.fly.call(rock);

console.log(rock.fly.call(dragon));
console.log(dragon.fly.call(rock));
