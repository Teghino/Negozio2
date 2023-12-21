export class Users{
  private name: string;
  private token: string;
  private refreshToken: string;
  private date: Date;
  private isLogged: boolean;

  constructor(name: any, token: string, refreshToken: string, date: Date, isLogged: boolean) {
    this.name = name;
    this.token = token;
    this.refreshToken = refreshToken;
    this.date = date;
    this.isLogged = isLogged;
  }

  get nameUser(): string {
    return this.name;
  }


  get tokenUser(): string {
    return this.token;
  }

  get refreshTokenUser(): string {
    return this.refreshToken;
  }

  get dateUser(): Date {
    return this.date;
  }

  set isLoggedUser(isLogged: boolean) {
    this.isLogged = isLogged;
  }

  get getIsLoggedUser(): boolean {
    return this.isLogged;
  }

  set tokenUser(token: string) {
    this.token = token;
  }

  set refreshTokenUser(refreshToken: string) {
    this.refreshToken = refreshToken;
  }
}
