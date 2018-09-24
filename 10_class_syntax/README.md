# Class syntax
## properties
## constructor
## methods
## inheritance

* kitten2
  * sets kitten name
    * properties
  * makes kitten call
    * methods
  * constructor
* angryKitten
  * extends kitten2


```javascript
class kitten2 {
  constructor(name = 'kitty kitty') {
    this.name = name;

    this.scratches = false;
  }

  makeKittenCall() {
    return `Come here, ${this.name}!`;
  }
}

class angryKitten extends kitten2 {
  constructor(name) {
    super(name);

    this.scratches = true;
  }
}
```