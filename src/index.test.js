import getStrictStorage from "./index";

test("check the key of the returned object", () => {
  const storage = getStrictStorage();
  expect(storage).toHaveProperty("strictLocalStorage");
  expect(storage).toHaveProperty("strictSessionStorage");

  expect(storage.strictLocalStorage).toHaveProperty("setItem");
  expect(storage.strictLocalStorage).toHaveProperty("getItem");
  expect(storage.strictLocalStorage).toHaveProperty("removeItem");
  expect(storage.strictLocalStorage).toHaveProperty("key");
  expect(storage.strictLocalStorage).toHaveProperty("clear");
  expect(storage.strictLocalStorage).toHaveProperty("length");
});
