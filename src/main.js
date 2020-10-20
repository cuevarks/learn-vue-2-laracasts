Vue.component("task", {
  //global component
  template: "<li><slot></slot></li>",
  data() {
    // Since this isn't linked to a single instace of Vue it needs to be called a function that returns the data needed
    return {
      message: "foo",
    };
  },
});

new Vue({
  el: "#root",
});
