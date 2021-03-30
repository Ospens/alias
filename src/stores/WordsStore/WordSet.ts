import { makeAutoObservable } from "mobx";
import { generateUUID } from "utils";
import { ImageSourcePropType } from "react-native";

class WordSet {
  public id: number;

  public name: string;

  public checked: boolean;

  public image: ImageSourcePropType;

  public words: string[];

  constructor(
    data: Pick<WordSet, "id" | "name" | "words" | "checked" | "image">
  ) {
    this.id = data.id ?? generateUUID();
    this.name = data.name;
    this.image = data.image;
    this.checked = data.checked || false;
    this.words = data.words || [];

    makeAutoObservable(this);
  }

  get exampleWords(): string[] {
    return this.words.filter((w) => w.length < 6).slice(0, 3);
  }

  public toggleCheck = () => {
    this.checked = !this.checked;
  };
}

export default WordSet;
