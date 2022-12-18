"use strict";

const getPositiveKey = (key, length) => {
  const index = Number(key);
  if (index < 0) {
    key = String(index + length);
  }
  return key;
};

const negativeArray = (arr) => {
  return new Proxy(arr, {
    get(target, key) {
      key = getPositiveKey(key, target.length);
      return Reflect.get(target, key);
    },
    set(target, key, value) {
      key = getPositiveKey(key, target.length);
      return Reflect.set(target, key, value);
    },
  });
};

const arr = negativeArray([5, 6, 7]);

console.log(`arr[-1] = ${arr[-1]}`);
arr[-1] = 222;
arr[-2] = 123;
console.log(arr);
