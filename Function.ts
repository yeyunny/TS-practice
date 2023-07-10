// Call Signature
// 함수의 타입을 정해두고 재사용
type Add = (a: number, b: number) => number;

const add: Add = (a, b) => a + b;

// overloading :
//#1
type Aaa = { (a: number, b: number): number; (a: number, b: number): number };

const AAa: Aaa = (a, b) => {
  if (typeof b === "string") return a;
  return a + b;
};

//#2
type Config = {
  path: string;
  state: object;
};

type Push = {
  (path: string): void;
  (config: Config): void;
};

const push: Push = (config) => {
  if (typeof config === "string") {
    console.log(config);
  } else {
    console.log(config.path);
  }
};

// #3 다른 call signature, 파라미터의 개수도 다를 경우
type AAA = {
  (a: number, b: number): number;
  (a: number, b: number, c: number): number;
};

const aaa: AAA = (a, b, c?: number) => {
  if (c) return a + b + c;
  return a + b;
};

// polymorphism - 다형성

// Generic 사용하기 <> 사이에 이름 짓기
// callSignature를 만드는 역할
// type SuperPrint = <T, M>(a: T[], b: M) => T;
// const superPrint: SuperPrint = (a) => a[0];

// ==> 결국 같은 함수 : 호이스팅 가능
// 호이스팅이란, 코드를 처음 실행할 때 변수의 자리를 비워둠()
function superPrint<T, M>(a: T[], b: M) {
  return a[0];
}

const a = superPrint([1, 2, 3, 4], "x");
const b = superPrint([true, false, true], 1);
const c = superPrint(["a", "b", "c"], false);
const d = superPrint([1, 2, true, false, "hello"], []);

// Generic 어렵게 써보기 (재사용 ㅋㅋ)
type Player<E> = {
  name: string;
  extraInfo: E;
};

type Food = {
  favFood: string;
};

type PlayerInfo = Player<Food>;

const nico: PlayerInfo = {
  name: "nico2",
  extraInfo: {
    favFood: "kimchi",
  },
};

const lynn: Player<Food> = {
  name: "lynn",
  extraInfo: {
    favFood: "tofu",
  },
};

// 제네릭과 타입 지정의 교집합
function printAllNumbers1(arr: Array<number>) {}

function printAllNumbers2(arr: number[]) {}
// 결국 number인 array를 나타냄

// 제네릭은 선언 시점이 아니라 생성 시점에 타입을 명시하여
// 하나의 타입만이 아닌 다양한 타입을 사용할 수 있도록 하는 기법이다
// 쉽게 말해, 그때 그때 입맛에 맞게 씀
