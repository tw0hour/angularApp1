export class Association {
  id:number;
  name:string;
  mail: string;
  password:string;
  money: number;


  constructor(id: number, name: string, mail: string, password: string, money: number) {
    this.id = id;
    this.name = name;
    this.mail = mail;
    this.password = password;
    this.money = money;
  }
}
