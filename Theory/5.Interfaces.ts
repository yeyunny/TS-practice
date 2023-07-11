type Team = "red" | "blue" | "yellow";
type Health = 1 | 5 | 10;

// 타입스크립트에게 object 모양을 설명해주는 하나의 목적만을 가짐
// 객체일 떄만 사용한다는 소리

// #1
interface Player3 {
  nickname: string;
  team: Team;
  health: Health;
}

// #2
const yeye: Player3 = {
  nickname: "nico",
  team: "red",
  health: 1,
};

// #3
interface User1 {
  name: string;
}

interface Player4 extends User1 {}

const nicoco: Player4 = {
  name: "nicoco",
};

//property 축적 - 합체 가능
interface User2 {
  name: string;
}

interface User2 {
  lastName: string;
}

interface User2 {
  health: number;
}

const yunny: User2 = {
  name: "yunny",
  lastName: "sim",
  health: 10,
};

//////////////////////////////////////////////////////////
// 놀랍게도 #1과 #2는 같은 의미로 쓰인다. 하지만 차이점 존재함 ㅎㅎ;
// interface과 type 공통점 !
// TS에게 object을 모양을 알려주는 역할

// interface과 type 차이점!
// interface : 객체 지향의 개념 활용
// type : 좀 유연, 개방

// 추상화를 원할 때, interface와 type의 차이점

// #1 - abstract
abstract class User5 {
  constructor(protected firstName: string, protected lastName: string) {}

  abstract sayHi(name: string): string;
  abstract fullName(): string;
}

class Player5 extends User5 {
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `${name}. My name is ${this.fullName()}`;
  }
}

// #2 - interface
interface User6 {
  firstName: string;
  lastName: string;

  sayHi(name: string): string;
  fullName(): string;
}

interface Human {
  health: number;
}

class Player6 implements User6 {
  constructor(
    public firstName: string,
    public lastName: string,
    public health: number
  ) {}

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
  sayHi(name: string) {
    return `Hello ${name} My name is ${this.fullName()}`;
  }
}

function makeUser(user: User6) {
  return "hi";
}

makeUser({
  firstName: "nico",
  lastName: "las",
  fullName: () => "xx",
  sayHi: (name) => "string",
});
