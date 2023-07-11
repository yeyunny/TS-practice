// optional type : 선택적 타입(?)

// Alias 타입 생성

// argument 타입 지정

// 함수 return 갑의 타입 지정

// readonly : 불변성 지님

// Tuple
// const player : [string, number, boolean] = ["nico", 1, true]

// any ; 비어있는 값, TS으로부터 벗어나고 싶을 때 사용(in JS) === 모든 것을 비활성화
// any는 추천하지 않음 ! 좋지 않은 코드...

// unknown - 변수의 type을 알지 못할 때 사용, 타입 확인한 후에 사용 할 수 있음
// if(typeof a === "number"){
//   let b = a +1
// }

// void - 아무것도 return 하지 않는 함수 대상으로 사용, 따로 지정하지 않아도 됨(자동으로 인식)

//never - 함수가 절대 return 하지 않을 때 발생
// function hello():never{
//   throw new Error("XXX")
// }
