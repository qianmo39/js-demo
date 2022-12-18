const routes = {
  "/": {
    title: "Home",
    component: async () => "<p>This is home page</p>",
  },
  "/about": {
    title: "About",
    component: async () => "<p>This is about page</p>",
  },
  "/page": {
    title: "Page",
    component: () =>
      new Promise((resolve) => {
        setTimeout(() => {
          resolve("<p>This is a page delayed by 500ms</p>");
        }, 500);
      }),
  },
};

window.onhashchange = () => {
  const path = location.hash.slice(1);
  const route = routes[path];
  document.title = route.title;
  route.component().then((html) => {
    document.getElementById("view").innerHTML = html;
  });
};

window.onload = () => {
  location.hash ||= "#/";
  window.onhashchange();
};
