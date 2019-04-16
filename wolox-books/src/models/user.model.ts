export class User {
  email: string;
  firstName: string;
  lastName: string;
  locale: string;
  password: string;
  passwordConfirmation?: string;

  constructor(user?: any) {
    user = user || '';
    this.email = user.email || null;
    this.firstName = user.firstName || null;
    this.lastName = user.lastName || null;
    this.locale = user.locale || null;
    this.password = user.password || null;
    if (user.passwordConfirmation) {
      this.passwordConfirmation = user.passwordConfirmation;
    }
  }
}

export interface UserModelSave {
  user: {
    email: string;
    first_name: string;
    last_name: string;
    locale: string;
    password: string;
    password_confirmation?: string;
  };
}

export interface LoginModel {
  session: {
    email: string;
    password: string;
  };
}
