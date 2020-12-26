import { observable, makeAutoObservable } from "mobx";
import UiStore from "../UIStore/UI.store";

class RootStore {
  public uiStore: UiStore;

  public value = 1;

  public someObject = {
    foo: 1,
    bar: "bar",
  };

  constructor() {
    makeAutoObservable(this, {
      someObject: observable.struct,
    });
    this.uiStore = new UiStore(this);
  }

  public get double() {
    return this.value * 2;
  }

  public increment() {
    this.someObject = {
      foo: this.someObject.foo * 2,
      bar: this.someObject.bar + this.someObject.bar,
    };
  }

  public reassign() {
    this.someObject = { ...this.someObject };
  }
}

export default RootStore;
