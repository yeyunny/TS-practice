// constructor 생성자
abstract class User {
  constructor(
    protected firstName: string,
    protected lastName: string,
    protected nickname: string
  ) {}

  abstract getNickName(): void;

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

class Player2 extends User {
  getNickName() {
    console.log(this.nickname);
  }

  getFullName() {
    return this.firstName;
  }
}

const yun = new Player2("nico", "lst", "니꼬");
