const { isEmailValid, passwordValid, hasUpperCase } = require("../utils/main");

test("checks if email has @ symbol and checks email length", () => {
  const result = isEmailValid("tas@gmail.com");
  expect(result).toBe(true);
});

test("validates user password", () => {
  const result = passwordValid("password1", "password1");
  expect(result).toBe("yes");
});

test("expects atleast one uppercase letter", () => {
  const result = hasUpperCase("svEikas");
  expect(result).toBe(true);
});
