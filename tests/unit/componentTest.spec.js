import { shallowMount, createLocalVue } from "@vue/test-utils";
import Vuex from "vuex";
import ListComics from "@/views/ListComics";
import VueRouter from "vue-router";

const localVue = createLocalVue();

localVue.use(Vuex);

describe("actions", () => {
  let actions;
  let store;
  let routes;
  let router;

  beforeEach(() => {
    actions = {
      getComics: jest.fn(),
    };
    store = new Vuex.Store({
      actions,
    });
    routes = [
      {
        path: "/comics",
      },
    ];
    router = new VueRouter({
      mode: "history",
      base: process.env.BASE_URL,
      routes,
    });
  });

  it("ListComics must be mounted with the correct URL", () => {
    shallowMount(ListComics, {
      store,
      localVue,
      router,
    });
  });

  it("dispatches getComics on created lifecycle hook", async () => {
    shallowMount(ListComics, { store, localVue });
    expect(actions.getComics).toHaveBeenCalled();
  });
});
