// constructor 생성자
// 추상 클래스인 User 안에
abstract class User {
  constructor(
    protected firstName: string,
    protected lastname: string,
    protected nickname: string
  ) {}

  //void는 undefined로 찍힘
  abstract getNickName(): void;

  getFullName() {
    return `${this.firstName} ${this.lastname}`;
  }
}

class Player2 extends User {
  getNickName() {
    console.log(this.nickname);
  }

  // override - 상속된 메소드와 다른 값을 리턴 할 수 있음
  getFullName() {
    return this.firstName;
  }
}

const yun = new Player2("nico", "lst", "니꼬");
