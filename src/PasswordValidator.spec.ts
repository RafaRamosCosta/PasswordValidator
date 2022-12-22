import { PasswordValidator } from "./PasswordValidator";

describe("PasswordValidator", () => {
  const validPassword: string = "aLou82014@&bCalj3107hsa^";
  const invalidPassword: string = "abc";
  it("should return true if the password's size is valid", () => {
    const passwordValidator = new PasswordValidator(validPassword);
    const spy = jest
      .spyOn(passwordValidator, "checkSize")
      .mockImplementationOnce(() => true);

    const sizeIsValid = passwordValidator.checkSize();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(sizeIsValid).toBe(true);
  });

  it("should return false if the password's size is invalid", () => {
    const passwordValidator = new PasswordValidator(invalidPassword);
    const spy = jest
      .spyOn(passwordValidator, "checkSize")
      .mockImplementationOnce(() => false);

    const sizeIsValid = passwordValidator.checkSize();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(sizeIsValid).toBe(false);
  });

  it("should return true if the password has at least 2 special characteres", () => {
    const passwordValidator = new PasswordValidator(validPassword);
    const spy = jest
      .spyOn(passwordValidator, "checkSpecialCharacters")
      .mockImplementationOnce(() => true);

    const hasSpecialChars = passwordValidator.checkSpecialCharacters();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(hasSpecialChars).toBe(true);
  });

  it("should return false if the password has less than 2 special characters", () => {
    const passwordValidator = new PasswordValidator(invalidPassword);
    const spy = jest
      .spyOn(passwordValidator, "checkSpecialCharacters")
      .mockImplementationOnce(() => false);

    const hasSpecialChars = passwordValidator.checkSpecialCharacters();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(hasSpecialChars).toBe(false);
  });

  it("should return true if the password has upper and lower characters", () => {
    const passwordValidator = new PasswordValidator(validPassword);
    const spy = jest
      .spyOn(passwordValidator, "checkUpperAndLower")
      .mockImplementationOnce(() => true);

    const hasUpperAndLower = passwordValidator.checkUpperAndLower();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(hasUpperAndLower).toBe(true);
  });

  it("should return false if the password doesn't have upper and lower characters", () => {
    const passwordValidator = new PasswordValidator(invalidPassword);
    const spy = jest
      .spyOn(passwordValidator, "checkUpperAndLower")
      .mockImplementationOnce(() => false);

    const hasUpperAndLower = passwordValidator.checkUpperAndLower();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(hasUpperAndLower).toBe(false);
  });

  it("should return false if the password has sequential characters", () => {
    const passwordValidator = new PasswordValidator(validPassword);
    const spy = jest
      .spyOn(passwordValidator, "checkSequence")
      .mockImplementationOnce(() => false);

    const hasSequence = passwordValidator.checkSequence();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(hasSequence).toBe(false);
  });

  it("should return true if the password has sequential characters", () => {
    const passwordValidator = new PasswordValidator(invalidPassword);
    const spy = jest
      .spyOn(passwordValidator, "checkSequence")
      .mockImplementationOnce(() => true);

    const hasSequence = passwordValidator.checkSequence();
    expect(spy).toHaveBeenCalledTimes(1);
    expect(hasSequence).toBe(true);
  });

  it("should return a object containing a result key with a 'true' value and a 'errors' key with a '[]' value", () => {
    const passwordValidator = new PasswordValidator(validPassword);
    const resultObj = passwordValidator.validate();
    expect(resultObj).toEqual(
      expect.objectContaining({ result: true, errors: [] })
    );
  });

  it("should return a object containing a result key with a 'false' value and a 'errors' containing error messages", () => {
    const passwordValidator = new PasswordValidator(invalidPassword);
    const resultObj = passwordValidator.validate();
    expect(resultObj).toEqual(
      expect.objectContaining({
        result: false,
        errors: [
          "Invalid size!",
          "Missing special characters!",
          "Password must have upper and lower characters!",
          "Password can't have sequence characters!",
        ],
      })
    );
  });
});
