import getStrictStorage from "./index";

beforeEach(() => {
  localStorage.clear();
});

interface StorageType {
  foo: number;
  bar: string;
  baz: { x: boolean };
}

test("check the key of the returned object", () => {
  const strictLocalStorage = getStrictStorage<StorageType>(localStorage);

  expect(strictLocalStorage).toHaveProperty("setItem");
  expect(strictLocalStorage).toHaveProperty("getItem");
  expect(strictLocalStorage).toHaveProperty("removeItem");
  expect(strictLocalStorage).toHaveProperty("key");
  expect(strictLocalStorage).toHaveProperty("clear");
  expect(strictLocalStorage).toHaveProperty("length");
});

test("check setting and get storage", () => {
  const strictLocalStorage = getStrictStorage<StorageType>(localStorage);

  const fooValue = 123;
  const barValue = "hey";
  const bazValue = { x: true };
  strictLocalStorage.setItem("foo", fooValue);
  strictLocalStorage.setItem("bar", barValue);
  strictLocalStorage.setItem("baz", bazValue);

  expect(localStorage.getItem("foo")).toBe(JSON.stringify({ value: fooValue }));
  expect(localStorage.getItem("bar")).toBe(JSON.stringify({ value: barValue }));
  expect(localStorage.getItem("baz")).toBe(JSON.stringify({ value: bazValue }));
  expect(strictLocalStorage.getItem("foo")).toBe(fooValue);
  expect(strictLocalStorage.getItem("bar")).toBe(barValue);
  expect(strictLocalStorage.getItem("baz")).toEqual(bazValue);
});

test("check remove storage", () => {
  const strictLocalStorage = getStrictStorage<StorageType>(localStorage);

  strictLocalStorage.setItem("foo", 999);

  strictLocalStorage.removeItem("bar");
  expect(strictLocalStorage.getItem("foo")).toBe(999);
  expect(localStorage.length).toBe(1);

  strictLocalStorage.removeItem("foo");
  expect(strictLocalStorage.getItem("foo")).toBeNull();
  expect(localStorage.length).toBe(0);
});

test("check clear storage", () => {
  const strictLocalStorage = getStrictStorage<StorageType>(localStorage);
  strictLocalStorage.setItem("foo", 123);
  strictLocalStorage.setItem("bar", "one");

  expect(localStorage.length).toBe(2);
  strictLocalStorage.clear();
  expect(localStorage.length).toBe(0);
});

test("check key storage", () => {
  const strictLocalStorage = getStrictStorage<StorageType>(localStorage);
  strictLocalStorage.setItem("foo", 123);
  strictLocalStorage.setItem("baz", { x: true });

  expect(strictLocalStorage.key(0)).toBe("foo");
  expect(strictLocalStorage.key(1)).toBe("baz");
});

test("check length storage", () => {
  const strictLocalStorage = getStrictStorage<StorageType>(localStorage);
  strictLocalStorage.setItem("foo", 999);
  strictLocalStorage.setItem("bar", "hi");

  expect(strictLocalStorage.length).toBe(localStorage.length);

  expect(strictLocalStorage.length).toBe(2);

  localStorage.clear();
  expect(strictLocalStorage.length).toBe(0);
});
