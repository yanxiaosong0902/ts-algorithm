interface SquareConfig {
  color?: string,
  width?: number
}
function create(config: SquareConfig): {color: string, area: number} {
  let newSquare = {color: 'white', area: 100}
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  console.log(newSquare)
  return newSquare
}
let params = create({area: 30, color: 'width'} as SquareConfig)

interface ClockConstructor {
    new (hour: number, minute: number): ClockInterface;
}
interface ClockInterface {
    tick(): void;
}

function createClock(ctor: ClockConstructor, hour: number, minute: number): ClockInterface {
    return new ctor(hour, minute);
}

class DigitalClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("beep beep");
    }
}
class AnalogClock implements ClockInterface {
    constructor(h: number, m: number) { }
    tick() {
        console.log("tick tock");

    }
}

let digital = createClock(DigitalClock, 12, 17);
console.log(digital)
digital.tick()
let analog = createClock(AnalogClock, 7, 32);
analog.tick()

interface First {
  name: string
}
interface Second extends First{
  age: number
}
let test = <Second>{name: 'test'}
console.log(test)

interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
}

function getCounter(): Counter {
    let counter = <Counter>function (start: number) {return start.toString()};
    counter.interval = 123;
    counter.reset = function () { console.log( counter.interval)};
    return counter;
}

let c = getCounter();
console.log(c)
c(10);
c.reset();
c.interval = 5.0;
c.reset()

// interface testInterface {
//   name: string
// }
class TestClass{
  constructor(protected name: string){
    this.name = name
  }
}
console.log(new TestClass('yan'))

class Octopus {
    readonly numberOfLegs: number = 8;
    constructor(public name: string) {
    }
}
console.log(new Octopus('123'))

abstract class Animal {
  abstract print():void
  constructor(){}
  log() {
    console.log('123')
  }
}
class Dog extends Animal {
  constructor(){
    super()
  }
  print() {
    console.log('456')
  }
}
console.log(new Dog().log())
