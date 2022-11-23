"use strict";

function bindUpdates(setProp) {
  return Array.from(document.querySelectorAll("*[data-update]")).reduce(
    (pre, cur) => {
      const key = cur.dataset.update;
      cur.addEventListener("keyup", () => {
        setProp(key, cur.value);
      });
      return { ...pre, [key]: cur };
    },
    {}
  );
}

function bindValues() {
  return [...document.querySelectorAll("*[data-value]")].reduce((pre, cur) => {
    const key = cur.dataset.value;
    pre[key] ||= [];
    pre[key].push(cur);
    return pre;
  }, {});
}

function bind() {
  const values = bindValues();

  const updates = bindUpdates((key, value) => {
    data[key] = value;
  });

  const data = new Proxy(
    {},
    {
      set(_, key, value) {
        values[key].forEach((el) => {
          if (el.value !== undefined) {
            el.value = value;
          } else {
            el.innerText = value;
          }
        });
        return true;
      },
      get(_, key) {
        return updates[key].value;
      },
    }
  );
  return data;
}

const data = bind();
