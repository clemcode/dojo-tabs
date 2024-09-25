import { describe, expect, it } from "vitest";
import { mount } from "@vue/test-utils";
import Tabs from "./Tabs.vue";

const tabs = [
  {
    name: "Tab1",
    content: "Content1",
  },
  { name: "Tab2", content: "Content2" },
  { name: "Tab3", content: "Content3" },
  { name: "Tab4", content: "Content4" },
];

describe("Tabs", () => {
  it("Should render", () => {
    const wrapper = mount(Tabs);
    expect(wrapper.find(".tabs").exists()).toBe(true);
  });

  it("Should length of button equal tabs", () => {
    const wrapper = mount(Tabs, {
      props: {
        tabs,
      },
    });
    expect(wrapper.findAll("button").length).toBe(tabs.length);
  });

  it("Should tabs and button have same value", () => {
    const wrapper = mount(Tabs, {
      props: {
        tabs,
      },
    });

    const buttons = wrapper.findAll("button");

    const tabsCorrectOrder = tabs.every((tab, index) => {
      return buttons[index].text() === tab.name;
    });

    expect(tabsCorrectOrder).toBe(true);
  });

  it("Should  length of content equal tabs ", () => {
    const wrapper = mount(Tabs, {
      props: {
        tabs,
      },
      slots: {
        tabs,
      },
    });
    expect(wrapper.findAll(".tabs-content").length).toBe(tabs.length);
  });
});
