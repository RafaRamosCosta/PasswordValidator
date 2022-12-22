interface IResultProps {
  result: boolean;
  errors: string[];
}

export class PasswordValidator {
  private SPECIALCHARS = ["!", "@", "#", "%", "$", "&", "*", "^", "~", "?"];
  private splittedPassword: string[] = [];
  private ascii: number[] = [];
  private resultObj: IResultProps = { result: true, errors: [] };

  constructor(private readonly password: string) {
    this.splitPassword();
    this.ascii = this.toAscci(this.splittedPassword);
  }

  checkSize(): boolean {
    return this.password.length >= 16 && this.password.length <= 32
      ? true
      : false;
  }

  splitPassword(): void {
    this.splittedPassword = this.password.split("");
  }

  checkSpecialCharacters(): boolean {
    const specialCharacters = this.splittedPassword.reduce((specials, char) => {
      if (this.SPECIALCHARS.includes(char)) specials++;
      return specials;
    }, 0);

    return specialCharacters >= 2;
  }

  toAscci(password: string[]): number[] {
    return password.map((char) => char.charCodeAt(0));
  }

  checkUpperAndLower(): boolean {
    let upper = 0;
    let lower = 0;
    for (const num of this.ascii) {
      if (num >= 65 && num <= 90) upper++;
      if (num >= 97 && num <= 122) lower++;
    }
    if (upper !== 0 && lower !== 0) return true;

    return false;
  }

  checkSequence() {
    const formattedPass = this.splittedPassword.map((char) =>
      char.toLowerCase()
    );

    const ascii = this.toAscci(formattedPass);

    const hasSequence = ascii.reduce((acc, curr, idx) => {
      const middle = ascii[idx + 1];
      const last = ascii[idx + 2];
      if (middle === curr + 1 && last === curr + 2) acc++;
      return acc;
    }, 0);

    if (hasSequence > 0) return true;
    return false;
  }

  validate() {
    const sizeIsValid = this.checkSize();
    if (!sizeIsValid) {
      this.resultObj.result = false;
      this.resultObj.errors.push("Invalid size!");
    }

    const hasSpecialChars = this.checkSpecialCharacters();
    if (!hasSpecialChars)
      this.resultObj.errors.push("Missing special characters!");

    const hasUpperAndLower = this.checkUpperAndLower();
    if (!hasUpperAndLower) {
      this.resultObj.result = false;
      this.resultObj.errors.push(
        "Password must have upper and lower characters!"
      );
    }

    const hasSequence = this.checkSequence();
    if (hasSequence) {
      this.resultObj.result = false;
      this.resultObj.errors.push("Password can't have sequence characters!");
    }
    return this.resultObj;
  }
}
const pass = "@34$dg34103fap013jalA10248";
const passwordValidator = new PasswordValidator(pass);
console.log(passwordValidator.validate());
