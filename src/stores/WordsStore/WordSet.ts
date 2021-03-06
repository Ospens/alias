import { makeAutoObservable } from "mobx";
import { generateUUID } from "utils";
import { ImageSourcePropType } from "react-native";
import { LocaleWordSet } from "stores/I18NStore";

class WordSet {
  public id: number;

  public name: string;

  public checked: boolean;

  public image: ImageSourcePropType;

  public words: string[];

  constructor(data: LocaleWordSet) {
    this.id = data.id ?? generateUUID();
    this.name = data.name;
    this.image = data.image;
    this.checked = false;
    this.words = data.words || [];

    makeAutoObservable(this);
  }

  get exampleWords(): string[] {
    return this.words.filter((w) => w.length < 6).slice(0, 3);
  }

  public toggleCheck = () => {
    this.checked = !this.checked;
  };

  public setCheck = (value: boolean) => {
    this.checked = value;
  };
}

export default WordSet;
