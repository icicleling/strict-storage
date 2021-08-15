# strict-storage

没提示的话, 没人记得住 storage 里有什么鬼东西

If there is no suggest, no one can remember what the hell is in the storage

我也不想写多余的代码

And I don’t want to write extra code

## Install

```
npm i strict-storage
```

## Usage

Api same as Storage

### Example

```typescript
// create file: storage.ts
import getStrictStorage from "strict-storage";

interface LocalStorageType {
  foo: number;
  bar: string[];
}

interface SessionStorageType {
  date: string;
}

const strictLocalStorage = getStrictStorage<LocalStorageType>(localStorage);
const strictSessionStorage =
  getStrictStorage<SessionStorageType>(sessionStorage);

export { strictLocalStorage, strictSessionStorage };
```

```typescript
// other.ts
import { strictLocalStorage } from "./storage.ts";
strictLocalStorage.setItem("foo", 123); // success
strictLocalStorage.setItem("foo", "abc"); // error

strictLocalStorage.setItem("bar", ["a"]); // success
strictLocalStorage.setItem("bar", "a"); // error

const value = strictLocalStorage.getItem("bar"); // value type is string[] or null
const numValue: number = strictLocalStorage.getItem("bar"); // error
```
