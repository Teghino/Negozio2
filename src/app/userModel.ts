export class Users{
  private name: string;
  private isLogged: boolean;

  constructor(name: any, isLogged: boolean) {
    this.name = name;
    this.isLogged = isLogged;
  }

  get nameUser(): string {
    return this.name;
  }


  set isLoggedUser(isLogged: boolean) {
    this.isLogged = isLogged;
  }

  get getIsLoggedUser(): boolean {
    return this.isLogged;
  }


}
