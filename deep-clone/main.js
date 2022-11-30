let user = {
  name: "John",
  sizes: {
    height: 182,
    width: 50,
  },
};

// let clone = structuredClone(user);
function deepClone(obj) {
  const result = {};
  for (const key in obj) {
    if (typeof obj[key] === "object") {
      result[key] = deepClone(obj[key]);
    } else {
      result[key] = obj[key];
    }
  }
  return result;
}

let clone = deepClone(user);

user.sizes.width = 100;
user.sizes.height = 172;

console.log(clone);
console.log(user);
