const getStrictStorage = <T extends object>(storage: Storage) => ({
  setItem<K extends Extract<keyof T, string>, V extends T[K]>(
    field: K,
    value: V
  ) {
    storage.setItem(field, JSON.stringify({ value }));
  },
  getItem<K extends Extract<keyof T, string>, V extends T[K]>(
    field: K
  ): V | null {
    const jsonValue = storage.getItem(field);
    if (!jsonValue) return null;

    return JSON.parse(jsonValue).value;
  },
  removeItem<K extends Extract<keyof T, string>>(field: K) {
    storage.removeItem(field);
  },
  key(index: number) {
    return storage.key(index);
  },
  clear() {
    storage.clear();
  },
  get length() {
    return storage.length;
  },
});

export default getStrictStorage;
